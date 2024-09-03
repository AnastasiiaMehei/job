"use client";

import { Formik, Form, Field, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";
import "../styles/globals.css";

interface LoginValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (values: LoginValues, actions: FormikHelpers<LoginValues>) => {
    console.log("Login request payload:", values);

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

      // Store token in localStorage
      localStorage.setItem('token', data.token);

      // Redirect user to job search page
      router.push('/job-search');
    } catch (err) {
      console.error(err);
      actions.setStatus({ msg: 'Login failed. Please check your credentials.' });
    } finally {
      actions.setSubmitting(false);
    }
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
          {({ isSubmitting, status }) => (
            <Form className="space-y-6" autoComplete="off">
              <h2 className="text-2xl font-bold text-center">Login</h2>
              {status && <div className="text-red-500">{status.msg}</div>}
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
                className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Log In'}
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
          )}
        </Formik>
      </div>
    </section>
  );
}
