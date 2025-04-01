import styled from "styled-components"

const StartGame=( { toggle } )=> {
  return (
    <Container>
        <div>

        <img src="/images/dices.png" alt="" srcset="" />
        </div>
        <div>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now </Button>
        </div>
    </Container>

  )
}

export default StartGame

const Container=styled.div`
max-width: 1180px;
padding: 0 auto;
height: 100vh;
display: flex;
align-items: center;
`

const Button=styled.button`
padding: 10px 18px;
min-width: 220px;
background-color: #000000;
border-radius: 5px;
color: white;
border: 1px solid transparent;
transition: 0.4s  background ease-in;
cursor: pointer;


&:hover{
    background-color:  #ffffff;
    cursor: pointer;
    color: #030303;
    border: 1px solid black;
    transition: 0.3s  background ease-in;
}

`