import React from "react";

const Employee = ({ name }) => {
    console.log('Employee component rendered');
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default React.memo(Employee)