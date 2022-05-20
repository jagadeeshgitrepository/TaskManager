import styled from 'styled-components'
import tw from 'twin.macro'

export const TaskManagerHeaderCreate = styled.div`
   ${tw`rounded text-white flex flex-col ml-12 justify-center items-center`};
   height: 48px;
   width: 254px;

   background-color: #2c90d0;
`

export const ModalCreateContainer = styled.div`
   ${tw`flex flex-col text-black justify-between items-start`}
   width: 254px;
`
export const TaskManagerHeaderButton = styled.button`
${tw`   pb-2`}
   color: ${props => (props.cross ? 'black' : '')};

`

export const AddWorkspaceInput = styled.input`
   ${tw`rounded p-2 `}
   border: 1px solid #0967D2;
   height: 28px;
   width: 222px;
`
export const CreateWorkspaceButton = styled.button`
   ${tw`rounded mt-3 text-white  `}
   width: 137px;
   height: 40px;
   background-color: #1d4ed8;

   width: 88px;
   height: 32px;

   background-color: #1d4ed8;
`
