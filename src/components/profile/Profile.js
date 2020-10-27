import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import imageProfile from "../../images/avatar.png"
import "./Profile.scss"

export default function Profile() {
  
  // Ejemplo de como pintar la informacion por si 
  // nos esta llegando desde una peticion
  const data = [
    {
      title: "Edad",
      info:"29"
    },
    {
      title:"Dirección",
      info:"0107 Hackett Throughway"
    },
    {
      title:"Email",
      info:"Roxane_Daugherty70@hotmail.com"
    }
  ]
  
  return (
    <div className="profile">
      <div className="profile__wallpaper" />
      <div className="profile__dark"/>
      <Container className="profile__box">
        <Row className="profile__info">
          <Col xs={12} md={4}>
            <Image src={imageProfile} alt="avatar" fluid />
          </Col>
          <Col xs={12} md={8} className="profile__data">
            <span className="profile__data-greeting">¡Hola!</span>
            <p className="profile__data-name">Angel Octavio López Cruz</p>
            <p>Frontend Developer</p>
            <hr />
            <div className="profile__data-info">
              <div className="profile__data-item">
                <p className="profile__data-item-phone">Telefono:</p>
                <p className="profile__data-item-phone-number">55-55-55-55-55</p>
              </div>
              {data.map((item, index)=>(
                <div className="profile__data-item">
                  <p className="profile__data-item-phone">{item.title}:</p>
                  <p className="profile__data-item-phone-number">{item.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
