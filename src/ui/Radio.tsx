import styled from "styled-components"

interface IRadio {
  handler: any
  label: string
  name: string
  value: string
}

// Styles
const RadioBox = styled.label`
  align-items: center;
  background: 0;
  border: 1px solid var(--color-line);
  border-radius: 8px;
  color: var(--color-black);
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  height: 56px;
  margin: 0;
  padding: 4px 16px;
  vertical-align: middle;
  &:hover, &:focus-within {
    border-color: var(--color-primary);
  }
`
const RadioBtn = styled.input.attrs({ type: 'radio' })`
  border: 1px solid var(--color-line);
  border-radius: 20px;
  cursor: pointer;
  display: inline-block;
  height: 20px;
  min-width: 20px;
  max-width: 20px;
  outline: none;
  margin: 0 16px 0 0;
  padding: 0;
  -webkit-appearance: none;
`

const Radio: React.FC<IRadio> = ({ handler, label, name, value }) => {
  return (
    <RadioBox>
      <RadioBtn
        name={name}
        className="radioBtn"
      />
      {label}
    </RadioBox>
  )
}

export default Radio
