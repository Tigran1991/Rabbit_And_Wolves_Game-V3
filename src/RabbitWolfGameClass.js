export const generateId = () => Math.floor(Math.random() * 100000);

const add = (summableA, sumableB) => summableA + sumableB;

const determineAdjacentPosition = (position, direction) => {
  const STEP_ON_X = add(position[X], direction[X]);
  const STEP_ON_Y = add(position[Y], direction[Y]);
  return Array.of(STEP_ON_X, STEP_ON_Y);
};

const calculateDistance = (a, b) => {
  const [POSITION_X, POSITION_Y] = a;
  return Math.sqrt((b[X] - POSITION_X) ** 2 + (b[Y] - POSITION_Y) ** 2);
};

export const FREE_CELL = 0;
const RABBIT = 1;
const WOLF = 2;
const HOUSE = 3;
const FENCE = 4;

const X = 0,
  Y = 1;

const MOVE_DIRECTION = {
  "move-right": [0, 1],
  "move-bottom": [1, 0],
  "move-left": [0, -1],
  "move-top": [-1, 0],
};

const DIRECTION_MOVEMENT = Object.values(MOVE_DIRECTION);

export const CHARACTERS = {
  [FREE_CELL]: {
    id: "cell",
  },
  [RABBIT]: {
    name: "RABBIT",
    characterCount: 1,
    canMove: [FREE_CELL, WOLF, HOUSE],
    id: "rabbit",
  },
  [WOLF]: {
    name: "WOLF",
    canMove: [FREE_CELL, RABBIT],
    id: "wolf",
  },
  [HOUSE]: {
    characterCount: 1,
    id: "house",
  },
  [FENCE]: {
    id: "fence",
  },
};

const CHARACTERS_KEYS = Object.keys(CHARACTERS);

export const createCurrentMatrix = (boardSize) => {
  const createInitialMatrix = (boardSize) => {
    const matrix = new Array(boardSize)
      .fill(0)
      .map(() => new Array(boardSize).fill(0));
    return matrix;
  };

  const getRandomPositionsForCharacter = (initialMatrix, initialSize) => {
    const x = Math.floor(Math.random() * initialSize);
    const y = Math.floor(Math.random() * initialSize);
    if (initialMatrix[x][y] === 0) {
      return [x, y];
    } else {
      return getRandomPositionsForCharacter(initialMatrix, initialSize);
    }
  };

  const setCharacterOnPlayfield = (matrix, size) => {
    CHARACTERS[WOLF].characterCount = (size * 40) / 100;
    CHARACTERS[FENCE].characterCount = (size * 40) / 100;
    CHARACTERS_KEYS.forEach((character) => {
      for (let i = 0; i < CHARACTERS[character].characterCount; i++) {
        const [m, n] = getRandomPositionsForCharacter(matrix, size);
        matrix[m][n] = Number(character);
      }
    });
    return matrix;
  };

  const initialMatrix = createInitialMatrix(boardSize);

  return setCharacterOnPlayfield(initialMatrix, boardSize);
};

