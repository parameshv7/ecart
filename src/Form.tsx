import { Input } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Form() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      text: "",
      para: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    //     let dataS = JSON.stringify(data);
    //     const reponse = await axios.post("http://localhost:8080/api/jsonws/react.trainer/addtraine/params/"+dataS
    //     );
    //     console.log(data);
    // alert(JSON.stringify(data));
    const response = await axios.post(`http://localhost:5000/todo`, data);
    navigate(0);

    if (response) {
        
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="text"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <br />
        <Controller
          name="para"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
export default Form;
