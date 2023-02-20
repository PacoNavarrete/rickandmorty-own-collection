export const characterReducer = (state, action) => {
  const type = {
    '[Character] add': [...state, action.payload],
    '[Character] delete': action.payload,
  };

  return type[action.type] || state;
};
