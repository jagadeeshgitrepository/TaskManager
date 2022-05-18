import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import BoardModal from '../App/BoardModel/index'
import ListModal from '../App/ListModel/index'

import {
   CreateListContainer,
   CreateListHeading,
   CreateListUnorderedList,
   CreatedListItem
} from './style'

interface MyProps {
   boardId: string
   lists: any
}
class CreateList extends Component<MyProps> {
   createList = async listname => {
      const jwtToken = Cookies.get('jwt_token')
      const { boardId } = this.props
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
   }

   render(): React.ReactElement {
      console.log('lists')
      const { lists } = this.props
      console.log('hello lists')
      console.log(lists)
      console.log(this.props.boardId)
      return (
         <>
            <CreateListUnorderedList>
               {lists.map((eachBoard: { name: string; id: 'string' }) => (
                  <Link to={`/board/${eachBoard.id}`} key={eachBoard.id}>
                     <CreatedListItem id={eachBoard.id}>
                        {eachBoard.name}
                     </CreatedListItem>
                  </Link>
               ))}
            </CreateListUnorderedList>

            <ListModal createList={this.createList} />
         </>
      )
   }
}
export default CreateList
