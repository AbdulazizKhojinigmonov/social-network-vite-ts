import { ErrorMassage, SAppInput } from "./AppInput.style";

interface IAppInPutProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError : boolean;
  errorMessage?: string;
  inputValue: string;
  userEmail: string;
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}
export const AppInPut = ({ userEmail,isError,errorMessage,...props} : IAppInPutProps) => {
    return ( 
        <div>
             <SAppInput{...props} />
             {isError && <ErrorMassage>{errorMessage}</ErrorMassage>}
        </div>
        );
    
};