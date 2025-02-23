import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
  gender: string;
  terms: boolean;
}

export const FormWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const methods = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Final Form Data:", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
