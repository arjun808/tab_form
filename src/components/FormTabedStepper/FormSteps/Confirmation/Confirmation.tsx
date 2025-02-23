import React from "react";
import { useFormContext } from "react-hook-form";

const Confirmation: React.FC = () => {
  const { register, formState: { errors }, watch } = useFormContext();
  const termsAccepted = watch("terms", false);

  return (
    <>
      <div>
        <label className="flex items-center">
          <input {...register("terms", { required: "You must accept the terms" })} type="checkbox" className="mr-2" />
          I accept the terms and conditions
        </label>
        {errors.terms && <p className="text-red-500">{String(errors.terms.message)}</p>}
      </div>

      {termsAccepted && <p className="mt-3 text-green-500">Thank you for accepting the terms!</p>}
    </>
  );
};

export default Confirmation;
