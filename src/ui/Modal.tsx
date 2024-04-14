import { useEffect } from "react"
import styled from "styled-components"
import { ModalPositionType } from "../types"

interface IModal {
  children: React.ReactNode
  close: React.Dispatch<React.SetStateAction<boolean>>
  modal: boolean
  position?: ModalPositionType
}

// Styles
const PopupWrap = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 48px 24px;
  opacity: ${props => props.$open ? 1 : 0};
  visibility: ${props => props.$open ? 'visible' : 'hidden'};
  z-index: 1500;
`
const Popup = styled.div<{ $open: boolean, $position: ModalPositionType }>`
  background: var(--color-light);
  border-radius: 8px;
  position: relative;
  padding: 48px;
  ${props => props.$position === 'top-right' ? `
    padding: 32px;
    width: 378px;
  ` : `
    padding: 48px;
    width: 540px;
  `}
  transition: var(--animate);
  z-index: 1500;
  @media screen and (max-width: 750px) {
    padding: 32px;
    ${props => props.$position === 'center' && `
      transform: none;
    `
  }
`
const Overlay = styled.div<{ $open: boolean }>`
  background: rgba(0,0,0,0.75);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: ${props => props.$open ? 1 : 0};
  visibility: ${props => props.$open ? 'visible' : 'hidden'};
  transition: var(--animate);
  z-index: 900;
`

const Modal: React.FC<IModal> = ({ children, close, modal, position = 'center' }) => {
  
  useEffect(() => {
    if (modal) {
      document.body.classList.add('modal-opened')
    } else {
      document.body.classList.remove('modal-opened')
    }
  }, [modal])

  return (
    <PopupWrap $open={modal}>
      <Popup $open={modal} $position={position}>
        {children}
      </Popup>
      <Overlay $open={modal} onClick={() => close(false)} />
    </PopupWrap>
  )
}

export default Modal
