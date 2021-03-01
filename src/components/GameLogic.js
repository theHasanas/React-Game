import {
  Action1,
  Action2,
  Action3,
  Score,
  ButtonWrapper,
  GameResults,
} from "../styles";
import { useState } from "react";

function randomIntFromInterval(min, max) {
  return Math.floor((Math.random() % max) * (max - min + 1) + min);
}

const getHouseChoice = () => {
  {
    const randomNumber = randomIntFromInterval(1, 3);
    const choices = ["paper", "scissor", "rock"];
    return choices[randomNumber - 1];
  }
};

const GameLogic = () => {
  const houseChoice = getHouseChoice();
  //states
  const [userScore, setScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [matchEndState, setState] = useState("-");

  const gameResultChoices = [
    {
      text: "YOU TIED",
      value: "tie",
    },
    {
      text: "YOU LOSE",
      value: "lose",
    },
    {
      text: "YOU WIN",
      value: "win",
    },
  ];

  const choices = {
    rock: { name: "rock", defeats: "scissor" },
    paper: { name: "paper", defeats: "rock" },
    scissor: { name: "scissor", defeats: "paper" },
  };

  function processMove(userChoice) {
    if (userChoice === houseChoice) {
      setState("Draw Game");
      return gameResultChoices[0];
    } else if (choices.rock.name === userChoice && houseChoice === "scissor") {
      const result = gameResultChoices[2];
      setScore(userScore + 1);
      setState("You Win!");
      return result;
    } else if (choices.paper.name === userChoice && houseChoice === "rock") {
      const result = gameResultChoices[2];
      setScore(userScore + 1);
      setState("You Win!");
      return result;
    } else if (choices.scissor.name === userChoice && houseChoice === "paper") {
      const result = gameResultChoices[2];
      setScore(userScore + 1);
      setState("You Win!");
      return result;
    } else {
      const result = gameResultChoices[1];
      setCpuScore(cpuScore + 1);
      setState(gameResultChoices.text);
      setState("You Lose!");
      return result;
    }
  }
  return (
    <>
      <Score>
        {userScore} : {cpuScore}
      </Score>
      <GameResults>{matchEndState}</GameResults>
      <ButtonWrapper>
        <Action1 onClick={() => processMove("rock")}>Kick!</Action1>
        <Action2 onClick={() => processMove("paper")}>Shoryu!</Action2>
        <Action3 onClick={() => processMove("scissor")}>Hado!</Action3>
      </ButtonWrapper>
    </>
  );
};

export default GameLogic;
