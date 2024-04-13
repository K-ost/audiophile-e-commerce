import styled from "styled-components"

interface IInput {
  error?: boolean
  expand?: boolean
  handler: any
  placeholder?: string
  type?: 'text' | 'email' | 'tel' | 'area'
}

// Styles
const FormControl = styled.input<{ $error: boolean, $expand: boolean }>`
  background: 0;
  border: 1px solid var(--color-${props => props.$error ? 'danger' : 'line'});
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  height: 56px;
  outline: none;
  padding: 12px 24px;
  vertical-align: middle;
  width: ${props => props.$expand ? '100%' : 'auto'};
  &::placeholder {
    color: #9F9F9F;
  }
  &:focus {
    border-color: var(--color-primary);
  }
`

const Input: React.FC<IInput> = ({ error = false, expand = false, handler, placeholder, type = 'text' }) => {
  return (
    <FormControl
      type={type}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handler(e.target.value)}
      placeholder={placeholder}
      $error={error}
      $expand={expand}
      {...handler}
    />
  )
}

export default Input
