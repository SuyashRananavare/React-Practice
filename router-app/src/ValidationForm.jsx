import { useState } from "react";

export default function ValidationForm() {
    const [formData, setFormData] = useState({
        userName:"",
        userAge:"",
        userEmail:"",
        userPassword:""
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    };

     const validate =() =>{
        let newErrors ={};

        if(FormData.userName === ""){
            newErrors.userName ="name is mandatory";
        }

        if(FormData.userAge === ""){
            newErrors.userAge = "age is mandatory";
        } else if (FormData.userAge <18){
            newErrors.userAge =" age is mandatory";
        }

        if(FormData.userEmail ===""){
            newErrors.userEmail ="email is mandatory";
        } else if (!FormData.userEmail.endsWith("@gmail.com")) {
            newErrors.userEmail ="email should end with '@gmail.com'"
        }

        if(FormData.userPassword ==="") {
            newErrors.userPassword ="password is mandatory"
        } else if (FormData.userPassword.length<8) {
            newErrors.userPassword ="min 8 characters required"
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert('Signup Successful');
            setFormData({
                userName: "",
                userAge:"",
                userEmail:"",
                userPassword:""
            })
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="userName"
            placeholder="Enter name"
            value={formData.userName}
            onChange={handleChange}
            /> <br />
            {errors.userName && <p>{errors.userName}</p>}

            
            <input type="number"
            name="userAge"
            placeholder="Enter age"
            value={formData.userAge}
            onChange={handleChange}
            /> <br />
            {errors.userAge && <p>{errors.userAge}</p>}

            <input type="email"
            name="userEmail"
            placeholder="Enter email"
            value={formData.userEmail}
            onChange={handleChange}
            /> <br />
            {errors.userEmail && <p>{errors.userEmail}</p>}


            <input type="password"
            name="userPassword"
            placeholder="Enter password"
            value={formData.userPassword}
            onChange={handleChange}
            /> <br />
            {errors.userPassword && <p>{errors.userPassword}</p>}

            <button type="submit">Signup</button>
        </form>
    )
}
