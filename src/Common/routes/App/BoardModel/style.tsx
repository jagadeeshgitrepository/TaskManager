import styled from 'styled-components'
import tw from 'twin.macro'

export const TaskManagerHeaderCreate = styled.div`
   ${tw`rounded flex flex-col ml-12 text-white justify-center items-center`};
   background-color: #2c90d0;
   width: 341px;
   height: 157px;
`

export const ModalCreateContainer = styled.div`
   ${tw`flex flex-col p-2 text-black justify-between items-start`}
`
export const TaskManagerHeaderButton = styled.button`
${tw`   pb-2`}
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
