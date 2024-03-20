import { Link } from "react-router-dom"
import styled from "styled-components"

interface IMoreBtn {
  title: string
  url: string
}

// Styles
const More = styled(Link)`
  color: var(--color-text);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  position: relative;
  padding-right: 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: var(--animate);
  &::before {
    content: '';
    display: block;
    width: 7px;
    height: 12px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -6px;
  }
  &:hover { color: var(--color-primary); }
`

const MoreBtn: React.FC<IMoreBtn> = ({ title, url }) => {
  return (
    <More className="more-link" to={url}>{title}</More>
  )
}

export default MoreBtn
