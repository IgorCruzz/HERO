import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import heroesImg from '../../assets/heroes.png'
import { Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'
import { authenticationRequest } from '../../store/modules/authentication/actions'
export default function Authentication () {
  const dispatch = useDispatch()
  const { token } = useParams()
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="logo" />
          <p>Clique no link abaixo para ativar sua conta.</p>
          <button
            type="button"
            onClick={() => {
              dispatch(authenticationRequest(token))
            }}
          >ATIVAR CONTA</button>
        </section>
        <div>
          <img src={heroesImg} alt="heroes" />
        </div>
      </Content>
    </Container>
  )
}
