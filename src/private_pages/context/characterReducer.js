export const characterReducer = (state, action) => {
  //add > action.payload {...toda la info del character}
  //delete > action.payload id
  //state debe ser un arreglo de objetos

  const type = {
    '[Character] add': {
      ...state,
      newCharacter: action.payload,
    },
    '[Character] delete': state.filter((obj) => obj.id < action.payload),
  };

  return type[action.type] || state;
};
