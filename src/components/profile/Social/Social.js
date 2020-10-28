import React from 'react'
import {ReactComponent as IcTwitter} from "../../../images/icons/twitter.svg"
import {ReactComponent as IcFacebook} from "../../../images/icons/facebook.svg"
import {ReactComponent as IcIn} from "../../../images/icons/linkedin.svg"
import {ReactComponent as IcIg} from "../../../images/icons/instagram.svg"
import {ReactComponent as IcWeb} from "../../../images/icons/web.svg"
import "./Social.scss"

//Recordar que debemos configurar el plugin de gatsby para SVG 
export default function Social() {
  
  // Para renderizar los iconos de forma dinamica y no solo copiar y pegar uno por uno 
  const socialMedia = [
    {
      icon: <IcTwitter className="social__twitter" />,
      link: "https://twitter.com",
    },
    {
      icon: <IcFacebook className="social__fb" />,
      link:"https://twitter.com",
    },
    {
      icon: <IcIn className="social__in" />,
      link:"https://twitter.com",
    },
    {
      icon: <IcIg className="social__ig" />,
      link:"https://twitter.com",
    },
    {
      icon: <IcWeb className="social__web" />,
      link:"https://twitter.com",
    },
  ]

  return (
    <div className="social">
      {socialMedia.map((social,index)=>(
        <a 
          key={index}
          href={social.link} 
          target="_blank" 
          rel="noreferrer noopener"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
