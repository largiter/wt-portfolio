import { REQUEST_SECTION, SET_DIMENSION } from './dimensions.types';
import { DIMENSIONS_KEYS } from './dimensions.keys';
import { sections } from './sections.keys';

const { leftSectionWidth, isLoaded, currentSection } = DIMENSIONS_KEYS;

const initialState = {
  [leftSectionWidth]: undefined,
  [isLoaded]: false,
  [currentSection]: null,
  requestSection: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DIMENSION: {
      const { key, dimension } = payload;

      return {
        ...state,
        [key]: dimension,
      };
    }

    case REQUEST_SECTION: {
      const { id } = payload;

      return {
        ...state,
        requestSection: id,
      };
    }

    default:
      return state;
  }
};
