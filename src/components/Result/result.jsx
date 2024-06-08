import { Profile } from '../Profile';
import dataPosition from './dataProfile.json';

const findPositionWithMaxPoints = (score) => {
  const keyPositions = Object.keys(score);

  let finalPositions = keysPositions[0];

  keysPositions.forEach((position) => {
    score[position] > score[finalPosition] ? (finalPosition = position) : null;
  });
  return finalPosition;
};

const Result = (score) => {
  const positionWithMaxPoints = findPositionWithMaxPoints(score);
  const positionDetail = dataPosition.find(
    (position) => position.id === positionWithMaxPoints,
  );

  return <Profile />;
};
