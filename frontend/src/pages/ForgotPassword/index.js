import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Content } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { Form } from '@unform/web'
import { Input } from '../../components/Input'
import logoImg from '../../assets/logo.svg'
import { AiOutlineLoading } from 'react-icons/ai'
import heroesImg from '../../assets/heroes.png'
import { recoverRequest } from '../../store/modules/password/actions'
import * as Yup from 'yup'

export default function ForgotPassword () {
  const dispatch = useDispatch()
  const formRef = useRef(null)
  const loading = useSelector(state => state.password.loading)

  const handleSubmit = async ({ email }) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Digite um e-mail valido').required('Campo obrigatorio')
      })

      await schema.validate({ email }, {
        abortEarly: false
      })
      console.log(email)
    } catch (err) {
      const validationErrors = {}

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message
        })
        formRef.current.setErrors(validationErrors)
      }
    }

    dispatch(recoverRequest(email))
  }

  return (
    <Container>
      <Content>
        <img id="logo" src={logoImg} alt="Be the Hero" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <p>Se você não lembra mais a sua senha, digite seu e-mail na qual fez o cadastro abaixo que enviaremos um codigo para fazer a redefinição da senha.</p>
          <Input placeholder="E-mail" name="email" />
          <button type="submit">{loading ? <AiOutlineLoading /> : <strong>Entrar</strong>}</button>
        </Form>

        <Link to="/">
          <FiArrowLeft size={15} color="#E02841" />
            Voltar para tela de logon
        </Link>
      </Content>
      <img src={heroesImg} alt="heroes" />
    </Container>
  )
}
