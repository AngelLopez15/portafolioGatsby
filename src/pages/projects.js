import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import BasicLayout from '../layout/BasicLayout'
import "./project.scss"

export default function projects() {
  return (
    <BasicLayout
      menuColor="#c4c4c4"
    >
    <Container className="projects">
      <h1 className="projects__title">Proyectos</h1>
      
      <Row>
        <Col xs={12} sm={4} className="projects__project">
          <Card>
            <div className="projects__project-image">

            </div>
            <Card.Body>
              <Card.Title>Google</Card.Title>
              <Card.Text>Aut praesentium modi optio nam rem quidem cum maxime. Eius eaque suscipit veniam porro libero sit eum qui. Voluptas aut aliquam id ea quae assumenda adipisci. Quibusdam minima qui architecto modi qui incidunt. Quibusdam eligendi voluptas sed.</Card.Text>
              <a class="btn" href="" target="_blank" rel="noopener noreferrer">Ver proyectos</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> 
    </BasicLayout>
  )
}
