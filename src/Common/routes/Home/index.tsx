import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { observer, inject } from 'mobx-react'
import 'twin.macro'
import Header from '../Header'
import CreateBoard from '../CreateBoards/index'
import HeaderStore from '../../stores/HeaderStore/index'
import { HomeContainer } from './styledComponents'

interface HeaderProps {
   headerStore: HeaderStore
}
@inject('headerStore')
@observer
class Home extends Component<HeaderProps> {
   render(): React.ReactElement {
      return (
         <>
            <Header headerStore={this.props.headerStore} />
            <HomeContainer>
               <CreateBoard headerStore={this.props.headerStore} />
            </HomeContainer>
         </>
      )
   }
}

export default Home
