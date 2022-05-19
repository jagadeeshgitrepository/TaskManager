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
class BoardModal extends React.Component<HeaderProps> {
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
      e.preventDefault()
      const { headerStore } = this.props
      console.log(this.handleModal.workspaceValue)
      headerStore.addBoard(this.handleModal.workspaceValue)
   }
   render() {
      return (
         <div id='root1'>
            <TaskManagerHeaderCreate onClick={this.handleOpenModal}>
               <TaskManagerHeaderButton id='createBoard'>
                  + Create Board
               </TaskManagerHeaderButton>
            </TaskManagerHeaderCreate>
            <ReactModal
               style={{
                  overlay: {
                     position: 'fixed',
                     top: 100,
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
               className='w-96 h-96 bg-white'
               parentSelector={() => document.querySelector('#createBoard')}
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
                        Add Board
                     </CreateWorkspaceButton>
                  </form>
               </ModalCreateContainer>
            </ReactModal>
         </div>
      )
   }
}

export default BoardModal
