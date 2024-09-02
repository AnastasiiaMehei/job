"use client";

import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (values: { email: string; password: string }, actions: any) => {
    try {
      const response = await fetch('https://search-job-server-11.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log(data);

      // Зберігаємо токен в localStorage
      localStorage.setItem('token', data.token);

      // Перенаправляємо користувача на сторінку пошуку вакансій
      router.push('/job-search');
    } catch (err) {
      console.error(err);
    }

    actions.resetForm();
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6" autoComplete="off">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <Field
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <Field
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <button
              className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Log In
            </button>
            <div className="text-center">
              <p className="text-gray-600">
                Don’t have an account?{" "}
                <Link href="/register" className="text-blue-500 hover:underline">
                  Register
                </Link>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}