import React, { FC, useState, useCallback, useMemo } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { Editor as CodemirrorEditor } from 'codemirror';
import { isArr, isObj } from '@formily/shared';
import { ISchema } from '@formily/json-schema';
import classNames from 'classnames';
import { Toolbar } from './components';
import { FunctionGroup, Variable, MetaSchema } from './types';
import { default as funs } from './functions';
import { parseSchema, cleanVoid } from './utils/parseSchema';
import './styles';

import 'codemirror/mode/spreadsheet/spreadsheet.js';

export interface FormulaEditorProps {
  title?: string;
  value?: string;
  path?: string;
  functions?: FunctionGroup[];
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
  schema?: ISchema;
  metaSchema?: MetaSchema;
}

const cmOptions = {
  mode: 'text/x-spreadsheet',
  line: true,
  lineWrapping: true,
};

const FormulaEditor: FC<FormulaEditorProps> = ({
  title,
  value = '',
  path,
  functions = funs,
  onChange,
  style,
  className,
  schema,
  metaSchema,
}) => {
  const [editor, setEditor] = useState<CodemirrorEditor>();
  const prefixCls = 'formula-editor';
  const isSchema = !!schema;
  const innerVariables = useMemo(() => {
    if (schema) {
      const result = cleanVoid(schema);
      if (result) {
        return isArr(result)
          ? (result
              .map((r) => (r.schema ? parseSchema(r.schema, '', path) : null))
              .filter((v) => v != null) as Variable[])
          : result.schema
          ? parseSchema(result.schema, '', path).children
          : [];
      }
      return [];
    } else if (metaSchema) {
      if (isArr(metaSchema)) {
        const result = metaSchema.map((r) => {
          return {
            label: r.name,
            value: r.key,
            type: r.type,
          };
        });
        return result as any[];
      } else if (isObj(metaSchema)) {
        const result = metaSchema?.list.map((r) => {
          return {
            label: r.name,
            value: r.key,
            type: r.type,
          };
        });
        return result as any[];
      }
      return [];
    }
  }, []);

  const onReady = (editor: CodemirrorEditor, value: string) => {
    setEditor(editor);
    if (value != null && value !== '') {
      initDocTag(editor, value);
    }
  };

  const handleChange = (editor: CodemirrorEditor, data: any, value: any) => {
    if (value != null || value !== '') {
      initDocTag(editor, value);
    }
    onChange && onChange(value);
  };

  const initDocTag = (editor: any, code: string) => {
    const contents = code.split('\n');
    contents.forEach((content, idx) =>
      initLineTag(editor, content, idx, innerVariables),
    );
  };

  const initLineTag = (
    editor: any,
    content: any,
    line: any,
    innerVariables: Variable[] = [],
  ) => {
    (innerVariables || []).forEach((variable) => {
      const variableMark = `{!${variable.value}}`;
      const regex = new RegExp(variableMark, 'g');
      while (regex.exec(content) !== null) {
        const begin = { line, ch: regex.lastIndex - variableMark.length };
        const end = { line, ch: regex.lastIndex };
        replaceVariable(editor, begin, end, variable);
      }
      if (variable.children && variable.children.length > 0) {
        initLineTag(editor, content, line, variable.children);
      }
    });
  };

  const insertFun = useCallback(
    (code: string) => {
      if (editor == null) return;
      const doc = editor.getDoc();
      const pos = doc.getCursor();
      doc.replaceRange(`${code}()`, pos);
      pos.ch += code.length + 1;
      doc.setCursor(pos);
      editor.focus();
    },
    [editor],
  );

  const insertVariable = useCallback(
    (variable: string) => {
      if (editor == null) return;
      const doc = editor.getDoc();
      const pos = doc.getCursor();
      doc.replaceRange(`{!${variable}}`, pos, pos);
      editor.focus();
    },
    [editor],
  );

  const replaceVariable = (
    editor: CodemirrorEditor,
    begin: any,
    end: any,
    val: Variable,
  ) => {
    const doc = editor.getDoc();
    const el = document.createElement('span');
    // TODO: 增加父节点名称
    el.innerText = val.label || val.value;
    el.className = 'formula-tag';
    doc.markText(begin, end, {
      replacedWith: el,
    });
  };

  return (
    <div className={classNames(prefixCls, className)} style={style}>
      <Toolbar
        functions={functions}
        variables={innerVariables}
        insertFun={insertFun}
        insertVariable={insertVariable}
      />
      <div className={`${prefixCls}-main`}>
        <div className={`${prefixCls}-main__code`}>
          <h1>
            {title}
            <span className="equle">=</span>
          </h1>
          <CodeMirror
            value={value}
            options={cmOptions}
            editorDidMount={onReady}
            onChange={handleChange}
          />
        </div>
        <div className={`${prefixCls}-main__panel`}></div>
      </div>
    </div>
  );
};

export default FormulaEditor;
