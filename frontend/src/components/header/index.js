import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'
import { signOut } from '../../store/modules/signin/actions'
import ToggleTheme from '../../styles/themes/context'
import { AiOutlineClose } from 'react-icons/ai'
import { GiExitDoor } from 'react-icons/gi'
import { TiThMenu, TiLightbulb } from 'react-icons/ti'
import { IoMdLogOut } from 'react-icons/io'
import { GoPlus } from 'react-icons/go'

export default function Header () {
  const ong = useSelector(state => state.signIn.profile)
  const [menu, setMenu] = useState(false)
  const dispatch = useDispatch()

  return (
    <ToggleTheme.Consumer>
      {({ toggleTheme }) => (
        <Container>
          <Content>
            <div>
              <Link to='/profile'>
                <img src={logoImg} alt="Be the Hero" />
              </Link>
              <span>Bem vinda, {ong.name}</span>
            </div>

            <aside>
              <button type="button" onClick={toggleTheme}><TiLightbulb size={30} /></button>
              <Link to="/incidents/new"><GoPlus /></Link>
              <button type="button" onClick={() => dispatch(signOut())}>
                <IoMdLogOut size={30}/>
              </button>
            </aside>

            <main>
              <button type="button" onClick={toggleTheme}><TiLightbulb size={30} /></button>
              <button type="button" onClick={() => setMenu(true)}><TiThMenu size={30} /></button>
              { menu ? (

                <div>
                  <button
                    id="close"
                    onClick={() => setMenu(false)}>
                    <AiOutlineClose size={40}/>
                  </button>
                  <img src={logoImg} alt="Be the Hero" />
                  <Link to="/incidents/new"
                    onClick={() => setMenu(false)}>
                    <GoPlus />Novo Caso
                  </Link>
                  <button
                    type="button"
                    onClick={() => dispatch(signOut())}>
                    <GiExitDoor />Sair
                  </button>
                </div>
              ) : null}

            </main>
          </Content>
        </Container>
      )}

    </ToggleTheme.Consumer>
  )
}
