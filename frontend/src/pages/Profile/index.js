import React, { useState, useEffect } from 'react'
import { Container, List } from './styles'
import { FiTrash2 } from 'react-icons/fi'
import { FaEdit } from 'react-icons/fa'
import { MdErrorOutline, MdPhotoCamera } from 'react-icons/md'
import api from '../../services/api'
import Dialog from '../../components/dialog'
import ModalUpdate from './UpdateModal'

export default function Profile () {
  const [incidents, setIncidents] = useState([])
  const [incidentId, setIncidentId] = useState('')
  const [incident, setIncident] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    async function loadIncidents () {
      const response = await api.get('/profile')

      setIncidents(response.data)
    }
    loadIncidents()
  }, [])

  return (
    <Container>

      <Dialog
        open={openDialog}
        close={() => setOpenDialog(false)}
        id={incidentId}/>

      <ModalUpdate
        open={openModal}
        close={() => setOpenModal(false)}
        data={incident} />

      {incidents.length === 0 ? (
        <div id="message">
          <MdErrorOutline/>
          <p>Nenhum caso registrado</p>
        </div>
      ) : (
        <>
          <header>
            <h1>Casos cadastrados</h1>
          </header>
          <List>
            {incidents.map(incident => (
              <li key={incident.id}>
                <div id="file">
                  {incident.File === null
                    ? (
                      <div>
                        <MdPhotoCamera />
                      </div>
                    )
                    : (
                      <img src={incident.File.url} alt="img" />
                    )}
                </div>

                <div id="title">
                  <p>{incident.title}</p>
                </div>
                <button
                  id="update"
                  type="button"
                  onClick={() => {
                    setOpenModal(true)
                    setIncident(incident)
                  }}>
                  <FaEdit/>
                </button>
                <button
                  id="delete"
                  onClick={() => {
                    setOpenDialog(true)
                    setIncidentId(incident.id)
                  }}
                  type="button"><FiTrash2/>
                </button>
                <section>
                  <div id="desc">
                    <strong>DESCRIÇÃO:</strong>
                    <div>
                      <p>{incident.description}</p>
                    </div>
                  </div>

                  <div id="price">
                    <strong>VALOR:</strong>
                    <p>{incident.value.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}</p>
                  </div>
                </section>
              </li>
            ))}
          </List>
        </>
      )}

    </Container>

  )
}
