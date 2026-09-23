import { useEffect, useRef } from "react";

export default function MyForm() {
    const ip = useRef();

    useEffect(() => {
        ip.current.focus();
    },[])

    return (
        <form>
        <input type="text"
          ref={ip}
          placeholder="Enter your Name"
        /> <br />

        <input type="email"
          placeholder="Enter your Email "
        /> <br />

        <input type="password"
          placeholder="Enter your password"
        /> <br />

        </form>
    );
}