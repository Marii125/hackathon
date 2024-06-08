import { Profile } from '../Profile/index';
import { Positions } from '../../data/dataPositionsCreator';

const findPositionWithMaxPoints = (score) => {
  const keyPositions = Object.keys(score);
  const valuesPositions = Object.values(score);
  console.log(keyPositions, valuesPositions);

  let finalPosition = keyPositions[0];

  valuesPositions.forEach((position) => {
    console.log(score[position], score[finalPosition]);
    score[position] > score[finalPosition] ? (finalPosition = position) : null;
  });
  console.log(finalPosition);
  return finalPosition;
};

export const Result = ({ score }) => {
  const positionWithMaxPoints = findPositionWithMaxPoints(score);
  const positionDetail = Positions.find(
    (position) => position.id === positionWithMaxPoints,
  );
  console.log(positionDetail, Positions, positionWithMaxPoints);
  return (
    <Profile
      imagepath={positionDetail.imagepath}
      title={positionDetail.title}
      description={positionDetail.description}
    />
  );
};
