import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AppButton } from "../../components/AppButton/AppButton";
import { AppInPut } from "../../components/AppInPut/AppInPut";
import { Heading } from "../../components/Heading/Heading";
import { RegistrationInfo } from "../../components/Registration/RegistrationInfo";
import "./LoginPage.scss";
import { SLoginPage } from "./LoginPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IloginForm {
  userEmail: string;
  userPassword: string;
}
const loginScheme = yup.object({  
  userEmail: yup.string().email("Write email correctly").required(),
  userPassword: yup.string().min(4,"Write correctly").required(),
});


export const LoginPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginScheme),
    mode: "onBlur",
    defaultValues: {
      userPassword: "",
      userEmail: "",
    },
  });

  const onLoginSubmit: SubmitHandler<IloginForm> = (data) => {
    const payload = {
      userEmail: data.userEmail,
      userPassword: data.userPassword,
    };
    // Handle login logic here
  };

  return (
    <SLoginPage>
      <Heading headingText="Авторизация" headingType="h1" />
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <Controller
          name="userEmail"
          control={control}
          render={({ field }) => (
            <AppInPut
              isError={!!errors.userEmail}
              errorMessage={errors.userEmail?.message}
              type="email"
              {...field}
              placeholder="Номер email"
              inputValue={field.value}
              userEmail={field.value}
              inputChange={field.onChange}
            />
          )}
        />
        <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <AppInPut
              isError={!!errors.userPassword}
              errorMessage={errors.userPassword?.message}
              type="password"
              {...field}
              placeholder="Пароль"
              inputValue={field.value}
              userEmail={field.value}
              inputChange={field.onChange}
            />
          )}
        />
        <AppButton buttonText="Войти" isDisabled={false} />
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo path="#" />
    </SLoginPage>
  );
};

export default LoginPage;
