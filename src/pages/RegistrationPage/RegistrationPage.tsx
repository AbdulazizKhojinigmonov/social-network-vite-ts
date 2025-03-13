import { AppInPut } from "../../components/AppInPut/AppInPut";
import { AppButton } from "../../components/AppButton/AppButton";
import { Heading } from "../../components/Heading/Heading";

import "./RegistrationPage.scss";
import { SRegistrationInfo } from "../../components/Registration/Registration.style";

export const RegistrationPage = () => {
  return (
    <SRegistrationInfo>
      <Heading headingText="Регистрация" headingType="h1" />
      <form action="#">
        <AppInPut type="tel" placeholder="Имя" inputValue="" userEmail="" inputChange={() => {}} isError={false} />
        <AppInPut type="tel" placeholder="Номер телефона" inputValue="" userEmail="" inputChange={() => {}} isError={false} />
        <AppInPut type="password" placeholder="Пароль" inputValue="" userEmail="" inputChange={() => {}} isError={false} />
        <AppButton buttonText="Зарегистрироваться" isDisabled={false} buttonClick={() => {}} />
      </form>
      
   
    </SRegistrationInfo>
  );
};