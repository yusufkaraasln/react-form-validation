import FormInput from "./components/FormInput";

import "./app.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Kullanıcı Adı",
      label: "Kullanıcı Adı",
      error: "Kullanıcı adı 3-15 karakter arasında olmalıdır ve özel karakter içermemelidir.",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "E-Posta",
      label: "E-Posta",
      error: "E-posta adresi geçersiz.",
      required: true,
      pattern: "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"

    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Doğum Tarihi",
      label: "Doğum Tarihi",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Şifre",
      label: "Şifre",
      error: "Şifre en az 6 karakter olmalıdır ve en az bir büyük harf, bir küçük harf ve bir rakam içermelidir.",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`

    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Şifre Tekrar",
      label: "Şifre Tekrar",
      error: "Şifreler uyuşmuyor.",
      required: true,
      pattern: values.password
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      <h1>Kaydol</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Gönder</button>
      </form>
    </div>
  );
}

export default App;
