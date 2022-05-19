import React, { Component } from 'react'
import Cookies from 'js-cookie'
import Header from '../Header/index'

import CreateList from '../CreateList/index'
import { BoardRouteContainer } from './style'

interface MyProps {
   match: any
}
class BoardRoute extends Component<MyProps> {
   state = { lists: [], boardId: '' }
   componentDidMount() {
      const { lists } = this.state
      const { match } = this.props
      const { params } = match
      const { id } = params
      this.setState({ boardId: id }, this.getLists)
   }
   updateFun = (unique: string) => {
      console.log('not required')
   }

   getLists = async () => {
      const jwtToken = Cookies.get('jwt_token')
      const { boardId } = this.state
      console.log('tasks created board id is')
      console.log(boardId)
      const url = `https://api.trello.com/1/boards/${boardId}/lists?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}`
      const options = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         }
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log('board detail lists')
      this.setState({ lists: [...data] })
   }

   addList = async listname => {
      const jwtToken = Cookies.get('jwt_token')
      const { boardId } = this.state
      console.log('board Id')
      console.log(boardId)
      const url = `https://api.trello.com/1/boards/${boardId}/lists?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}&name=${listname}`
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         }
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log('lists created')
      console.log(response)
      this.getLists()
   }
   addTask = async (listId, taskName) => {
      const jwtToken = Cookies.get('jwt_token')

      const url = `https://api.trello.com/1/cards?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}&name=${taskName}&idList=${listId}`
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         }
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log('tasks  created')
      console.log(response)
      console.log(data)
      this.getLists()
   }

   render() {
      const { boardId, lists } = this.state
      return (
         <>
            <Header updateFun={this.updateFun} />
            <BoardRouteContainer>
               <CreateList
                  boardId={boardId}
                  lists={lists}
                  addList={this.addList}
                  addTask={this.addTask}
               />
            </BoardRouteContainer>
         </>
      )
   }
}
export default BoardRoute
