import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

export default class RouterView extends Component {
  render() {
    const { routerList } = this.props
    //由于重定向中有个to属性，所以需要在这一步进行筛选
    let filterList = routerList.filter(item => !item.to)
    let redirectList = routerList.filter(item => item.to)
    return (
      <Switch>
        {
          filterList.map((item, index) => {
            let Com = item.component

            return < Route key={index} path={item.path} render={(props) => {
              if (item.auth) {
                return <Redirect to="/login" from="/" />
              }
              if (item.children) {
                let navList = item.children.filter(item1 => !item1.to)
                return <Com children={item.children} navList={navList} {...props} />
              } else {
                return <Com {...props} />
              }
            }} />
          })
        }
        {
          redirectList.map((item, index) => {
            return <Redirect key={index} to={item.to} from={item.from} />
          })
        }
      </Switch>
    )
  }
}
