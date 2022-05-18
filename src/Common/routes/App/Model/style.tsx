import styled from 'styled-components'
import tw from 'twin.macro'

export const TaskManagerHeaderCreate = styled.div`
   ${tw`w-16 h-10 text-white flex flex-row items-center  justify-center `};
   background-color: #4e97c2;
   border-radius: 4px;
`

export const ModalCreateContainer = styled.div`
   ${tw`flex flex-col p-2 text-black justify-between items-start`}
`
export const TaskManagerHeaderButton = styled.button`
${tw`self-end pb-2`}
   color: ${props => (props.cross ? 'black' : '')};

`

export const AddWorkspaceInput = styled.input`
   ${tw`rounded p-2`}
   background-color:#A7B1BF;
   width: 300px;
   height: 40px;
`
export const CreateWorkspaceButton = styled.button`
   ${tw`rounded mt-3 text-white `}
   width: 137px;
   height: 40px;
   background-color: #1d4ed8;
`
