import {
  BackgroudWrapper,
  IdleStance,
  PlayButton,
  Score,
  IdleStance2p,
} from "./styles";
import GameLogic from "./components/GameLogic";
import idle from "./images/1p/stand.gif";
import idle2p from "./images/2p/stand.gif";
import BGM from "./music.mp3";
import { Howl } from "howler";

const player1 = [
  {
    image: idle,
  },
];

function App() {
  var sound = new Howl({
    src: [BGM],
    autoplay: true,
    loop: true,
    volume: 0.03,
  });

  return (
    <BackgroudWrapper>
      <header>
        <PlayButton onClick={sound.play()}> </PlayButton>
        <Score>Score</Score>
      </header>
      <GameLogic />
      <IdleStance src={idle} />
      <IdleStance2p src={idle2p} />
    </BackgroudWrapper>
  );
}

export default App;
