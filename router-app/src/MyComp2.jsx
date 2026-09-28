import { useState } from "react";

export default function MyComp2() {
    const [name, setName] = useState('ABCD');
    const [age, setAge] = useState('34');
    const [address, setAddress] = useState('Australia');

    return (
        <>
            <p>Name: {name}</p>
            <button onClick={() => { setName('Suyash') }}>UpdateName</button> <br /><br />

            <p>Age: {age}</p>
            <button onClick={() => { setAge('20') }}>UpdateAge</button> <br /><br />

            <p>Address: {address}</p>
            <button onClick={() => { setAddress('Pune') }}>UpdateAddress</button> <br /><br />

        </>
    );
}