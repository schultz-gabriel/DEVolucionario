import React, { useState } from 'react';
import { IWebsitePage } from './types';

import { DesktopWrapper, MobileWrapper } from './ScreenWrappers';
import Button from '../../components/commons/Button';
import Modal from '../../components/commons/Modal';
import Header from '../../components/commons/Header';
import Nav from '../../components/commons/Nav';
import Footer from '../../components/commons/Footer';
import ThemeSwitcher from '../../components/commons/ThemeSwitcher';
import Logo from '../../../public/icons/logo'
import { CloseIcon } from '../../../public/icons/closeIcon';
import BurgerButton from '../../components/commons/BurgerButton';

import SEO from '../../SEO';

export default ({
  children, seoProps, toggleTheme, theme,
}:IWebsitePage) => {
  const [isModalOpen, setModalState] = useState(false);
  return (
    <>
      <SEO {...seoProps} />
      <div
        style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <MobileWrapper>
          <Modal
            isOpen={isModalOpen}
            onClose={() => { setModalState(false); }}
          >
            <div
              data-modal-safe-area
              style={
                {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: theme.menuBG,
                  opacity: 1,
                }
              }
            >
              <header
                style={
                {
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: '100%',
                  padding: '20px 0 0 0',
                }
              }
              >
                <Button ghost onClick={() => { setModalState(false); }}>
                  <CloseIcon color={theme.color} />
                </Button>
              </header>
              <Nav />
              <ThemeSwitcher onChange={() => toggleTheme()} />
            </div>
          </Modal>
        </MobileWrapper>

        <Header>
          <Logo color={theme.color} />
          <DesktopWrapper>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Nav />
              <ThemeSwitcher onChange={() => toggleTheme()} />
            </div>
          </DesktopWrapper>
          <MobileWrapper>
            <BurgerButton
              onClick={() => setModalState(!isModalOpen)}
              color={theme.color}
            />
          </MobileWrapper>
        </Header>

        {children}
        <Footer />
      </div>
    </>
  );
};
