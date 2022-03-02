import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";





export default function Subs () {
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
	  
<div className="bgForm">
	<h1>Подпишитесь</h1>
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
      {errors.firstName && <p className="pForm">{errors.firstName.message}</p>}

      
      
      
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
      {errors.email && <p className="pForm">{errors.email.message}</p>}

	  
      
      <input type="submit" />
    </form>
</div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Subs />, rootElement);