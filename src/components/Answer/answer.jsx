import './style.css';
export const Answer = ({ answer, onChangeAnswer }) => {
  return (
    <button
      className="answers-list__answer"
      onClick={() => onChangeAnswer(answer)}
    >
      {answer.text}
    </button>
  );
};
