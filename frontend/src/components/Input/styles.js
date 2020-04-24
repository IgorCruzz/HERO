import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;


  input {
    border: 2px solid ${props => props.error ? '#B22222' : '#DDDDDD'};
    border-radius: 5px;
  }


  select {
        border-radius: 4px;
        margin-top: 10px;
        padding: 12px 12px;
        border: 2px solid ${props => props.error ? '#B22222' : '#DDDDDD'};
        width: 100%;
        }
  
  textarea {
      margin-top: 8px;
      resize: vertical;
      padding: 16px 24px;
      line-height: 2.4rem;
      min-height: 140px;
      width: 100%;
      height: 60px;
      color: #333;        
      padding: 0 24px;
      background: ${props => props.theme.theme.inputColor};  
      border: 2px solid ${props => props.error ? '#B22222' : '#DDDDDD'};
      border-radius: 5px;

      &::placeholder {
        padding-top: 3px;
      }
    }
`

export const ErrorMessage = styled.div` 
    margin-top: 5px;
    font-size: 1.4rem;
    color: #B22222;   
  ,  
`
