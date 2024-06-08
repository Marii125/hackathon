export const Answer = ({ answer, onChangeAnswer }) => {
  return <button onClick={() => onChangeAnswer(answer)}>{answer.text}</button>;
};
