// React
import React, { useState, createContext, ReactElement } from 'react';
import { AuthType } from '../models/auth.type';
import jwt_decode from "jwt-decode";

// Own components

interface DecodedType {
  exp: number;
  distCode: string;
  distName: string;
}

const getInitialValue = () => {
  const token = localStorage.getItem('token');
  if (token) {
    var decoded : DecodedType = jwt_decode(token || "");
    if (decoded) {
      const nowSeconds = new Date().getTime() / 1000;
      const isAuth = decoded?.exp > nowSeconds;
      return {
        distCode: decoded.distCode,
        distName: decoded.distName,
        isAuth: isAuth,
        token: token
      }
    }
  }
  localStorage.removeItem('token');
  return {
    isAuth: false
  }
}

const initialValue = getInitialValue();

export const ContextAuth = createContext<{
  auth: AuthType;
  modifyAuth: (user: AuthType) => void;
  logout: () => void;
}>({
  auth: initialValue,
  modifyAuth: () => null,
  logout: () => null,
});

interface IAuthProvider {
  children: ReactElement;
  value?: AuthType;
}

const ContextProviderAuth = ({ children, value }: IAuthProvider) => {
  const [auth, setAuth] = useState<AuthType>(value || initialValue);

  const modifyAuth = (pAuth: AuthType) => {
    setAuth(pAuth);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({
      isAuth: false
    })
  }

  return (
    <ContextAuth.Provider
      value={{
        auth,
        modifyAuth,
        logout
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};

export default ContextProviderAuth;

