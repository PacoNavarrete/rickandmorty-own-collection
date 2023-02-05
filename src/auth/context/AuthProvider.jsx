import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

function init() {
  const user = JSON.parse(localStorage.getItem('R&M user'));

  return {
    logged: !!user,
    user,
  };
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (userName) => {
    const user = {
      id: 1,
      userName,
    };

    const action = {
      type: '[Auth] Login',
      payload: user,
    };
    localStorage.setItem('R&M user', JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    const action = {
      type: '[Auth] Logout',
    };
    localStorage.removeItem('R&M user');
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
