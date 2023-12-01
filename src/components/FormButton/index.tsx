import { FormButtonContainer } from "./styles";

interface FormButtonProps {
  title: string;
  disabled?: boolean;
}

export function FormButton({ title, ...rest }: FormButtonProps) {
  return <FormButtonContainer {...rest}>{title}</FormButtonContainer>;
}
