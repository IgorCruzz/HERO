import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import heroesImg from '../../assets/heroes.png'
import { Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'
export default function Message () {
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="logo" />
          <h1>QUASE LA...</h1>
          <p>Enviamos um e-mail com um link para liberar seu acesso no site.</p>

          <Link to="/">
            <FiArrowLeft size={15} color="#E02841" />
            Ir tela de logon
          </Link>
        </section>
        <div>
          <img src={heroesImg} alt="heroes" />
        </div>
      </Content>
    </Container>
  )
}
