import { REQUEST_SECTION, SET_DIMENSION } from './dimensions.types';

export const setDimension = (key, dimension) => ({
  type: SET_DIMENSION,
  payload: {
    key,
    dimension,
  },
});

export const requestSection = (id) => {
  const date = new Date();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const finalId = `${id}$$${minutes}${seconds}`;

  return {
    type: REQUEST_SECTION,
    payload: {
      id: finalId,
    },
  };
};
