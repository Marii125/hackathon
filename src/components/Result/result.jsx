import { Profile } from '../Profile/index';
import { Positions } from '../../data/dataPositionsCreator';

const findPositionWithMaxPoints = (score) => {
  const keyPositions = Object.keys(score);
  const valuesPositions = Object.values(score);

  let bestScore = -Infinity;
  let bestIndex = -1;

  valuesPositions.forEach((positionScore, index) => {
    if (positionScore > bestScore) {
      bestScore = positionScore;
      bestIndex = index;
    }
  });

  const bestPosition = keyPositions[bestIndex];

  return bestPosition;
};

export const Result = ({ score }) => {
  const positionWithMaxPoints = findPositionWithMaxPoints(score);

  const positionDetail = Positions[positionWithMaxPoints];
  // const positionDetail = Positions.find(
  //   (position) => position.id === positionWithMaxPoints,
  // );

  return (
    <Profile
      imagepath={positionDetail.imagepath}
      title={positionDetail.title}
      description={positionDetail.description}
    />
  );
};
