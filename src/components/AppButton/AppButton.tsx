interface IAppButtonProps {  
    buttonText: string;
    isDisabled: boolean;
    buttonClick?: () => void;
}


export const AppButton = ({ buttonText, isDisabled, buttonClick } : IAppButtonProps) => {
    return (
        <button disabled={isDisabled}  onClick={buttonClick}>{buttonText}</button>
    )
}