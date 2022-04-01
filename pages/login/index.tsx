import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginPage = () => {
  const router = useRouter();
  const { error } = router.query;
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);
  const initialValues: FormValues = { email: "", password: "" };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-2">
      <div className="block text-4xl uppercase text-purple-600 font-extrabold">
        <p>Tsarka</p>
        <p>Frontend</p>
        <p>Task</p>
      </div>
      <div className="p-5 lg:p-10 rounded-xl shadow-2xl shadow-violet-300 w-11/12 lg:w-4/12">
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={async ({ email, password }) => {
            await signIn("credentials", {
              email,
              password,
              callbackUrl: `${window.location.origin}`,
            });
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            errors,
          }) => (
            <Form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <section className="flex justify-center">
                <h1 className="text-4xl font-extrabold text-slate-800">
                  Вход в Tsarka
                </h1>
              </section>
              <section className="space-y-2">
                <div className="flex justify-between">
                  <p className="font-thin">Email</p>
                  <p className="text-red-500 font-thin text-sm">
                    {errors.email && touched.email && errors.email}
                  </p>
                </div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="w-full p-3 rounded-lg bg-purple-50 outline-none border border-white focus:border-purple-600 focus:bg-white"
                  placeholder="email@example.com"
                />
              </section>
              <section className="space-y-2">
                <div className="flex justify-between">
                  <p className="font-thin">Password</p>
                  <p className="text-red-500 font-thin text-sm">
                    {errors.password && touched.password && errors.password}
                  </p>
                </div>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="w-full p-3 rounded-lg bg-purple-50 outline-none border border-white focus:border-purple-600 focus:bg-white"
                />
              </section>
              <section>
                <button
                  type="submit"
                  className="w-full p-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-lg outline-none"
                >
                  Sign in
                </button>
              </section>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;

// header
// nav
// footer
// section *
// main
// article *
// aside
// figure
// mark
// address
// time
