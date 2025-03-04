import { AppButton } from "../../components/AppButton/AppButton";
import { AppInPut } from "../../components/AppInPut/AppInPut";
import { Heading } from "../../components/Heading/Heading";
import { RegistrationInfo } from "../../components/Registration/RegistrationInfo";
import "./LoginPage.scss";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading headingText="Авторизация" headingType="h1" />
      <form action="#">
        <AppInPut type="tel" placeholder="Номер телефона" inputValue="" inputChange={() => {}} /> 
        <AppInPut type="password" placeholder="Пароль" inputValue="" inputChange={() => {}} />
        <AppButton buttonText="Войти" isDisabled={false} buttonClick={() => {}} />  
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo path="#" />
    </div>
  );
};
