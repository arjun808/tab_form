import React from "react";
import { useFormContext } from "react-hook-form";

const PersonalDetails: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div>
        <label className="block text-gray-700">Full Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.name && (
          <p className="text-red-500">{String(errors.name.message)}</p>
        )}
      </div>

      <div className="mt-3">
        <label className="block text-gray-700">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          type="email"
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.email && (
          <p className="text-red-500">{String(errors.email.message)}</p>
        )}
      </div>
    </>
  );
};

export default PersonalDetails;
