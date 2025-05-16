"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md border border-gray-200">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="mb-2">
            <img
              src="/images/logo.png"
              alt="MentorPlace Logo"
              className="h-40"
            />
          </div>
          <h1 className="text-5xl font-bold">Login</h1>
          <p className="text-xs mt-4">
            Don’t have account?{" "}
            <a href="#" className="text-mentorplace hover:underline">
              Sign-up
            </a>
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox " />
              <span>Keep me signed in</span>
            </label>
            <a href="#" className="text-mentorplace hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-md"
            onClick={onClick}
          >
            Login
          </button>

          <p className="text-xs text-center text-gray-500 mt-2">
            By clicking login, you agree to our{" "}
            <a href="#" className="text-mentorplace underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-mentorplace underline">
              Privacy Policy
            </a>
          </p>
        </form>

        {/* Social login */}
        <div className="mt-6">
          <p className="text-center text-sm text-gray-500 mb-4">
            Or continue with
          </p>
          <div className="grid grid-cols-3 gap-3">
            <button className="flex items-center justify-center border border-gray-300 rounded-md p-2">
              <img
                src="/images/google.png"
                alt="Google"
                className="h-10 w-10"
              />
              <p className="text-center text-sm text-gray-500 ml-4 mr-2">
                Google
              </p>
            </button>
            <button className="flex items-center justify-center border border-gray-300 rounded-md p-2">
              <img
                src="/images/microsoft.png"
                alt="Microsoft"
                className="h-7 w-7"
              />
              <p className="text-center text-sm text-gray-500 ml-3 mr-1">
                Microsoft
              </p>
            </button>
            <button className="flex items-center justify-center border border-gray-300 rounded-md p-2">
              <img
                src="/images/linkedin.png"
                alt="LinkedIn"
                className="h-5 w-5"
              />
              <p className="text-center text-sm text-gray-500 ml-4 mr-1">
                LinkedIn
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
