'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { MdEmail, MdLock, MdPerson, MdPhone, MdVisibility, MdVisibilityOff } from 'react-icons/md';


const countries = [
  { name: 'Kenya', code: '+254', iso: 'ke', flag: '🇰🇪' },
  { name: 'Uganda', code: '+256', iso: 'ug', flag: '🇺🇬' },
  { name: 'Tanzania', code: '+255', iso: 'tz', flag: '🇹🇿' },
  { name: 'Rwanda', code: '+250', iso: 'rw', flag: '🇷🇼' },
  { name: 'Burundi', code: '+257', iso: 'bi', flag: '🇧🇮' },
  { name: 'South Sudan', code: '+211', iso: 'ss', flag: '🇸🇸' },
  { name: 'DR Congo', code: '+243', iso: 'cd', flag: '🇨🇩' },
  { name: 'Somalia', code: '+252', iso: 'so', flag: '🇸🇴' },
];


const registrationSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['Host', 'Audient'], { required_error: 'Select a role' }),
  countryCode: z.string(),
  phone: z.string().min(7, 'Phone number too short'),
  accepted: z.literal(true, { errorMap: () => ({ message: 'You must accept the terms' }) }),
});

type RegistrationData = z.infer<typeof registrationSchema>;


export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationData) => {
  setLoading(true);
  const fullPhone = `${data.countryCode}${data.phone}`;

  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        phone: fullPhone,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      alert(result.message || 'Failed to register');
      return;
    }

    router.push('/login');
  } catch (err) {
    console.error(err);
    alert('Unexpected error occurred');
  } finally {
    setLoading(false);
  }
};


  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-orange-50 px-4 py-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 space-y-6 border-t-4 border-orange-500"
        >
          <h2 className="text-3xl font-bold text-center text-teal-800">Create Account</h2>

          {/* Full Name */}
          <div>
            <label className="block text-lg font-medium text-teal-800 mb-1">Full Name</label>
            <div className="relative">
              <MdPerson className="absolute top-3 left-3 text-teal-800" />
              <input
                {...register('fullName')}
                placeholder="John Doe"
                className="pl-10 w-full border rounded-md px-3 py-2 text-sm placeholder-gray-500 focus:ring-orange-400 focus:border-orange-400"
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-teal-800 mb-1">Email</label>
            <div className="relative">
              <MdEmail className="absolute top-3 left-3 text-teal-800" />
              <input
                {...register('email')}
                type="email"
                placeholder="you@example.com"
                className="pl-10 w-full border rounded-md px-3 py-2 text-sm placeholder-gray-500  focus:ring-orange-400 focus:border-orange-400"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

         {/* Password */}
        <div>
        <label className="block text-lg font-medium text-teal-800 mb-1">Password</label>
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
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-teal-800 focus:outline-none"
            >
            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </button>
        </div>
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

          {/* Role */}
          <div>
            <label className="block text-lg font-medium text-teal-800 mb-1">Registering As</label>
            <select
              {...register('role')}
              className="w-full border text-lg rounded-md px-3 py-2 bg-white focus:ring-orange-400 focus:border-orange-400"
            >
              <option value="">Select Role</option>
              <option value="Host">🎤 Host</option>
              <option value="Audient">🎫 Audient</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
          </div>

          {/* Phone Number */}
        <div>
            <label className="block text-sm font-medium text-teal-800 mb-1">Phone Number</label>
            <div className="flex gap-2">
                <select
                {...register('countryCode')}
                className="w-1/3 border rounded-md px-2 py-2 bg-white focus:ring-orange-400 focus:border-orange-400"
                defaultValue="+254"
                >
                {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                    {`${country.flag} ${country.code}`}
                    </option>
                ))}
                </select>

                <div className="relative w-2/3">
                <MdPhone className="absolute top-3 left-3 text-teal-800" />
                <input
                    {...register('phone')}
                    placeholder="7XXXXXXXX"
                    className="pl-10 w-full border rounded-md px-3 py-2 text-sm placeholder-gray-500 focus:ring-orange-400 focus:border-orange-400"
                />
                </div>
            </div>
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>


          {/* Terms & Conditions */}
          <div className="flex items-start gap-2">
            <input type="checkbox" {...register('accepted')} className="mt-1" />
            <label className="text-sm text-teal-800">
              I accept the{' '}
              <a href="/terms" className="text-orange-600 underline hover:text-orange-800">
                Terms & Conditions
              </a>
            </label>
          </div>
          {errors.accepted && <p className="text-red-500 text-sm">{errors.accepted.message}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-teal-700 text-white cursor-pointer rounded-md font-semibold hover:bg-teal-800 transition"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>

          <p className="text-sm text-center mt-3">
            Already have an account?{' '}
            <a href="/login" className="text-orange-600 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
}
