import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'
import { teste } from '../../services/api'
import { AiOutlineLoading } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { signUpRequest } from '../../store/modules/signup/actions'
import { Input, PhoneInput, Select } from '../../components/Input'
import { Form } from '@unform/web'
import * as Yup from 'yup'

export default function Register () {
  const formRef = useRef(null)
  const loading = useSelector(state => state.signUp.loading)
  const [uf, setUf] = useState([])
  const dispatch = useDispatch()

  const handleSubmit = async ({ name, email, password, confirmPassword, whatsapp, city, uf }) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().max(20, 'o nome precisa ter 20 caracteres ou menos').required('Campo obrigatório'),
        email: Yup.string().email('Insira um e-mail válido').required('Campo obrigatório'),
        password: Yup.string().min(6, 'A senha precisa ter 6 ou mais caracteres').required('Insira uma senha de no minímo 8 caracteres'),
        confirmPassword: Yup.string().required('Campo obrigatório'),
        whatsapp: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campo obrigatório'),
        uf: Yup.string().required('Campo obrigatório')
      })

      await schema.validate({ name, email, password, whatsapp, confirmPassword, city, uf }, {
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

    dispatch(signUpRequest(name, email, password, confirmPassword, whatsapp, city, uf))
  }

  useEffect(() => {
    async function loadUfs () {
      const response = await teste.get()
      setUf(response.data)
    }
    loadUfs()
  })

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link to="/">
            <FiArrowLeft size={15} color="#E02841" />
            Voltar para tela de logon
          </Link>
        </section>

        <Form ref={formRef} onSubmit={handleSubmit} >
          <Input
            name="name"
            placeholder="Nome da Ong*"
          />

          <Input
            name="email"
            type="email"
            placeholder="E-mail*"
          />

          <Input
            name="password"
            type="password"
            placeholder="Senha*"
          />

          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirme a senha*"
          />

          <PhoneInput
            name="whatsapp"
            placeholder="(00) 0 0000 0000" />

          <span>
            <div id="city">
              <Input
                name="city"
                placeholder="Cidade*"
              />
            </div>
            <div id="uf">
              <Select
                name="uf"
              >

                {uf.map(ufs => (
                  <>
                    <option key={ufs.id}>{ufs.sigla}</option>
                  </>
                ))}

              </Select>
            </div>
          </span>

          <button type="submit">{ loading ? <AiOutlineLoading /> : <strong>Cadastrar</strong>}</button>
        </Form>

      </Content>

    </Container>
  )
}
