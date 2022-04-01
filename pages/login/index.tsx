import React from "react";
import { Formik } from "formik";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-2">
      <div className="block text-4xl uppercase text-purple-600 font-extrabold">
        <p>Tsarka</p>
        <p>Frontend</p>
        <p>Task</p>
      </div>
      <div className="p-5 lg:p-10 rounded-xl shadow-2xl shadow-violet-300 w-11/12 lg:w-4/12">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = { email: "", password: "" };
            if (!values.email) {
              errors.email = "* Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "* Invalid email address";
            }
            if (!values.password) {
              errors.password = "* Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                  placeholder="username@example.com"
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
                  disabled={isSubmitting}
                  className="w-full p-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-lg"
                >
                  Sign in
                </button>
              </section>
            </form>
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
