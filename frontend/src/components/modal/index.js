import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Container, Content } from './styles'

export default function Modal ({ open, close, children }) {
  return (
    <Container active={open}>
      <Content>
        <button onClick={close}><AiOutlineClose /></button>
        { children }
      </Content>
    </Container>
  )
}
