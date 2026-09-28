import { useState } from "react";

export default function MyComp3() {
    const [person, setPerson] = useState({
        pName: 'abcd',
        pSalary: '50000',
        pCity: 'Pune'
    })

    const UpdateSalary = () => {
        setPerson(data => {
            return { ...data, pSalary: 90000 }
        }) ;
    };

    const updateAll = () => {
        setPerson(() => {
            return { pName: 'Suyashh', pSalary:120000 , pCity: 'Mumbai'}
        })
    };

    return (
        <>
        <h4>Name: {person.pName}</h4> 
        <h4>Salary: {person.pSalary}</h4> 
        <h4>City: {person.pCity}</h4> 

        <button onClick={UpdateSalary}>Update Salary</button>
        <button onClick={updateAll}>Update All</button>
        </>
    );
}