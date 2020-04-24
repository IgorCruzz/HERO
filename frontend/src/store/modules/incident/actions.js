export const incidentDelete = (id) => {
  return {
    type: '@incident/INCIDENT_DELETE',
    payload: { id }
  }
}

export const incidentUpdate = ({ id, file, title, description, value }) => {
  return {
    type: '@incident/INCIDENT_UPDATE',
    payload: { id, file, title, description, value }
  }
}

export const incidentRequest = ({ file, title, description, value }) => {
  return {
    type: '@incident/INCIDENT_REQUEST',
    payload: { file, title, description, value }
  }
}

export const incidentFailure = () => {
  return {
    type: '@incident/INCIDENT_FAILURE'

  }
}

export const incidentSuccess = () => {
  return {
    type: '@incident/INCIDENT_SUCCESS'
  }
}
