import { useFormik } from "formik";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Minimum 8 character")
    .max(16, "Maximum 16 character")
    .required("Password is required"),
});

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState(false);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
  });

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        fill
        className="-z-10 !hidden opacity-60 sm:!inline"
        style={{ objectFit: "cover" }}
        alt=""
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        onClick={handleSubmit}>
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-orange-500 ">
                {errors.email}
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-orange-500 ">
                {errors.password}
              </p>
            )}
          </label>
        </div>
        <button className="w-full rounded bg-[#e50914] font-semibold py-3 ">
          Sign In
        </button>
        <div className="text-[gray] ">
          New to Netflix?{" "}
          <button type="submit" className="text-white hover:underline">
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
