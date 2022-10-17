import React from 'react'
import CustomMuiButton from './style'

type CustomButtonPropTypes = {
  children?: React.ReactNode
}

const Button: React.FC<CustomButtonPropTypes> = (props) => {
  const { children, ...rest } = props
  return <CustomMuiButton {...rest}>{children}</CustomMuiButton>
}

export default Button
