import { useEffect, useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar';
import * as S from './Header.styled'
import logoMobile from '../../assets/icone.png';
import logo from '../../assets/LogoCerta.png'
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 668);
    const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 668);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <S.HeaderContainer>
            <S.LogoContainer>
                {!isMobile && <S.Logo src={logo} />}
                {isMobile && <S.LogoMobile src={logoMobile} />}
            </S.LogoContainer>
                {isMobile && ( 
                 <S.MenuHamburger onClick={() =>setShowMenuMobile(!showMenuMobile)}>
                    <S.Bar />
                    <S.Bar />
                    <S.Bar />
                </S.MenuHamburger>
                )}

                 {!isMobile && (
                    <Navigation 
                        direction='flex' 
                        gap='1.2rem' 
                        color='#222'
                        hovercolor='#436eca' 
                    />
                  )}
                 <Sidebar 
                    isOpen={showMenuMobile} 
                    closeSidebar={setShowMenuMobile} 
                  />
        </S.HeaderContainer>
    );
};