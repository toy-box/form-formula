import React, { FC, useState, useCallback } from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { Editor as CodemirrorEditor } from 'codemirror'
import classNames from 'classnames'
import { Toolbar } from './components'
import { FunctionGroup, Variable } from './types'
import { default as funs } from './functions'

import 'codemirror/mode/spreadsheet/spreadsheet.js'
import './styles'

export interface FormulaEditorProps {
  title?: string
  value?: string
  variables?: Variable[]
  functions?: FunctionGroup[]
  onChange?: (value: string) => void
  className?: string
  style?: React.CSSProperties
}

const cmOptions = {
  mode: 'text/x-spreadsheet',
  line: true,
  lineWrapping: true,
}


const FormulaEditor: FC<FormulaEditorProps> = ({ title, value = '', variables = [], functions = funs, onChange, style, className }) => {
  const [editor, setEditor] = useState<CodemirrorEditor>()
  const prefixCls = 'formula-editor'
  const onReady = (editor: CodemirrorEditor, value: string) => {
    setEditor(editor)
    if (value != null && value !== '') {
      initDocTag(editor, value)
    }
  }

  const handleChange = (editor: CodemirrorEditor, data: any, value: any) => {
    if (value != null || value !== '') {
      initDocTag(editor, value)
    }
  }

  const initDocTag = (editor: any, code: string) => {
    const contents = code.split('\n')
    contents.forEach((content, idx) => initLineTag(editor, content, idx))
  }

  const initLineTag = (editor: any, content: any, line: any) => {
    variables.forEach((variable) => {
      const regex = new RegExp(
        variable.value
          .replace('(', '\\(')
          .replace(')', '\\)')
          .replace('{', '\\{)')
          .replace('}', '\\})')
          .replace('[', '\\[)')
          .replace(']', '\\])'),
        'g',
      )
      while (regex.exec(content) !== null) {
        const begin = { line, ch: regex.lastIndex - variable.value.length }
        const end = { line, ch: regex.lastIndex }
        replaceVariable(editor, begin, end, variable)
      }
    })
  }

  const insertFun = useCallback((code: string) => {
    if (editor == null) return
    const doc = editor.getDoc()
    const pos = doc.getCursor()
    doc.replaceRange(`${code}()`, pos)
    pos.ch += code.length + 1
    doc.setCursor(pos)
    editor.focus()
  }, [editor])

  const insertVariable = (variable: any) =>{
    if (editor == null) return
    const doc = editor.getDoc()
    const pos = doc.getCursor()
    doc.replaceRange(variable.value, pos)
    editor.focus()
  }

  const replaceVariable = (editor: any, begin: any, end: any, val: any) => {
    const doc = editor.getDoc()
    const el = document.createElement('span')
    el.innerText = val.label
    el.className = 'formula-tag'
    doc.markText(begin, end, {
      replacedWith: el,
    })
  }

  return <div className={classNames(prefixCls, className)} style={style}>
    <Toolbar
      functions={functions}
      variables={variables}
      insertFun={insertFun}
      insertVariable={insertVariable}
    />
    <div className={`${prefixCls}-main`}>
      <div className={`${prefixCls}-main__code`}>
        <h1>{title}<span className="equle">=</span></h1>
        <CodeMirror
          value={value}
          options={cmOptions}
          editorDidMount={onReady}
          onChange={(editor, data, value) => {
            handleChange(editor, data, value)
          }}
        />
      </div>
      <div className={`${prefixCls}-main__panel`}></div>
    </div>
  </div>
}

export default FormulaEditor
