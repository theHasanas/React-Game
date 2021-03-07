import styled from "styled-components";
import level from "./images/levelBackground.jpg";

const PlayButton = styled.button`
  background-color: white;
  border-radius: 50%;
  color: black;
  padding: 10px 10px;
  text-align: center;
  display: inline-block;
  font-size: 13px;
  margin-left: 5px;
`;

const IdleStance = styled.img`
  height: 250px;
  width: 176px;
  margin-left: 300px;
`;

const IdleStance2p = styled.img`
  height: 250px;
  width: 176px;
  margin-left: 180px;
`;

const Score = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: -25px;
`;

const GameResults = styled.p`
  display: flex;
  justify-content: center;
  margin-top: -8px;
  color: #750000;
`;

const ButtonWrapper = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
`;

const Action1 = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  color: black;
  padding: 12px 20px;
  margin-left: 3px;
  margin-bottom: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #f2e200;
    color: white;
  }
`;

const Action2 = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  color: black;
  padding: 12px 20px;
  margin-bottom: 5px;
  margin-left: 3px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #f44336;
    color: white;
  }
`;

const Action3 = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  color: black;
  padding: 12px 20px;
  margin-left: 3px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #008cba;
    color: white;
  }
`;

export {
  Score,
  ButtonWrapper,
  Action1,
  Action2,
  Action3,
  IdleStance,
  PlayButton,
  GameResults,
  IdleStance2p,
};
