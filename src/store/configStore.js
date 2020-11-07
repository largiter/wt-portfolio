import { combineReducers } from 'redux';

import dimensions from './dimensions/dimensions.reducer';

const configStore = combineReducers({
  dimensions,
});

export default configStore;
