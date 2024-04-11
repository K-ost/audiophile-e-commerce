import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { IncrementSizeType } from "../types"

interface IIncrement {
  handler: (num: number) => void
  size?: IncrementSizeType
  value?: number
}

// Styles
const Box = styled.div<{ $size: IncrementSizeType }>`
  background: var(--color-secondary);
  height: ${props => props.$size === 'small' ? '32px' : '48px'};
  position: relative;
  width: ${props => props.$size === 'small' ? '96px' : '120px'};
  display: flex;
  justify-content: center;
`
const Btn = styled.button<{ $size: IncrementSizeType }>`
  background: 0;
  border: 0;
  cursor: pointer;
  position: absolute;
  color: var(--color-text);
  font-size: 13px;
  font-weight: 700;
  width: 34px;
  height: ${props => props.$size === 'small' ? '32px' : '48px'};
  top: 0;
  &.increment-min { left: 0; text-align: right; padding-right: 10px; }
  &.increment-plus { right: 0; text-align: left; padding-left: 10px; }
  &:hover { color: var(--color-primary); }
`
const Field = styled.input.attrs({ type: "number" })<{ $size: IncrementSizeType }>`
  background: 0;
  border: 0;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  height: ${props => props.$size === 'small' ? '32px' : '48px'};
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

const Increment: React.FC<IIncrement> = ({ handler, size = 'large', value = 1 }) => {
  const [counter, setCounter] = useState<number>(value)

  useEffect(() => {
    handler(counter)
  }, [counter])

  useEffect(() => {
    setCounter(value)
  }, [value])

  // subtraction
  const subtraction = () => {
    if (counter > 1) {
      setCounter(prev => prev -= 1)
    }
  }

  return (
    <Box $size={size}>
      <Btn className="increment-min" onClick={subtraction} $size={size}>-</Btn>
      <Field min={1} value={counter} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCounter(Number(e.target.value))} $size={size} />
      <Btn className="increment-plus" onClick={() => setCounter(prev => prev += 1)} $size={size}>+</Btn>
    </Box>
  )
}

export default Increment
