import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Content } from './styles'
import { Form } from '@unform/web'
import { Input } from '../../components/Input'
import { AiOutlineLoading } from 'react-icons/ai'
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import { signInRequest } from '../../store/modules/signin/actions'
import * as Yup from 'yup'

export default function Logon () {
  const formRef = useRef(null)
  const dispatch = useDispatch()
  const loading = useSelector(state => state.signIn.loading)

  const handleSubmit = async ({ email, password }) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Insira um e-mail válido').required('O campo e-mail é obrigatório'),
        password: Yup.string().required('O campo da senha é obrigatório')
      })

      await schema.validate({ email, password }, {
        abortEarly: false
      })
    } catch (err) {
      const validationErrors = {}
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message
        })
        formRef.current.setErrors(validationErrors)
      }
    }
    dispatch(signInRequest(email, password))
  }

  return (
    <Container>
      <Content>
        <img id="logo" src={logoImg} alt="Be the Hero" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input placeholder="E-mail" name="email" />
          <Input placeholder="Senha" type="password" name="password" />
          <Link to="/recover">Esqueci minha senha.</Link>
          <button type="submit">{loading ? <AiOutlineLoading /> : <strong>Entrar</strong>}</button>
        </Form>

        <Link to="/register">
          <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro</Link>
      </Content>
      <img src={heroesImg} alt="heroes" />
    </Container>
  )
}
