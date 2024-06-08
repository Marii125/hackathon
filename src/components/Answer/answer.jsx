export const Answer = ({ answer, onChangeAnswer }) => {
  return (
    <button onClick={() => onChangeAnswer(answer.nextQuestionId)}>
      {answer.text}
    </button>
  );
};
