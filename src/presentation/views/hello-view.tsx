import React from 'react'
import style from './hello.css'
export class Hello extends React.Component {
  render (): React.ReactNode {
    return <p className={style.color}>Hello World</p>
  }
}
