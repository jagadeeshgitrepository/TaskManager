import ReactModal from 'react-modal'
import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import {
   TaskManagerHeaderButton,
   TaskManagerHeaderCreate,
   ModalCreateContainer,
   AddWorkspaceInput,
   CreateWorkspaceButton
} from './style'
import './index.css'

interface MyProps {
   createworkSpace: (name: string) => void
}

@observer
class Modal extends React.Component<MyProps> {
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
      console.log(this.handleModal.workspaceValue)
      this.props.createworkSpace(this.handleModal.workspaceValue)
   }
   render() {
      return (
         <div id='root'>
            <TaskManagerHeaderCreate>
               <TaskManagerHeaderButton
                  onClick={this.handleOpenModal}
                  id='create'
               >
                  Create
               </TaskManagerHeaderButton>
            </TaskManagerHeaderCreate>
            <ReactModal
               style={{
                  overlay: {
                     position: 'fixed',
                     top: 0,
                     left: 0,
                     right: 0,
                     bottom: 0,
                     backgroundColor: 'rgba(255, 255, 255, 0.75)'
                  },
                  content: {
                     position: 'absolute',
                     top: '40px',
                     left: '40px',
                     right: '40px',
                     bottom: '40px',
                     border: '1px solid #ccc',
                     background: '#fff',
                     overflow: 'auto',
                     WebkitOverflowScrolling: 'touch',
                     borderRadius: '4px',
                     outline: 'none',
                     padding: '20px',
                     width: '400px',
                     height: '200px'
                  }
               }}
               isOpen={this.handleModal.showModal}
               contentLabel='Minimal Modal Example'
               className='w-96 h-96 bg-white'
               parentSelector={() => document.querySelector('#create')}
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
