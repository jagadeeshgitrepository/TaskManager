import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import {
   TaskManagerContainer,
   TaskManagerLoginImage,
   TaskManagerLoginContainer,
   TaskManagerLogo,
   TaskManagerLoginHeading,
   TaskManagerButton
} from './style'

interface MyProps {
   location: {
      hash: string
   }
   history: any
}
class Login extends Component<MyProps, { message: string }> {
   render(): React.ReactElement {
      const { location } = this.props
      const { hash } = location
      const jwtToken = hash.slice(7, hash.length)

      if (jwtToken.length !== 0) {
         Cookies.set('jwt_token', jwtToken, { expires: 3 })
      } else {
         console.log('invalid api key')
      }
      const token = Cookies.get('jwt_token')
      if (token !== undefined) return <Redirect to='/home' />
      return (
         <TaskManagerContainer>
            <TaskManagerLogo src='https://res.cloudinary.com/dmpepn8dm/image/upload/v1652679637/Task%20Manager/Group_7401_usqlo2.png' />
            <TaskManagerLoginContainer>
               <TaskManagerLoginImage src='https://res.cloudinary.com/dmpepn8dm/image/upload/v1652678326/Task%20Manager/Group_7405_erlsuc.png' />
               <TaskManagerLoginHeading>
                  Task tracking for your everyday needs
               </TaskManagerLoginHeading>
               <TaskManagerButton>
                  <a href='https://trello.com/1/OAuthAuthorizeToken?expiration=never&name=TaskManager&scope=read,write,account&key=8f4c47d39646c71bd5f9e09471af0d3e&callback_method=fragment&return_url=http://localhost:3004/'>
                     LOG IN WITH TRELLO
                  </a>
               </TaskManagerButton>
            </TaskManagerLoginContainer>
         </TaskManagerContainer>
      )
   }
}

export default Login
