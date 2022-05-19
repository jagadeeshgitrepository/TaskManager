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
   addBoard: (boardname: string) => void
}
class CreateBoard extends Component<MyProps> {
   createBoard = boardname => {
      this.props.addBoard(boardname)
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
