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
   render() {
      const { boardId, lists } = this.state
      return (
         <>
            <Header updateFun={this.updateFun} />
            <BoardRouteContainer>
               <CreateList boardId={boardId} lists={lists} />
            </BoardRouteContainer>
         </>
      )
   }
}
export default BoardRoute
