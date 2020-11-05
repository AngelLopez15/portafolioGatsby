import React from 'react'
import {Button} from "react-bootstrap"
import AboutMe from '../components/aboutMe/AboutMe'
import Profile from '../components/profile/Profile'
import BasicLayout from '../layout/BasicLayout'
import "./index.scss"

export default function index() {
  return (
    // Para que el componenente se comporte como un layout real debemos usarlo como si fuera una
    // etiqueta de HTML en lugar de componenete para asi poder pasarle hijos por props
    // los props o children seran todos las etiquetas que vayan dentro del basicLoyout
    // Es como si fuera un componente de orden superior
    // por medio de props estamos enviando un color dinamicamente para el fondo del menu
    <BasicLayout 
      // menuColor="#000"
    >
      <Profile />
      {/* <h1 className="title">Hola, Gente, este es el Home</h1>
      <Button variant="primary">Click Me</Button> */}
      <AboutMe />
    </BasicLayout>
  )
}

