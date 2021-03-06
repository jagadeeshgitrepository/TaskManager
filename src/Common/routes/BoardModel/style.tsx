import styled from 'styled-components'
import tw from 'twin.macro'

export const TaskManagerCreateBoardContainer = styled.div`
   ${tw`rounded flex flex-col ml-12 bg-white text-white justify-center  items-center`};

   width: 341px;
   height: 157px;
`

export const ModalCreateContainer = styled.div`
   ${tw`flex flex-col p-2 text-black justify-between items-start`}
`
export const TaskManagerCreateButton = styled.button`
${tw` text-black   pb-2`}
   color: ${props => (props.cross ? 'black' : '')};

`

export const AddWorkspaceInput = styled.input`
   ${tw`rounded p-2`}
   background-color:#A7B1BF;
   width: 250px;
   height: 40px;
`
export const CreateWorkspaceButton = styled.button`
   ${tw`rounded mt-3 text-white `}
   width: 137px;
   height: 40px;
   background-color: #1d4ed8;
`
