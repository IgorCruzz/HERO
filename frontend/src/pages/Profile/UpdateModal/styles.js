import styled from 'styled-components'

export const Content = styled.div` 
Form{
    width: 100%;
    max-width: 450px; 

    label {    
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;  
      width: 100%;
      height: 200px;     
      border-radius: 10px;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 

        svg {
          width: 70px;
          height: 70px;
          color: #777777;
          margin-bottom: 10px;
        } 

        p {
          color: #777777;
          font-weight: bold;
        }      
      }

      strong {
        margin-top: 20px;
        color: #777;
      }

      img {
        height: 200px;   
        width: 100%;   
      }

      input {
        display: none;        
      }
    }

 button {
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 15px;
  padding: 10px 0;
  border: 0;
  background: #B22222;
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
      border: 0;     
      border-radius: 8px;
      padding: 0 24px;
      background: ${props => props.theme.theme.inputColor};  

      &::placeholder {
        padding-top: 3px;
      }
    }

    input {    
      margin-top: 8px;  
      border-radius: 4px;  
      margin-top: 8px;  
      display: block;
      width: 100%;
      padding: 10px 0;
      border: 0;  
      padding: 10px 20px;
      background: ${props => props.theme.theme.inputColor};      
    }
    div {      
      display: flex;      
    }   
  }
  
`
