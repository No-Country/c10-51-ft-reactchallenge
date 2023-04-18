import { useContext,createContext } from 'react';
const LoginContext = createContext();

export const useLoginContext = ()=> useContext(LoginContext);
