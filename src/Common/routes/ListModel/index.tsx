import ReactModal from 'react-modal'
import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import ListStore from '../../stores/ListsStore/index'
import {
   TaskManagerHeaderButton,
   TaskManagerHeaderCreate,
   ModalCreateContainer,
   AddWorkspaceInput,
   CreateWorkspaceButton
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
            <TaskManagerHeaderCreate onClick={this.handleOpenModal}>
               <TaskManagerHeaderButton>+ Add List</TaskManagerHeaderButton>
            </TaskManagerHeaderCreate>
            <ReactModal
               style={{
                  overlay: {
                     position: 'fixed',
                     top: 200,
                     left: 300,
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

                     height: '88px',
                     width: '254px'
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
               parentSelector={() => document.querySelector('#create')}
            >
               <ModalCreateContainer>
                  <form onSubmit={this.submit}>
                     <AddWorkspaceInput
                        type='text'
                        placeholder='Add List title'
                        onChange={this.changeWorkspaceValue}
                        name='workSpace'
                     />
                     <CreateWorkspaceButton type='submit'>
                        Add List
                     </CreateWorkspaceButton>
                     <TaskManagerHeaderButton
                        onClick={this.handleCloseModal}
                        cross
                     >
                        X
                     </TaskManagerHeaderButton>
                  </form>
               </ModalCreateContainer>
            </ReactModal>
         </div>
      )
   }
}

export default ListModal
