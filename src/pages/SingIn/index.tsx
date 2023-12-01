import { SignInContainer, FormInput, FormContainer } from "./styles";
import dbBg from "../../assets/images/dragon-ball-z-poster-uhd-4k-wallpaper.jpg";

import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormButton } from "../../components/FormButton";

const signInFormValidationSchema = zod.object({
  username: zod
    .string()
    .min(3, "O nome de usuário deve ter 3 ou mais caracteres."),
  password: zod.string().min(6, "A senha deve ter 6 ou mais caracteres."),
});

export function SignIn() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(signInFormValidationSchema),
  });

  function handleSignIn(data: any) {
    console.log(data);
  }

  console.log(formState.errors);

  const username = watch("username");
  const password = watch("password");
  const isDisabledSubmit = !(username && password);

  return (
    <SignInContainer>
      <FormContainer action="" onSubmit={handleSubmit(handleSignIn)}>
        <h1>login</h1>

        <FormInput>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            placeholder="Ex.: CHPz"
            {...register("username")}
          />
        </FormInput>

        <FormInput>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            placeholder="Mínimo de 6 caracteres"
            {...register("password")}
          />
        </FormInput>

        <FormButton title="Entrar" disabled={isDisabledSubmit} />

        <span>
          Ainda não possui uma conta? <NavLink to="/register">Register</NavLink>
        </span>
      </FormContainer>
      <img src={dbBg} alt="" />
    </SignInContainer>
  );
}
