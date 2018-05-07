export const SET_ACTIVE_LIST = 'SET_ACTIVE_LIST';

export const setActiveList = list => {
  return {
    type: SET_ACTIVE_LIST,
    data: list
  }
};