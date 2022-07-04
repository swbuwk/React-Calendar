import React from 'react'
import styled, {css} from "styled-components"

const StyledButton = styled.div`
  cursor: pointer;
  color: ${props => props.color};
  border: 2px solid ${props => props.color};
  border-radius: 5px;
  padding: 3px;
  font-size: ${props => props.size || "22px"};
  font-weight: 400;
  transition: 0.25s;
  opacity: ${props => props.disabled ? 0.6 : 1};

  :hover {
        transform: ${props => props.disabled ? "scale(1)" : "scale(1.1)"};
  }

  ${props => 
    props.free &&
      css`
        border: none
      `
  }
`

const Button = ({children, ...props}) => {
  return (
    <StyledButton {...props}>{children}</StyledButton>
  )
}

export default Button