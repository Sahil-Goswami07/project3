import styled from "styled-components"
import { useState } from "react"

const NumberSelector =  ({setError,error,SelectedNumber,SetSelectedNumber}) =>{
    const arrNumber=[1,2,3,4,5,6];

    const numberSelectorHandler=(value)=>{
        SetSelectedNumber(value)
        setError("")
    }

  
    console.log(SelectedNumber)
    
    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
                
        {arrNumber.map((value,i)=>(
            <Box 
            isSelected={SelectedNumber===value}
            key={i}
            onClick={()=>numberSelectorHandler(value)}>
                {value}</Box>
        ))
    }
        
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}


export default NumberSelector

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;

align-items: end;
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700px;
}
.error{
    color: red;
}
`

const Box = styled.div`
height:72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
background-color: ${(props)=>props.isSelected ? "Black" : "white"  };
color: ${(props)=>props.isSelected ? "white" : "black"  };
font-size: 24px;
font-weight: 700;
`