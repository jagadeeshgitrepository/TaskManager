import ReactModal from 'react-modal'
import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import HeaderStore from '../../stores/HeaderStore/index'
import {
   TaskManagerHeaderButton,
   TaskManagerHeaderCreate,
   ModalCreateContainer,
   AddWorkspaceInput,
   CreateWorkspaceButton
} from './style'
import './index.css'

interface HeaderProps {
   headerStore: HeaderStore
}
@inject('headerStore')
@observer
class Modal extends React.Component<HeaderProps> {
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
      const { headerStore } = this.props
      e.preventDefault()
      console.log(this.handleModal.workspaceValue)
      headerStore.createWorkSpace(this.handleModal.workspaceValue)
   }
   render() {
      return (
         <div id='root'>
            <TaskManagerHeaderCreate id='create'>
               <TaskManagerHeaderButton onClick={this.handleOpenModal}>
                  Create
               </TaskManagerHeaderButton>
            </TaskManagerHeaderCreate>
            <ReactModal
               style={{
                  overlay: {
                     position: 'fixed',
                     top: 25,
                     left: 100,
                     right: 0,
                     bottom: 0,
                     backgroundColor: 'transparent'
                  },
                  content: {
                     position: 'absolute',
                     top: '40px',
                     left: '40px',
                     right: '40px',
                     bottom: '40px',
                     border: '1px solid #ccc',

                     overflow: 'auto',
                     WebkitOverflowScrolling: 'touch',
                     borderRadius: '4px',
                     outline: 'none',
                     padding: '20px',
                     width: '300px',
                     height: '200px'
                  }
               }}
               isOpen={this.handleModal.showModal}
               contentLabel='Minimal Modal Example'
               className=' h-96 bg-white'
               parentSelector={() => document.querySelector('#root')}
            >
               <ModalCreateContainer>
                  <TaskManagerHeaderButton
                     onClick={this.handleCloseModal}
                     cross
                  >
                     X
                  </TaskManagerHeaderButton>
                  <form onSubmit={this.submit}>
                     <AddWorkspaceInput
                        type='text'
                        placeholder='Add board title'
                        onChange={this.changeWorkspaceValue}
                        name='workSpace'
                     />
                     <CreateWorkspaceButton type='submit'>
                        Add User
                     </CreateWorkspaceButton>
                  </form>
               </ModalCreateContainer>
            </ReactModal>
         </div>
      )
   }
}

export default Modal
