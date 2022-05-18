import React, { Component } from 'react'
import { CreateBoardContainer, CreateBoardHeading } from './style'

class CreateBoard extends Component {
   render(): React.ReactElement {
      return (
         <CreateBoardContainer>
            <CreateBoardHeading>+ Create new board</CreateBoardHeading>
         </CreateBoardContainer>
      )
   }
}
export default CreateBoard
