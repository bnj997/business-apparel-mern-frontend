import { useState, useCallback, useEffect } from 'react';

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);
  const [username, setUsername] = useState(false);

  const login = useCallback((uid, username, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    setUsername(username);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData', 
      JSON.stringify({
        userId: uid,
        username: username,
        token: token, 
        expiration: tokenExpirationDate.toISOString()
      })
    )
    if (!localStorage.getItem(uid)) {
      localStorage.setItem(uid, JSON.stringify([]))
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    setUsername(null);
    localStorage.removeItem('userData');
  }, []);


  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime )
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate])


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData && 
      storedData.token && 
      new Date(storedData.expiration) > new Date() 
    ) {
      login(storedData.userId, storedData.username, storedData.token, new Date(storedData.expiration));
    }
  }, [login])

  return { token,  login, logout, userId, username,  };
};