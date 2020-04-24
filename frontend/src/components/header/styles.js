import styled from 'styled-components'

export const Container = styled.header`  
  width: 100%; 
  color: ${props => props.theme.theme.header.text};
  padding: 5px 20px; 
  background: ${props => props.theme.theme.header.background};
  display: flex;
  position: fixed;
  z-index: 2;
  box-shadow: 5px 5px 5px #777777;
  justify-content: center;  
`

export const Content = styled.div`
max-width: 1224px;
width: 100%;
display: flex;  
align-items: center;
justify-content: space-between;

div {
  display: flex;
  align-items: center;

  img {
    height: 4.0rem;     
  }

  span {
    font-size: 1.8rem;
    margin-left: 24px;        
  } 

}

aside {   
  @media (max-width: 650px) {
    display: none;
  }

  display: flex;  
  align-items: center;
  height: 100%;  

  strong {
    margin-right: 10px;    
  }

  a {  
    height: 100%;   
    margin-right: 10px;
    padding: 0 15px;
    margin-left: 10px;          
    text-decoration: none;
    font-weight: bold;   
    color: ${props => props.theme.theme.header.text};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 10px;        
      width: 25px;
      height: 25px;
      
    }
  }

  button {      
    color: ${props => props.theme.theme.header.text};       
    border: 0; 
    background: none;        
  }

} 
main {
  @media (max-width: 650px) {
    display: block;
    font-size: 24px;
 
  
    button {
      background: none;
      margin: 0 5px;
      border: 0;
    }    
    
    div {         
      background: linear-gradient(#B22222, #800000, #FF0000);
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      z-index: 4;
      width: 100%;
      color: #FFFFFF;       
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        margin-bottom: 25px;
        height: 150px;
      }

      a {
        text-decoration: none;
        color: #FFFFFF;
        border: 2px solid #FFFFFF;
        padding: 15px;
        border-radius: 30px;
        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }
      }    

      button {
        margin-top: 10px;
        border: 2px solid #FFFFFF;
        padding: 10px;
        border-radius: 30px;
        color: #FFFFFF;

        svg {
          margin-right: 5px;
        }
      }

      button#close {
        background: none;
        border: 0;
        color: #FFFFFF;
        position: absolute;
        right: 5px;
        top: 0;
      }
    }
    
  }
  display: none 
}

`
