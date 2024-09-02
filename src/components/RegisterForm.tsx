import { useRouter } from "next/router";
import { Formik, Form, Field, FormikHelpers } from "formik";

interface RegisterFormValues {
  email: string;
  password: string;
}

export default function RegisterForm() {
  const router = useRouter();

  const initialValues: RegisterFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: RegisterFormValues,
    actions: FormikHelpers<RegisterFormValues>
  ) => {
    console.log("Register request payload:", values);

    try {
      // Логіка для обробки реєстрації
      // Наприклад, відправка даних на сервер
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <div>
            <label className="block text-gray-700">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}