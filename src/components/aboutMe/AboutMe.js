import React from 'react'
import { Container,Button } from 'react-bootstrap'
import CV from "../../images/cv.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="aboutMe">
      <p className="aboutMe__text">Minus asperiores beatae. Eligendi perferendis sint temporibus. Natus aut repellat ut possimus unde repellendus. Nemo libero et dolorem perspiciatis praesentium est aut distinctio. Provident dolor nobis repellendus assumenda repudiandae sapiente.. Velit architecto impedit quo quos ut. Amet eligendi sunt. Pariatur autem qui alias deleniti aliquam. Dignissimos ut quidem minima dolor doloribus. Sequi illum harum asperiores non nobis dolore quam.</p>
      <hr />
      <Button className="aboutMe__button" primary><a href={CV} target="_blanck" rel="noopener noreferrer">Descargar CV</a></Button>
    </Container>
  )
}
