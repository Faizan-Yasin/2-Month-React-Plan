import { UserContext } from "../contexts/UserContext";
import { useReducer } from 'react'
import { userReducer, initialState } from '../reducers/UserReducer';

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState)
    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}