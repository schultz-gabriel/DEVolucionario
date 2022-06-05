import React from 'react';
import styled, { css, createGlobalStyle, keyframes } from 'styled-components';

import { IComponent } from '../../types';

interface IModal extends IComponent {
    isOpen: boolean
    onClose: () => void
}

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: .3s;
  z-index: 100;
  ${({ isOpen }:{isOpen: boolean}) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

interface MotionProps {
    animate: boolean
  }

export const open = keyframes`
    from {
      transform: translate3d(100%,0,0);
    }
    to {
      transform: translate3d(0,0,0);
    }
  `;

export const close = keyframes`
    from {
      transform: translate3d(0,0,0);
    }
    to {
      transform: translate3d(100%,0,0);
    }
  `;

export const Motion = styled.div<MotionProps>`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    animation: ${({ animate }) => (
    animate
      ? open
      : close
  )} 0.4s ease-in-out;
  `;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export default ({ isOpen, onClose, children }: IModal) => (
  <ModalWrapper
    isOpen={isOpen}
    onClick={(e) => {
      const target = e.target as Element;
      const isSafeArea = target.closest('[data-modal-safe-area="true"]');

      if (!isSafeArea) {
        onClose();
      }
    }}
  >
    {isOpen && <LockScroll />}

    <Motion animate={isOpen}>
      {children}
    </Motion>
  </ModalWrapper>
);
