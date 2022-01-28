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
<h1>Оставить отзыв</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <textarea cols="30" rows="10"
        placeholder="Введите Текст..."
        {...register("feedback")}
        
        
      />
      

      
      <input type="submit" />
    </form>
</main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
