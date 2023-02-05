export const authReducer = (state, action) => {
  const type = {
    ...state,
    '[Auth] Login': {
      logged: true,
      user: action.payload,
    },
    '[Auth] Logout': {
      logged: false,
      user: null,
    },
  };

  return type[action.type] || state;
};
