import React, { useEffect, useState } from "react"
import styled from "styled-components"

interface IIncrement {
  handler: (num: number) => void
}

// Styles
const Box = styled.div`
  background: var(--color-secondary);
  height: 48px;
  position: relative;
  width: 120px;
  display: flex;
  justify-content: center;
`
const Btn = styled.button`
  background: 0;
  border: 0;
  cursor: pointer;
  position: absolute;
  color: var(--color-text);
  font-size: 13px;
  font-weight: 700;
  width: 34px;
  height: 48px;
  top: 0;
  &.increment-min { left: 0; text-align: right; padding-right: 10px; }
  &.increment-plus { right: 0; text-align: left; padding-left: 10px; }
  &:hover { color: var(--color-primary); }
`
const Field = styled.input.attrs({ type: "number" })`
  background: 0;
  border: 0;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  height: 48px;
  width: 100px;
  padding: 0;
  outline: none;
  text-align: center;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const Increment: React.FC<IIncrement> = ({ handler }) => {
  const [counter, setCounter] = useState<number>(1)

  useEffect(() => {
    handler(counter)
  }, [counter])

  // subtraction
  const subtraction = () => {
    if (counter > 1) {
      setCounter(prev => prev -= 1)
    }
  }

  return (
    <Box>
      <Btn className="increment-min" onClick={subtraction}>-</Btn>
      <Field min={1} value={counter} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCounter(Number(e.target.value))} />
      <Btn className="increment-plus" onClick={() => setCounter(prev => prev += 1)}>+</Btn>
    </Box>
  )
}

export default Increment
