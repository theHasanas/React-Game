function ResetButton(props) {
  return (
    <button
      type="button"
      className="btn lowerButton"
      onClick={() => props.calculateGameScore(0, 0)}
    ></button>
  );
}
