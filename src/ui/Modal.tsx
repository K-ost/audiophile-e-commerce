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
const Popup = styled.div<{ $open: boolean, $position: ModalPositionType }>`
  background: var(--color-light);
  border-radius: 8px;
  position: absolute;
  ${props => props.$position === 'top-right' ? `
    top: 123px;
    left: 50%;
    padding: 32px;
    width: 378px;
    margin-left: calc( var(--container) / 2 - 378px );
  ` : `
    left: 50%;
    top: 50%;
    padding: 48px;
    transform: translate(-50%,-50%);
    width: 540px;
  `}
  opacity: ${props => props.$open ? 1 : 0};
  visibility: ${props => props.$open ? 'visible' : 'hidden'};
  transition: var(--animate);
  z-index: 1000;
  @media screen and (max-width: 750px) {
    ${props => props.$position === 'top-right' && `
      top: 114px;
      left: 24px;
      right: 24px;
      width: auto;
      margin: 0;
    `
  }
`
const Overlay = styled.div<{ $open: boolean }>`
  background: rgba(0,0,0,0.5);
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
    <>
      <Popup $open={modal} $position={position}>
        {children}
      </Popup>
      <Overlay $open={modal} onClick={() => close(false)} />
    </>
  )
}

export default Modal
