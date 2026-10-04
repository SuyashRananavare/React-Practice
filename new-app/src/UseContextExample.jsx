import { createContext, useContext } from "react";

const UserContext = createContext() 

export default function UseContextExample() {
    let userName = "Suyash";
    return (
        <UserContext.Provider value={userName}>
            <h2>Hello , {userName}</h2>
            <Component1/>
        </UserContext.Provider>
    )
}


function Component1() {
    return (
        <>  
         <p>This is Component1</p>
         <Component2/>
        </>
    )
}

function Component2() {
    let user = useContext(UserContext);
    return (
        <>  
          <p>Component2</p>
          <h4>Hello again, {user}</h4>
        </>
    )
}