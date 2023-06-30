import { createContext, useState } from "react";
export const Auth = createContext()
function CustomProvider({children}){
    const [islogin, setislogin] = useState(false)
    const [users, setusers] = useState("")
    return(
        <Auth.Provider value={{islogin, setislogin,users, setusers}}>
            {children}
            </Auth.Provider>
    );
}
export default CustomProvider