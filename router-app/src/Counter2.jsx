import { useEffect, useState } from "react";

export default function Counter2() {
    const [ct1, setCt1] = useState(100);
    const [ct2, setCt2] = useState(200);

    useEffect(() => {
        console.log('Counter 2 was updated');
    }, [ct2])

    return (
        <>
            <div>Counter 1 : {ct1}</div>
            <button onClick={() => setCt1(ct1+1)}>Inc1</button>
            <div>Counter 2 : {ct2}</div>
            <button onClick={() => setCt2(ct2+1)}>Inc2</button>


        </>
    );
}