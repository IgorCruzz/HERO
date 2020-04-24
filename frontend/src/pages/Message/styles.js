import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`  
  display: flex;
  flex-direction: row; 
  border-radius: 20px;
  padding: 15px; 
 
  word-wrap: break-word;
 
  }


  section {
    margin-right: 50px;    
  img {
    margin-bottom: 120px;
  }

    h1 {
      font-size: 3.5rem;
      margin-bottom: 25px;
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: #41414d;
      font-size: 1.8rem;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s;
  
      svg {
        margin-right: 8px;
      }
  }

   
  }
`
