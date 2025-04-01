import NumberSelector from "./NumberSelector"
import styled from "styled-components"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";


const GamePlay = () => {
    const [score,setScore]=useState(0);
    const [SelectedNumber,SetSelectedNumber]=useState()
    const [currentDice, setCurrentDice] = useState(1);
    const [error,setError]=useState("")
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }
    const rollDice = () => {
        if(!SelectedNumber){
            setError("you haven't any number")
            return;//number selected nahi hai to return kardo
        }
        setError("")
        const randomNumber = generateRandomNumber(1, 7)
        setCurrentDice((prev) => randomNumber)



        if(SelectedNumber==randomNumber){
            setScore((prev)=>prev+randomNumber)
        }else{
            setScore((prev)=>prev-2)
        }
        SetSelectedNumber(undefined)
    }

    
  const resetScore = () => {
    setScore(0);
  };



    return (
        <MainContainer>
            <div className="top-section">

                <TotalScore
                score={score}
                />

                <NumberSelector 
                setError={setError}
                error={error}
                SelectedNumber={SelectedNumber}
                SetSelectedNumber={SetSelectedNumber}
                />


            </div>
            <RollDice
            currentDice={currentDice}
            rollDice={rollDice} />
             <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;