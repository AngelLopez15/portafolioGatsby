import React from 'react'
import Menu from '../components/menu'

export default function BasicLayout(props) {
  
  // PAra extraer los children o sea los elementos html dentro del layout 
  // debemos extraerlos con desestructuracion
  // desestructuramos el valor del color
  const {children, menuColor}= props

  return (
    <>
      <Menu 
        menuColor={menuColor}
      />
      {children}
    </>
  )
}
