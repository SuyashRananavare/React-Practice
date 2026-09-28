import { useState } from "react";
export default function MyComp() {
    const [age, setAge ] = useState(290);

    const MyFun = () => {
        setAge(29)
    };

    return (
        <>
        <h2>My age is {age}</h2>
        <button onClick={MyFun}>Change Age</button>
        </>
    );
}