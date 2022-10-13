const makeActionCreator = (type, data) => {
  return {
    type,
    payload: data,
  };
};

export default makeActionCreator;
