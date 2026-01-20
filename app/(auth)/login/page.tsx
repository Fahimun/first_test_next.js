export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="w-full max-w-sm p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-100"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-600 dark:text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-100"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-500 dark:text-blue-400 border-gray-300 dark:border-gray-600 rounded"
              />
              <label htmlFor="remember" className="text-sm text-gray-600 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-500 dark:text-blue-400 hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
          >
            Log In
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

