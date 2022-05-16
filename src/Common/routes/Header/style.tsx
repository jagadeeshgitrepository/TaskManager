import styled from 'styled-components'
import tw from 'twin.macro'

export const TaskManagerHeader = styled.nav`
   ${tw`flex flex-row justify-start pl-12 pr-48 pt-6 pb-6`};
   background-color: #0067a3;
   height: 90px;
`

export const TaskManagerHeaderMenuItems = styled.ul`
   ${tw`flex flex-row items-center w-screen justify-between list-none pl-0`};
`

export const TaskManagerMenuItemList = styled.li`
   ${tw`flex flex-row items-center   justify-between w-96`};
`

export const TaskManagerHeaderHome = styled.div`
   ${tw`w-10 h-10 text-white flex flex-row items-center  justify-center `};
   background-color: #4e97c2;
   border-radius: 4px;
`

export const TaskManagerHeaderBoards = styled.div`
   ${tw` h-10 text-white flex flex-row items-center `};
   width: 136px;
   justify-content: space-around;
   background-color: #2fa9f1;
   border-radius: 4px;
`

export const TaskManagerHeaderBoardLogo = styled.img`
   ${tw`w-6 h-6`};
`

export const TaskManagerHeaderBoardHeading = styled.h1`
   ${tw`font-bold	`}
`
export const TaskManagerHeaderLogo = styled.img`
   ${tw`w-48 h-10`}
`

export const TaskManagerSearchContainer = styled.div`
   ${tw`flex flex-row items-center h-10  text-white`}
   justify-content:space-around;
   width: 264px;
   background-color: #4e97c2;
   border-radius: 4px;
`

export const TaskManagerSearchInput = styled.input`
   ${tw`bg-transparent w-48 border-0 `};
   outline: none;
`

export const TaskManagerLogoutHeading = styled.h1`
   ${tw`text-white`};
`
export const TaskManagerProfile = styled.div`
   ${tw`text-white w-10 h-10 rounded-3xl`};
   background-color: #bae3ff;
`

export const TaskManagerProfileHeading = styled.h1`
   ${tw`flex flex-col justify-center m-2 items-center`};
   background-color: #bae3ff;
   color: #0967d2;
`
