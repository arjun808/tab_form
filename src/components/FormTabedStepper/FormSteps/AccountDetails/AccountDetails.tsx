import React from "react";
import { useFormContext } from "react-hook-form";

const AccountDetails: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div>
        <label className="block text-gray-700">Password</label>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum length is 6" },
          })}
          type="password"
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.password && (
          <p className="text-red-500">{String(errors.password.message)}</p>
        )}
      </div>

      <div className="mt-3">
        <label className="block text-gray-700">Gender</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              {...register("gender", { required: "Gender is required" })}
              type="radio"
              value="male"
              className="mr-2"
            />{" "}
            Male
          </label>
          <label className="flex items-center">
            <input
              {...register("gender")}
              type="radio"
              value="female"
              className="mr-2"
            />{" "}
            Female
          </label>
        </div>
        {errors.gender && (
          <p className="text-red-500">{String(errors.gender.message)}</p>
        )}
      </div>
    </>
  );
};

export default AccountDetails;
