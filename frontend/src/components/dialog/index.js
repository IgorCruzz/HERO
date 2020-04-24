import React from 'react'
import { useDispatch } from 'react-redux'

import { Container, Content } from './styles'
import { incidentDelete } from '../../store/modules/incident/actions'

export default function Dialog ({ open, close, id }) {
  const dispatch = useDispatch()
  return (
    <Container active={open}>
      <Content>
        <p>Voce realmente deseja fazer isso?</p>
        <div>
          <button
            id="cancelar"
            type="button"
            onClick={close}>Cancelar</button>
          <button
            type="button"
            onClick={() => {
              dispatch(incidentDelete(id))
            }}
          >Deletar</button>
        </div>
      </Content>
    </Container>
  )
}
