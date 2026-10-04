import React from "react";
const BuggyConmponent = () => {
    const student = {
        name : 'ABCD',
        age : 100
    };
    return(
        <div>
            <h2>{student.name}</h2>
        </div>
    )
}

export default BuggyConmponent