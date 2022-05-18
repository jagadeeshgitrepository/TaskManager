import styled from 'styled-components'
import tw from 'twin.macro'

export const TaskManagerHeader = styled.nav`
   ${tw`flex flex-row justify-start pl-2 pr-2`};
   background-color: #0067a3;
   height: 90px;
`

export const TaskManagerHeaderMenuItems = styled.ul`
   ${tw`flex flex-row items-center w-screen justify-between list-none pl-0`};
`

export const TaskManagerMenuItemList = styled.li`
   ${tw`flex flex-row items-center  justify-between pl-0 w-1/4`};
   @media (max-width: 713px) {
      ${tw`w-96`}
   }
`

export const TaskManagerHeaderHome = styled.div`
   ${tw`w-10 h-10 text-white flex flex-row items-center  justify-center `};
   background-color: #4e97c2;
   border-radius: 4px;
`
export const TaskManagerHeaderCreate = styled.div`
   ${tw`w-16 h-10 text-white flex flex-row items-center  justify-center `};
   background-color: #4e97c2;
   border-radius: 4px;
`

export const TaskManagerHeaderButton = styled.button``
export const TaskManagerHeaderBriefContainer = styled.div`
   ${tw`w-10 h-10 text-white flex flex-row items-center  justify-center `};
   background-color: #4e97c2;

   border-radius: 4px;
   @media (min-width: 713px) {
      display: none;
   }
`
export const TaskManagerHeaderBriefCase = styled.img`
   ${tw`w-5 h-5 text-white flex flex-row items-center  justify-center `};
   background-color: #4e97c2;
   border-radius: 4px;
`

export const TaskManagerHeaderBoards = styled.div`
   ${tw` h-10 text-white flex flex-row items-center `};
   width: 136px;
   justify-content: space-around;
   background-color: #2fa9f1;
   border-radius: 4px;
   @media (max-width: 1000px) {
      ${tw`w-8`}
   }
`

export const TaskManagerHeaderBoardLogo = styled.img`
   ${tw`w-6 h-6`};
`

export const TaskManagerHeaderBoardHeading = styled.h1`
   ${tw`font-bold	`}
   @media(max-width:1000px) {
      display: none;
   }
`
export const TaskManagerHeaderLogo = styled.img`
   ${tw`w-48 h-10 m-auto`}
`

export const TaskManagerSearchContainer = styled.div`
   ${tw`flex flex-row items-center h-10  pl-2 pr-2 text-white`}
   justify-content:space-around;
   width: 60%;
   background-color: #4e97c2;
   border-radius: 4px;
   @media (max-width: 1000px) {
      display: none;
   }
`

export const TaskManagerSearchInput = styled.input`
   ${tw`bg-transparent w-full border-0 `};
   outline: none;
`

export const TaskManagerLogoutHeading = styled.h1`
   ${tw`text-white w-16`};
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
