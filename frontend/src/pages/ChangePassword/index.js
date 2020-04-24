import React, { useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Content } from './styles'
import { Form } from '@unform/web'
import { AiOutlineLoading } from 'react-icons/ai'
import { Input } from '../../components/Input'
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import { changePassword } from '../../store/modules/password/actions'
import * as Yup from 'yup'

export default function ChangePassword () {
  const formRef = useRef(null)
  const dispatch = useDispatch()
  const { email } = useParams()
  const [params, setParams] = useState(email)
  const loading = useSelector(state => state.password.loading)

  const handleSubmit = async ({ email, code, password, confirmPassword }) => {
    try {
      const schema = Yup.object().shape({
        code: Yup.string().required('Campo obrigatório'),
        password: Yup.string().min(6, 'A senha precisa ter no minimo 6 caracteres').required('Campo obrigatório'),
        confirmPassword: Yup.string().required('Campo obrigatório')
      })

      await schema.validate({ email, code, password, confirmPassword }, {
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
    dispatch(changePassword({ email: params, code, password, confirmPassword }))
  }

  return (
    <Container>
      <Content>
        <img id="logo" src={logoImg} alt="Be the Hero" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Redefinição de senha</h1>
          <Input placeholder="Digite o seu codigo" name="code" />
          <Input placeholder="Digite sua senha nova" type="password" name="password" />
          <Input placeholder="Confirme a senha" type="password" name="confirmPassword"/>
          <button type="submit">{loading ? <AiOutlineLoading /> : <strong>Mudar senha</strong>}</button>
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
