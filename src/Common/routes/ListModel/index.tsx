import ReactModal from 'react-modal'
import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import tw from 'twin.macro'
import ListStore from '../../stores/ListsStore/index'

import {
   TaskManagerListCreateButton,
   TaskManagerListCreateContainer,
   ModalCreateContainer,
   AddWorkspaceInput,
   CreateWorkspaceButton,
   FormContainer,
   TaskManagerButtonCloseContainer
} from './style'
import './index.css'

interface ListProps {
   listStore: ListStore
}
@inject('listStore')
@observer
class ListModal extends React.Component<ListProps> {
   @observable handleModal = { showModal: false, workspaceValue: '' }

   @action.bound
   handleOpenModal() {
      this.handleModal.showModal = true
   }

   @action.bound
   handleCloseModal() {
      this.handleModal.showModal = false
   }

   @action.bound
   changeWorkspaceValue(e: React.FormEvent<HTMLInputElement>) {
      const target = e.target as typeof e.target & {
         workSpace: { value: string }
      }
      console.log(e.currentTarget.value)
      this.handleModal.workspaceValue = e.currentTarget.value
   }

   @action.bound
   submit(e: React.SyntheticEvent) {
      const { listStore } = this.props
      e.preventDefault()
      console.log(this.handleModal.workspaceValue)
      listStore.addList(this.handleModal.workspaceValue)
   }
   render() {
      return (
         <div id='root'>
            <TaskManagerListCreateContainer onClick={this.handleOpenModal}>
               <TaskManagerListCreateButton id='createList'>
                  + Add List
               </TaskManagerListCreateButton>
            </TaskManagerListCreateContainer>
            <ReactModal
               style={{
                  overlay: {
                     position: 'fixed',
                     top: 0,
                     left: 50,
                     right: 0,
                     bottom: 0,

                     backgroundColor: 'transparent'
                  },
                  content: {
                     position: 'absolute',

                     border: '1px solid #ccc',
                     background: '#fff',
                     overflow: 'auto',
                     WebkitOverflowScrolling: 'touch',
                     borderRadius: '4px',
                     outline: 'none',

                     height: '102px',
                     width: '251px'
                  }
               }}
               isOpen={this.handleModal.showModal}
               contentLabel='Minimal Modal Example'
               className='bg-white"
               height: 130px,
               width: 254px,
               left: 0px;
               top: 0px;
               border-radius: 4px;
               '
               parentSelector={() => document.querySelector('#createList')}
            >
               <ModalCreateContainer>
                  <FormContainer onSubmit={this.submit}>
                     <AddWorkspaceInput
                        type='text'
                        placeholder='Add List title'
                        onChange={this.changeWorkspaceValue}
                        name='workSpace'
                     />
                     <TaskManagerButtonCloseContainer>
                        <CreateWorkspaceButton type='submit'>
                           Add List
                        </CreateWorkspaceButton>
                        <TaskManagerListCreateButton
                           onClick={this.handleCloseModal}
                           cross
                           className='mt-2 ml-2'
                        >
                           X
                        </TaskManagerListCreateButton>
                     </TaskManagerButtonCloseContainer>
                  </FormContainer>
               </ModalCreateContainer>
            </ReactModal>
         </div>
      )
   }
}

export default ListModal
