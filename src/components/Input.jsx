export default function InputText(props) {
    return (
        <input 
            type={props.type} 
            name={props.inputName} 
            placeholder={props.placeholder} 
            id={props.id} 
        />
    )
}

// export function InputEmail({inputName}) {
//     return (
//         <input type="email" name={inputName} />
//     )
// }

// export function InputPassword({inputName}) {
//     return (
//         <input type="password" name={inputName} />
//     )
// }