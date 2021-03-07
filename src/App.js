import styled from "styled-components";
import { useState } from "react";
import { Howl } from "howler";

import idleP1 from "./images/1p/stand.gif";
import kickP1 from "./images/1p/kick.gif";

import idleP2 from "./images/2p/stand.gif";
import fallP2 from "./images/2p/fall1.gif";

import level from "./images/levelBackground.jpg";

import BGM from "./music.mp3";

const Stage = styled.div`
  background-image: url(${level});
  background-size: 100% 100%;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

const FightersWrapper = styled.div`
  min-width: 540px;
  max-width: 540px;
  height: 250px;

  position: absolute;
  bottom: 12%;
`;

const P1 = styled.img`
  height: 250px;
  position: absolute;
  left: 0;
`;

const P2 = styled.img`
  height: 250px;
  position: absolute;
  right: 0;
`;

const ActionButtonWrapper = styled.div`
  width: 270px;
  height: 80px;

  display: flex;
  justify-content: space-between;

  position: absolute;
  top: -100px;
  left: -47px;
`;

const ActionButton = styled.button`
  background-color: ${(props) => props.hoverColor};
  border-radius: 100%;
  border: double 8px gray;
  color: black;

  width: 80px;
  height: 80px;

  font-size: 13px;
  text-align: center;

  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: white;
  }
`;

const GameUI = styled.div`
  width: 634px;

  position: fixed;
  text-align: center;
`;

const PlayButton = styled.button`
  background-color: white;
  color: black;
  border-radius: 50%;

  width: 35px;
  height: 35px;

  text-align: center;

  position: absolute;
  top: 10px;
  right: 10px;
`;

const Score = styled.h2`
  justify-content: center;
`;

const sound = new Howl({
  src: [BGM],
  autoplay: false,
  loop: true,
  volume: 0.03,
});

const App = () => {
  const [p1, setP1] = useState(idleP1);
  const [p2, setP2] = useState(idleP2);

  const toggleSound = () => {
    if (sound.playing()) sound.pause();
    else sound.play();
  };

  const playAnimationAndWait = async () => {
    setP1(kickP1);
    setTimeout(() => setP2(fallP2), 500);

    setTimeout(() => {
      setP1(idleP1);
      setP2(idleP2);
    }, 3500);
  };

  return (
    <>
      <PlayButton onClick={toggleSound}>⏯</PlayButton>

      <Stage>
        <GameUI>
          <Score>5 - 3</Score>
          <h1>You win</h1>
        </GameUI>

        <FightersWrapper>
          <P1 src={p1} />
          <P2 src={p2} />

          <ActionButtonWrapper>
            <ActionButton onClick={playAnimationAndWait} hoverColor="#f2e200">
              Kick!
            </ActionButton>
            <ActionButton hoverColor="#f44336">Shoryu!</ActionButton>
            <ActionButton hoverColor="#008cba">Hado!</ActionButton>
          </ActionButtonWrapper>
        </FightersWrapper>
      </Stage>
    </>
  );
};

export default App;
