import * as Yup from "yup";

const phoneRegExp = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/

export const validationSchema = Yup.object().shape({
    name: Yup.string().required("É necessario que insira seu nome!"),
    email: Yup.string()
      .email("E-mail não é válido")
      .required("É necessário que insira seu e-mail!"),
    phone: Yup.string()
      .matches(phoneRegExp, "O número de telefone não é válido!")
      .required("É necessário que insira um número de telefone!")
  });
  