import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import BoardModal from '../BoardModel/index'
import HeaderStore from '../../stores/HeaderStore/index'

import {
   CreateBoardContainer,
   CreateBoardHeading,
   CreateBoardUnorderedList,
   CreatedBoardItem
} from './style'

interface HeaderProps {
   headerStore: HeaderStore
}
@inject('headerStore')
@observer
class CreateBoard extends Component<HeaderProps> {
   render(): React.ReactElement {
      console.log('boards')
      const { headerStore } = this.props
      const { boards } = headerStore.headerState
      console.log('hello boards')

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

            <BoardModal headerStore={this.props.headerStore} />
         </>
      )
   }
}
export default CreateBoard
