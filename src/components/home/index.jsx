import React, { Component, Fragment } from 'react'
import RouterView from '../../router/RouterView'
import { NavLink } from 'react-router-dom'

export default class index extends Component {
  handleToLink = (path) => {
    this.props.history.push(path)
  }

  render() {
    const { children, navList } = this.props
    return (
      <Fragment>
        <header>头部</header>
        <main>
          <RouterView routerList={children} />
        </main>
        <footer>
          {/* 编程式路由 */}
          {/* {
            children.map((item, index) => {
              return <span key={index} onClick={() => {
                this.handleToLink(item.path)
              }}>{item.title}</span>
            })
          } */}
          {/* 声明式路由 */}
          {
            navList.map((item, index) => {
              return <NavLink to={item.path} key={index}>{item.title}</NavLink>
            })
          }
        </footer>
      </Fragment>
    )
  }
}