export const moveCharacters = (moveDirection, matrix, size) => {
  const mainMatrix = matrix.map((innerMatrix) => innerMatrix.slice());
  const determineNearestPosition = ({ distances, positions }) =>
    positions[distances.indexOf(Math.min(...distances))];

  const getCharactersCurrentPosition = (character) => {
    const characterPosition = new Array(0);
    mainMatrix.forEach((elem, elemIndex) => {
      if (elem.includes(character)) {
        elem.filter((item, index) => {
          if (item === character) {
            characterPosition.push(Array.of(elemIndex, index));
          }
        });
      }
    });
    return characterPosition;
  };

  const moveCharacter = (character, positions) => {
    const [currentX, currentY] = positions.currentPosition;
    const [newPositionX, newPositionY] = positions.newPosition;
    mainMatrix[currentX].splice(currentY, 1, FREE_CELL);
    mainMatrix[newPositionX].splice(newPositionY, 1, character);
  };

  const determineNextPositionCharacter = (position) => {
    return mainMatrix[position[X]][position[Y]];
  };

  const isRabbitCanMove = (position) => {
    const nextPositionCharacter = determineNextPositionCharacter(position);
    if (CHARACTERS[RABBIT].canMove.includes(nextPositionCharacter)) {
      return true;
    }
  };

  const getNewPosition = (step, size) => {
    const newX = add(size, step[X]) % size;
    const newY = add(size, step[Y]) % size;
    return Array.of(newX, newY);
  };

  const calculateRabbitNewPosition = (position, direction) => {
    const step = determineAdjacentPosition(position, MOVE_DIRECTION[direction]);
    return getNewPosition(step, size);
  };

  const getRabbitPositions = (moveSide) => {
    const direction = moveSide;
    let currentPosition = getCharactersCurrentPosition(RABBIT)[X];
    let newPosition = calculateRabbitNewPosition(currentPosition, direction);
    if (isRabbitCanMove(newPosition) && isInRange(newPosition)) {
      return {
        currentPosition,
        newPosition,
      };
    }
  };

  const updateRabbitPosition = (position) => {
    if (position) {
      moveCharacter(RABBIT, position);
    }
  };

  const getRabbitNewPosition = (moveSide) => {
    const rabbitPositions = getRabbitPositions(moveSide);
    if (rabbitPositions) {
      updateRabbitPosition(rabbitPositions);
      return rabbitPositions.newPosition;
    }
  };

  const getPlayfieldRange = (size) => {
    return [...Array(size).keys()];
  };

  const isInRange = (position) => {
    const range = getPlayfieldRange(size);
    if (range.includes(position[X]) && range.includes(position[Y])) {
      return true;
    }
  };

  const isWolfCanMove = (position) => {
    const nextPositionCharacter = determineNextPositionCharacter(position);
    if (CHARACTERS[WOLF].canMove.includes(nextPositionCharacter)) {
      return true;
    }
  };

  const getDistancesAndPositions = (wolfPosition, rabbitPosition) => {
    const distances = new Array(0);
    const positions = new Array(0);
    DIRECTION_MOVEMENT.forEach((direction) => {
      const position = determineAdjacentPosition(wolfPosition, direction);
      if (isInRange(position) && isWolfCanMove(position) && rabbitPosition) {
        const distance = calculateDistance(rabbitPosition, position);
        distances.push(distance);
        positions.push(position);
      }
    });
    return {
      distances,
      positions,
    };
  };

  const getPositions = (wolfPosition, rabbitPosition) => {
    let currentPosition = wolfPosition;
    const distancesAndPositions = getDistancesAndPositions(
      wolfPosition,
      rabbitPosition
    );
    let newPosition = determineNearestPosition(distancesAndPositions);
    return {
      currentPosition,
      newPosition,
    };
  };

  const updateWolfPosition = (rabbitPosition) => (position) => {
    const wolfPositions = getPositions(position, rabbitPosition);
    if (!wolfPositions.newPosition) {
      wolfPositions.newPosition = wolfPositions.currentPosition;
    } else if (rabbitPosition && getCharactersCurrentPosition(HOUSE)[X]) {
      moveCharacter(WOLF, wolfPositions);
    }
  };

  const updateWolvesPositions = (charactersPositions) => {
    charactersPositions.wolvesCurrentPositions.map(
      updateWolfPosition(charactersPositions.rabbitNewPosition)
    );
  };

  const getCharactersPositions = (direction) => {
    let wolvesCurrentPositions = getCharactersCurrentPosition(WOLF, matrix);
    let rabbitNewPosition = getRabbitNewPosition(direction);
    return {
      wolvesCurrentPositions,
      rabbitNewPosition,
    };
  };

  const determineWinnerCharacter = () => {
    if (!getCharactersCurrentPosition(RABBIT)[X]) {
      return CHARACTERS[WOLF].name;
    } else if (!getCharactersCurrentPosition(HOUSE)[X]) {
      return CHARACTERS[RABBIT].name;
    }
  };

  const displayWinnerCharacter = () => {
    return determineWinnerCharacter();
  };

  const decideGameCourse = () => {
    if (determineWinnerCharacter()) {
      return displayWinnerCharacter();
    }
  };

  const positions = getCharactersPositions(moveDirection);

  updateWolvesPositions(positions);

  const winnerCharacter = decideGameCourse();

  return [mainMatrix, winnerCharacter];
};
