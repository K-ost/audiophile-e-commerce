import styled from "styled-components"

interface IField {
  children: React.ReactNode
  className?: string
  label: string
  error?: string
}

// Styles
const Div = styled.div<{ $error: boolean }>`
  .fieldhead {
    display: flex;
    justify-content: space-between;
    margin: 0 0 9px;
  }
  .label {
    color: var(--color-${props => props.$error ? 'danger' : 'black'});
    display: block;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
  }
`
const DivError = styled.div`
  color: var(--color-danger);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`

const Field: React.FC<IField> = ({ children, className, error, label }) => {
  return (
    <Div className={className} $error={!!error}>
      <div className="fieldhead">
        <label className="label">{label}</label>
        {error && <DivError>{error}</DivError>}
      </div>
      {children}
    </Div>
  )
}

export default Field
