import { Answer } from '../Answer/answer';
import { Question } from '../Question/question';
import { questionaireData } from '../../data/questionnaireData';

export const History = ({ dataHistory }) => {
  return dataHistory.map((questionLog) => {
    const questionId = questionLog.id;
    const questionObject = questionaireData[questionId];

    const answer = questionLog.answer;
    return (
      <div key={answer}>
        <Question text={questionObject.question} />
        {/*      <Answer answer={answer} /> */}
      </div>
    );
  });
};
