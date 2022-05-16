import React, { Component } from 'react'
import {
   TaskManagerContainer,
   TaskManagerLoginImage,
   TaskManagerLoginContainer,
   TaskManagerLogo,
   TaskManagerLoginHeading,
   TaskManagerButton
} from './style'
class Login extends Component {
   render(): React.ReactElement {
      return (
         <TaskManagerContainer>
            <TaskManagerLogo src='https://res.cloudinary.com/dmpepn8dm/image/upload/v1652679637/Task%20Manager/Group_7401_usqlo2.png' />
            <TaskManagerLoginContainer>
               <TaskManagerLoginImage src='https://res.cloudinary.com/dmpepn8dm/image/upload/v1652678326/Task%20Manager/Group_7405_erlsuc.png' />
               <TaskManagerLoginHeading>
                  Task tracking for your everyday needs
               </TaskManagerLoginHeading>
               <TaskManagerButton>LOG IN WITH TRELLO</TaskManagerButton>
            </TaskManagerLoginContainer>
         </TaskManagerContainer>
      )
   }
}

export default Login
