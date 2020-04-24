import styled, { css } from 'styled-components'

export const Container = styled.div`
top: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.9);
position: fixed;
z-index: 5;
align-items: center;
justify-content: center;

display: ${props => props.active ? 'flex' : 'none'};

${props =>
props.close &&
css`
    display: none;
    `}

`

export const Content = styled.div`
padding: 15px; 
width: 300px; 
height: 100px;
background: ${props => props.theme.theme.dialog.background};
border-radius: 10px;

p {
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
  color: ${props => props.theme.theme.dialog.text};
}

div {   
  width: 100%;

  display: flex;
  justify-content: flex-end;

  button#cancelar {
    background: transparent;
    color: ${props => props.theme.theme.dialog.text}
  }

  button {
    color: #FFFFFF;
    padding: 5px;
    margin-right: 10px;
    background: #B22222;
    border: 0;
    border-radius: 4px;
  }

  
}
 
`
