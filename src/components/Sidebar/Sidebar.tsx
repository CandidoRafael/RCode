import { Navigation } from '../Navigation/Navigation'
import * as S from './Sidebar.styled'
import { IoCloseSharp } from 'react-icons/io5'

type SidebarProps = {
    isOpen: boolean
    closeSidebar: (v: boolean) => void;
}

export const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
    if(isOpen) 
    return (
        <S.SidebarContainer>
            <Navigation 
               direction='column' 
               gap='1.5rem' 
               color='#f1f1f1' 
               hovercolor=''
               />

            <S.CloseButton onClick={() => closeSidebar(false)}>
              <IoCloseSharp />
            </S.CloseButton>
        </S.SidebarContainer>
    )
}