import React, { Component } from 'react'
import Cookies from 'js-cookie'

import { observer, inject } from 'mobx-react'
import HeaderStore from '../../stores/HeaderStore/index'
import TaskStore from '../../stores/TasksStore/index'
import ListsStore from '../../stores/ListsStore/index'
import Header from '../Header/index'
import ModalStores from '../../stores/ModalStores/index'
import CreateList from '../CreateList/index'
import { BoardRouteContainer } from './style'

interface MyProps {
   headerStore: HeaderStore
   taskStore: TaskStore
   listStore: ListsStore
   modalStore: ModalStores
   match: any
}

@inject('headerStore', 'taskStore', 'listStore', 'modalStore')
@observer
class BoardRoute extends Component<MyProps> {
   componentDidMount() {
      const { match, listStore } = this.props
      const { params } = match
      const { id } = params
      listStore.updateCurrentBoardId(id)
      listStore.getLists()
   }

   render() {
      return (
         <>
            <Header
               headerStore={this.props.headerStore}
               modalStore={this.props.modalStore}
            />
            <BoardRouteContainer>
               <CreateList
                  listStore={this.props.listStore}
                  taskStore={this.props.taskStore}
                  modalStore={this.props.modalStore}
               />
            </BoardRouteContainer>
         </>
      )
   }
}
export default BoardRoute
