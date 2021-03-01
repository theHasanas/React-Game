const GifAnimation = (props) => {
  const [currentAnimation, setAnimation] = useState("idle");
  const check = props.matchEndState;

  if (check === "Draw Game") {
    setAnimation("timeout");
  }
};

export default GifAnimation;
