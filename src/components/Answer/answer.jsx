import './style.css';
export const Answer = ({ answer, onChangeAnswer }) => {
  return (
    <button className="answer" onClick={() => onChangeAnswer(answer)}>
      {answer.text}
    </button>
  );
};
