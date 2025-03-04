import { AppInPut } from "../../../components/AppInPut/AppInPut";
import { AppButton } from "../../../components/AppButton/AppButton";
import { Heading } from "../../../components/Heading/Heading";
import { RegistrationInfo } from "../../../components/Registration/RegistrationInfo";
import "./RegistrationPage.scss";

export const RegistrationPage = () => {
  return (
    <div className="RegistrationPage">
      <Heading headingText="Регистрация" headingType="h1" />
      <form action="#">
        <AppInPut type="tel" placeholder="Имя" inputValue="" inputChange={() => {}} />
        <AppInPut type="tel" placeholder="Номер телефона" inputValue="" inputChange={() => {}} />
        <AppInPut type="password" placeholder="Пароль" inputValue="" inputChange={() => {}} />
        <AppButton buttonText="Зарегистрироваться" isDisabled={false} buttonClick={() => {}} />
      </form>
      <RegistrationInfo path="#" />
    </div>
  );
};