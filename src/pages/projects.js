import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import BasicLayout from '../layout/BasicLayout'
import Projects from "../utils/projects"
import "./project.scss"

export default function projects() {
  return (
    <BasicLayout
      menuColor="#c4c4c4"
    >
      <Container className="projects">
        <h1 className="projects__title">Proyectos</h1>

        <Row>
          {Projects.map((Project, index)=>(
            <Col key={index} xs={12} sm={4} className="projects__project">
              <Card>
                <div className="projects__project-image">
                  <img src={Project.image} alt="imagen del proyecto" />
                </div>
                <Card.Body>
                  <Card.Title>{Project.title}</Card.Title>
                  <Card.Text>{Project.description}</Card.Text>
                  <a class="btn" href={Project.url} target="_blank" rel="noopener noreferrer">Ver proyectos</a>
                </Card.Body>
              </Card>
            </Col>
            ))
          }
        </Row>
        
      </Container> 
    </BasicLayout>
  )
}
