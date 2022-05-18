import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import BoardModal from '../App/BoardModel/index'

import {
   CreateBoardContainer,
   CreateBoardHeading,
   CreateBoardUnorderedList,
   CreatedBoardItem
} from './style'

interface MyProps {
   currentWorkSpace: string
   boards: any
}
class CreateBoard extends Component<MyProps> {
   createBoard = async boardname => {
      const jwtToken = Cookies.get('jwt_token')
      const url = `https://api.trello.com/1/boards?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}&name=${boardname}`
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         }
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(response)
   }

   render(): React.ReactElement {
      console.log('boards')
      const { boards } = this.props
      console.log('hello boards')
      console.log(boards)
      console.log(this.props.currentWorkSpace)
      return (
         <>
            <CreateBoardUnorderedList>
               {boards.map((eachBoard: { name: string; id: 'string' }) => (
                  <Link to={`/board/${eachBoard.id}`} key={eachBoard.id}>
                     <CreatedBoardItem id={eachBoard.id}>
                        {eachBoard.name}
                     </CreatedBoardItem>
                  </Link>
               ))}
            </CreateBoardUnorderedList>

            <BoardModal createBoard={this.createBoard} />
         </>
      )
   }
}
export default CreateBoard
