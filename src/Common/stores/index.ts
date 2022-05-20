import CounterStore from './CounterStore'
import HeaderStore from './HeaderStore'
import TaskStore from './TasksStore'
import ListsStore from './ListsStore'
import ModalStores from './ModalStores'

const counterStore = new CounterStore()
const headerStore = new HeaderStore()
const taskStore = new TaskStore()
const listStore = new ListsStore()
const modalStore = new ModalStores()

export default {
   counterStore,
   headerStore,
   taskStore,
   listStore,
   modalStore
}
