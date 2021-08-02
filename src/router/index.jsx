import React, { Component, Fragment } from 'react'
import RouterList from './RouterList'
import RouterView from './RouterView'

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <RouterView routerList={RouterList} />
      </Fragment>
    )
  }
}
