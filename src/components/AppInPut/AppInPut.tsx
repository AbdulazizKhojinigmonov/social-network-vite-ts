interface IAppInPutProps {
    type: "tel" | "password";
    placeholder: string;
    inputValue: string; 
    inputChange?: () => void;
}
export const AppInPut = ({type, placeholder, inputValue, inputChange} : IAppInPutProps) => {
    return (
        <input type={type} placeholder={placeholder} value={inputValue} onChange={inputChange}/>
    )
}   