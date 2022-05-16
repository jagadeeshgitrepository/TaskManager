import React, { Component } from 'react'

import { observer } from 'mobx-react'
import 'twin.macro'
import Header from '../Header'
import { HomeContainer } from './styledComponents'

class Home extends Component {
   render(): React.ReactElement {
      return (
         <>
            <Header />
            <HomeContainer></HomeContainer>
         </>
      )
   }
}

export default Home
