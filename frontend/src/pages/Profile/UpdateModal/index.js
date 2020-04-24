import React, { useState } from 'react'
import { Form } from '@unform/web'
import { Input, TextArea, CurrencyInput } from '../../../components/Input'
import { MdAddAPhoto } from 'react-icons/md'
import api from '../../../services/api'
import { useDispatch } from 'react-redux'
import { incidentUpdate } from '../../../store/modules/incident/actions'
import { Content } from './styles'
import Modal from '../../../components/modal'

export default function UpdateModal ({ data, open, close }) {
  const dispatch = useDispatch()
  const [fileField, setFileField] = useState(data.file)
  const [valueField, setValueField] = useState(data.value)
  const [url, setUrl] = useState(null)

  const handleChange = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('file', e.target.files[0])
    const response = await api.post('/files', data)
    setUrl(response.data.url)
    setFileField(response.data.id)
  }

  const handleSubmit = ({ id, file, title, description, value }) => {
    dispatch(incidentUpdate({ id: data.id, file: fileField, title, description, value: valueField }))
  }

  return (
    <Modal open={open} close={close}>
      <Content>
        <Form initialData={data} onSubmit={handleSubmit}>
          <label htmlFor="file">
            {url !== null ? <img src={url} alt="file" /> : (
              <div>
                <MdAddAPhoto />
                <p>Alterar foto do caso</p>
              </div>
            ) }

            <Input
              id="file"
              type="file"
              name="file"
              accept="image/*"
              onChange={handleChange} />
          </label>

          <Input
            placeholder="Título do caso"
            name="title"
          />

          <TextArea
            placeholder="Descrição"
            name="description"
          />

          <CurrencyInput
            name="value"
            onChange={ (event, value, maskedValue) => {
              setValueField(value)
            }} />

          <button type="submit">Atualizar</button>
        </Form>
      </Content>
    </Modal>
  )
}
