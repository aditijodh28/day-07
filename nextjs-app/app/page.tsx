import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-10 text-center">

        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            DAY 7 PROJECT
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Employee Management Dashboard
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Modern employee management system built with
          <span className="font-semibold"> Next.js</span>,{" "}
          <span className="font-semibold">Node.js</span> and{" "}
          <span className="font-semibold">Express</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/employees"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            View Employees
          </Link>

          <Link
            href="/employees/create"
            className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Add Employee
          </Link>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-3xl mb-3">⚛️</div>

            <h2 className="font-bold text-lg">
              Next.js
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              App Router, pages and dynamic routes
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-3xl mb-3">🚀</div>

            <h2 className="font-bold text-lg">
              Express API
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              REST API with CRUD operations
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-3xl mb-3">👨‍💼</div>

            <h2 className="font-bold text-lg">
              Employee CRUD
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              Create, read, update and delete employees
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}