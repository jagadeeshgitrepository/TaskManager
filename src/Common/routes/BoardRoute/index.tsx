import React, { Component } from 'react'
import Cookies from 'js-cookie'

import { observer, inject } from 'mobx-react'
import HeaderStore from '../../stores/HeaderStore/index'

import Header from '../Header/index'

import CreateList from '../CreateList/index'
import { BoardRouteContainer } from './style'
interface MyProps {
   match: any
}
interface HeaderProps extends MyProps {
   headerStore: HeaderStore
}

@inject('headerStore')
@observer
class BoardRoute extends Component<HeaderProps> {
   componentDidMount() {
      const { match, headerStore } = this.props
      const { params } = match
      const { id } = params
      headerStore.updateCurrentBoardId(id)
      headerStore.getLists()
      alert('hello')
   }

   render() {
      return (
         <>
            <Header headerStore={this.props.headerStore} />
            <BoardRouteContainer>
               <CreateList headerStore={this.props.headerStore} />
            </BoardRouteContainer>
         </>
      )
   }
}
export default BoardRoute
