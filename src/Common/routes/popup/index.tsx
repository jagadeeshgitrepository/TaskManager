import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import tw from 'twin.macro'
import './index.css'
import React from 'react'
import ListsStore from '../../stores/ListsStore/index'
interface MyProps {
   listStore: ListsStore
   deleteListId: string
}
const ReactPopUp = (props: MyProps): React.ReactElement => (
   <div className='popup-container'>
      <Popup
         trigger={
            <button type='button' className='trigger-button'>
               <BiDotsHorizontalRounded />
            </button>
         }
         position='bottom left'
         className='w-2 bg-red-500 cursor-pointer'
      >
         <p
            className='cursor-pointer'
            onClick={() => props.listStore.deleteList(props.deleteListId)}
         >
            Close List
         </p>
      </Popup>
   </div>
)
export default ReactPopUp
