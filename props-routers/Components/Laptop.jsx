export default function Laptop(props) {
    return (
        <div>
            <h2>Name : {props.name}</h2>
            <h2>RAM : {props.ram}</h2>
            <h2>Storage : {props.storage}</h2>
            <h2>Price : {props.price}</h2>
        </div>
    )
}