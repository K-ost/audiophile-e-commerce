import styled from "styled-components"

interface IField {
  children: React.ReactNode
  className?: string
  label?: string
}

// Styles
const Div = styled.div`
  .label {
    color: var(--color-black);
    display: block;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    margin: 0 0 9px;
  }
`

const Field: React.FC<IField> = ({ children, className, label }) => {
  return (
    <Div className={className}>
      {!!label && <label className="label">{label}</label>}
      {children}
    </Div>
  )
}

export default Field
