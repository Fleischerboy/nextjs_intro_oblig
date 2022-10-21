import { useState } from "react";
import { UserData } from "../types";


export default function useUser(init?: UserData) {
    const [userLogin, setUserLogin] = useState(init);


    return {
        userLogin,
        setUserLogin
    }
}

