import { NavLink } from "react-router-dom";
import { FormButton } from "../../components/FormButton";
import {
  FormContainer,
  FormInput,
  SignUpContainer,
  PasswordContainer,
} from "./styles";
import { useForm } from "react-hook-form";

import jujutsuBg from "../../assets/images/jujutsuBg.jpeg";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const signUpFormValidationSchema = zod.object({
  username: zod
    .string()
    .min(3, "O nome de usuário deve ter 3 ou mais caracteres."),
  email: zod.string().email("Email inválido"),
  password: zod.string().min(6, "A senha deve ter 6 ou mais caracteres."),
  confirmPassword: zod
    .string()
    .min(6, "A senha deve ter 6 ou mais caracteres."),
});

type SignUpFormData = zod.infer<typeof signUpFormValidationSchema>;

export function SignUp() {
  const { register, handleSubmit, watch } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormValidationSchema),
  });

  const username = watch("username");
  const email = watch("email");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const isDisabledSubmit = !(username && email && password && confirmPassword);

  function handleSignUp(data: SignUpFormData) {
    console.log(data);
  }

  return (
    <SignUpContainer>
      <img src={jujutsuBg} alt="" />

      <FormContainer action="" onSubmit={handleSubmit(handleSignUp)}>
        <h1>Register</h1>

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
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            placeholder="Ex.: email@dominio.com.br"
            {...register("email")}
          />
        </FormInput>

        <PasswordContainer>
          <FormInput>
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              placeholder="Mínimo de 6 caracteres"
              {...register("password")}
            />
          </FormInput>

          <FormInput>
            <label htmlFor="confirmPassword">confirm password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Mínimo de 6 caracteres"
              {...register("confirmPassword")}
            />
          </FormInput>
        </PasswordContainer>

        <FormButton title="Register" disabled={isDisabledSubmit} />

        <span>
          Já possui uma conta? <NavLink to="/">Login</NavLink>
        </span>
      </FormContainer>
    </SignUpContainer>
  );
}
