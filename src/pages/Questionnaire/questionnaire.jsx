import { useRef, useState } from 'react';
import questionaireData from '../../data/questionnaireData';
import { Question } from '../../components/Question/question';
import { Answer } from '../../components/Answer/answer';
import { History } from '../../components/History/history';
import { Result } from '../../components/Result/result';

export const Questionnaire = () => {
  const [questionId, setQuestionId] = useState(0);
  const questionObject = questionaireData[questionId];

  const [score, setScore] = useState({
    ux: 0,
    frontend: 0,
    analyticka: 0,
    testerka: 0,
  });
  const history = useRef([]);

  const onChangeAnswer = (answer) => {
    console.log(score);
    if (answer.position) {
      setScore((previousScore) => {
        const newScore = {
          ...previousScore,
        };

        newScore[answer.position] = newScore[answer.position] + 1;
        return newScore;
      });
    }

    const questionLog = {
      id: questionId,
      answer: answer.text,
    };

    history.current.push(questionLog);
    setQuestionId(answer.nextQuestionId);
  };

  return questionObject ? (
    <div>
      <Question text={questionObject.question} />
      <div>
        {questionObject.answers.map((answer) => {
          return (
            <Answer
              key={answer.text}
              answer={answer}
              onChangeAnswer={onChangeAnswer}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div>
      <Result score={score} />
      <History dataHistory={history} />
    </div>
  );
};
