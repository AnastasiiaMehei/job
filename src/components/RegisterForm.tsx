import { useRouter } from "next/router";
import { FormikHelpers } from "formik"; // Якщо ви використовуєте Formik

// Визначаємо інтерфейс для значень форми
interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const router = useRouter();

  // Оновлюємо функцію handleSubmit з явними типами
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Register
      </button>
    </form>
  );
}