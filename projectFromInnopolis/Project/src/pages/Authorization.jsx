import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import back_desktop from '../imgicon/back_desktop.png';



export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
	  
<main style={{ backgroundImage: `url(${back_desktop})` }}>
	<h1>Войти</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input
        placeholder="Введите Имя"
        {...register("firstName", {
          required: "поле обязательно к заполнению",
          mixLength: {
            value: 2,
            message: "не менее двух символов "
          }
        })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      
      <input
        placeholder="Введите Фамилию"
        {...register("lastName", {
          required: "поле обязательно к заполнению",
          minLength: {
            value: 2,
            message: "не менее 8 символов"
          }
        })}
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      
      <input
        placeholder="Введите Email"
        type="text"
        {...register("email", {
          required: "поле обязательно к заполнению",
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "пароль не валидный"
          }
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

	  
      
      <input type="submit" />
    </form>
</main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
