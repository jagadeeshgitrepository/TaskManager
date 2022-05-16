import React, { Component } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import {
   TaskManagerHeader,
   TaskManagerHeaderMenuItems,
   TaskManagerMenuItemList,
   TaskManagerHeaderHome,
   TaskManagerDropDown
} from './style'

class Header extends Component {
   render(): React.ReactElement {
      const options = ['Organization', 'two', 'three']
      return (
         <TaskManagerHeader>
            <TaskManagerHeaderMenuItems>
               <TaskManagerMenuItemList>
                  <TaskManagerHeaderHome>
                     <AiOutlineHome />
                     <TaskManagerDropDown
                        options={options}
                        placeholder='Select an option'
                     />
                  </TaskManagerHeaderHome>
               </TaskManagerMenuItemList>
            </TaskManagerHeaderMenuItems>
         </TaskManagerHeader>
      )
   }
}
export default Header
