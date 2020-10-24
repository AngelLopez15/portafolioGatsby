import React from 'react'
import BasicLayout from '../layout/BasicLayout'
import "./index.scss"

export default function index(props) {
  
  return (
    // Para que el componenente se comporte como un layout real debemos usarlo como si fuera una
    // etiqueta de HTML en lugar de componenete para asi poder pasarle hijos por props
    // los props o children seran todos las etiquetas que vayan dentro del basicLoyout
    // Es como si fuera un componente de orden superior
    <BasicLayout
      menuColor="red"
    >
      <h1>Estamos en Skills</h1>
    </BasicLayout>
  )
}

