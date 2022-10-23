import { createContext } from "react";
import useUser from "../hooks/useUser";
import React from "react";
import { UserData } from "../types";
import Button from "../components/Button";


export type UserContext = {
    userLogin: UserData | undefined;
    setUserLogin: React.Dispatch<React.SetStateAction<UserData | undefined>>,
}

const UserContext = createContext<UserContext | undefined>(undefined);

const UserLoginInfoData = ({ data }: { data?: UserData | null }) => {
    const {
        userLogin,
    } = useUserContext()
    return (
        <>
            {userLogin && <aside id="user-info">
                <span>User: {data?.nickname}</span> | <span>{data?.email}</span>
            </aside>
            }

            


        </>
    )
}


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const {
        userLogin,
        setUserLogin

    } = useUser();

    return (
        <UserContext.Provider value={
            {
                userLogin,
                setUserLogin

            }
        }
        >
            {children}
            <UserLoginInfoData data={userLogin} />
        </UserContext.Provider >
    )


};

export const useUserContext = () => {
    const context = React.useContext(UserContext)
    if (!context) throw new Error('UserContext must have a UserProvider')
    return context
} 