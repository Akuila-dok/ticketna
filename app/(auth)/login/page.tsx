'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    setLoading(true);
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      toast.error('Invalid email or password');
    } else {
      toast.success('Login successful!');
      router.push('/dashboard');
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-orange-50 px-4 py-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 space-y-6 border-t-4 border-orange-500"
        >
          <h2 className="text-3xl font-bold text-center text-teal-800">Login</h2>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-teal-800 mb-1">Email</label>
            <div className="relative">
              <MdEmail className="absolute top-3 left-3 text-teal-800" />
              <input
                {...register('email')}
                type="email"
                placeholder="you@example.com"
                className="pl-10 w-full border rounded-md px-3 py-2 text-sm placeholder-gray-500 focus:ring-orange-400 focus:border-orange-400"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-teal-800 mb-1">Password</label>
            <div className="relative">
              <MdLock className="absolute top-3 left-3 text-teal-800" />
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                placeholder="•••••••"
                className="pl-10 pr-10 w-full border rounded-md px-3 py-2 text-sm placeholder-gray-500 focus:ring-orange-400 focus:border-orange-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-3 text-teal-800 focus:outline-none"
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-teal-700 text-white rounded-md cursor-pointer font-semibold hover:bg-teal-800 transition"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <p className="text-sm text-center mt-3">
            Don&apos;t have an account?{' '}
            <a href="/register" className="text-orange-600 hover:underline">
              Register here
            </a>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
}
