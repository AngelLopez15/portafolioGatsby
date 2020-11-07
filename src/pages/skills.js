import React from 'react'
import { Container } from 'react-bootstrap'
import ListSkills from '../components/listSkills/ListSkills'
import BasicLayout from '../layout/BasicLayout'
import { frontendSkills, 
  frontendSkillsColors,
  backendSkills,
  backendSkillsColors,
  desingWeb,
  desingWebColors} from '../utils/skills'
import "./skills.scss"

// Datos que se usaran para dibujar la barra de skills
// Se pasan por props para que el componente sea reutilizable
// const skills = [
//   {type: "Java", level: 85},
//   {type: "Javascript", level: 75},
// ]

export default function index(props) {
  
  return (
    // Para que el componenente se comporte como un layout real debemos usarlo como si fuera una
    // etiqueta de HTML en lugar de componenete para asi poder pasarle hijos por props
    // los props o children seran todos las etiquetas que vayan dentro del basicLoyout
    // Es como si fuera un componente de orden superior
    <BasicLayout
      menuColor="red"
    >
      <Container className="skills">
        <div className="skills__block">
          <h2 className="skills__title">Frontend</h2>
          <ListSkills 
            skills={frontendSkills}
            colors={frontendSkillsColors}
          />
        </div>

        <div className="skills__block">
          <h2 className="skills__title">Backend</h2>
          <ListSkills 
            skills={backendSkills}
            colors={backendSkillsColors}
          />
        </div>

        <div className="skills__block">
          <h2 className="skills__title">Diseño</h2>
          <ListSkills 
            skills={desingWeb}
            colors={desingWebColors}
          />
        </div>

      </Container>
    </BasicLayout>
  )
}

