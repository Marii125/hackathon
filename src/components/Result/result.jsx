import { Profile } from '../Profile/index';
import { Positions } from '../../data/dataPositionsCreator';

const findPositionWithMaxPoints = (score) => {
  const keyPositions = Object.keys(score);

  let finalPositions = keysPositions[0];

  keysPositions.forEach((position) => {
    score[position] > score[finalPosition] ? (finalPosition = position) : null;
  });
  return finalPosition;
};

export const Result = (score) => {
  const positionWithMaxPoints = findPositionWithMaxPoints(score);
  const positionDetail = Positions.find(
    (position) => position.id === positionWithMaxPoints,
  );

  return (
    <Profile
      imagepath={positionDetail.imagepath}
      title={positionDetail.title}
      description={positionDetail.description}
    />
  );
};
