import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import type { getLocalStorageType } from "../types/allFilesTypes";

export const AuthContext = createContext<undefined|getLocalStorageType>(undefined)

const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [userData, setUserData] = useState<getLocalStorageType|undefined>(undefined);

    useEffect((): void => {
      setLocalStorage();
        const data: getLocalStorageType|undefined = getLocalStorage();
        if(!data) return;
        setUserData(data);
    }, [])

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider