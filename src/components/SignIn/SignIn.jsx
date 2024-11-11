"use client";
import React, { Suspense, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import AuthInput from '@/components/Common/AuthInput';
import Link from 'next/link';
import axiosService from '@/services/AxiosService';
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaShippingFast, FaTag, FaUserShield } from 'react-icons/fa';
import { FiTriangle } from 'react-icons/fi';
import commonHelper from '@/ClientHelper/common.helper';

const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Email is Required*';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Password is Required*';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    } else if (!/[A-Z]/.test(values.password)) {
        errors.password = 'Password must contain at least one uppercase letter';
    } else if (!/[0-9]/.test(values.password)) {
        errors.password = 'Password must contain at least one digit';
    }
    return errors;
};

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const view = searchParams.get('view');
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            handleSubmit(values);
        },
    });

    const handleSubmit = async (credentials) => {
        try {
            if (credentials.email === '' || credentials.password === '') return toast.error('Missing required fields !!');
            let finalPayload = {};
            Object.keys(credentials).forEach((key) => {
                finalPayload[key] = credentials[key];
            });
            setLoading(true);
            const { data } = await axiosService.makeRequest('POST', commonHelper?.loginEndpoint, finalPayload);
            if (data.success) {
                const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
                const expirationDate = new Date(new Date().getTime() + oneDayInMilliseconds);
                Cookies.set('accessToken', cryptoHelper.encryptText(data.data.token), { expires: expirationDate });
                view ? toast.success("You're in! 🎉 Welcome back!") : toast.success('Logged in successfully')
                router.push(view ? atob(view) : '/')
            } else throw new Error(data?.message?.trim() || 'An unknown error occurred');
        } catch (error) {
            let errorMessage = error.message ?? 'An unknown error occurred';
            if (axios.isAxiosError(error)) errorMessage = error.response?.data?.message || error.message;
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Suspense>
            <div className="flex relative overflow-hidden w-full h-screen items-center justify-center flex-col">
                <h5 className="absolute top-8 left-8 z-10 font-normal tracking-wide text-lg">
                    <Link href={'/'}>
                        <div className="flex items-center gap-2">
                            <img src="/site-logo.png" className='h-[3rem] md:h-[3.5rem]' alt="site-logo" />
                            <div className="flex flex-col -space-y-1 md:text-white">
                                <h1 className='md:text-lg text-base m-0 font-normal tracking-wider uppercase'>Fast</h1>
                                <h1 className='md:text-xl text-lg m-0 font-normal tracking-wider uppercase'>Sourcer</h1>
                            </div>
                        </div>
                    </Link>
                </h5>
                <div className="flex w-full h-full gap-4">
                    <div className="hidden md:flex flex-col justify-center bg-[#fff9f1] relative h-full w-full items-center">
                        <div className="absolute flex flex-col gap-4 bottom-16 left-8 z-10">
                            <p className="text-white font-medium text-3xl leading-tight">
                                We are changing the World of Digital Transformation
                            </p>
                            <div className="flex items-center gap-3 text-white">
                                <div className="flex items-center gap-2 text-sm">
                                    <FaShippingFast />
                                    <span className="font-light text-base tracking-widest">Fast Delivery</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <FaTag />
                                    <span className="font-light text-base tracking-widest">Exclusive Offers</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <FaUserShield />
                                    <span className="font-light text-base tracking-widest">Secure Payments</span>
                                </div>
                            </div>
                        </div>
                        <img
                            className="object-cover w-full h-full"
                            src="https://media.razorpay.com/file/platform/frontend-auth/razorpay/razorpay-bg-visual-1.3x.jpeg"
                            alt="Background"
                        />
                    </div>
                    <div className="absolute flex items-center justify-center md:justify-end w-full h-full right-2">
                        <div className="flex flex-col h-[80vh] items-start justify-center bg-white w-full md:w-3/5 lg:w-2/5 p-8 rounded-lg md:rounded-md md:shadow-lg">
                            {/* <div className="flex w-full items-center justify-end mt-4 gap-2">
                                <h5 className="text-sm font-normal text-right">
                                    Don&apos;t have an Account?
                                </h5>
                                <Link href="/signup" className="text-xs cursor-pointer">Sign up</Link>
                            </div> */}
                            <div className="flex mt-1 gap-2">
                                <FiTriangle className="text-gray-300 transform rotate-10 text-5xl" />
                                <FiTriangle className="text-gray-300 transform -rotate-10 text-5xl" />
                            </div>
                            <h4 className="text-2xl md:text-3xl font-normal mt-4">
                                Welcome Back Admin
                            </h4>
                            <h5 className="mt-2 text-lg font-normal">
                                Please Login to Proceed...
                            </h5>
                            <form onSubmit={formik.handleSubmit} className="w-full mt-6 flex flex-col md:gap-2 gap-3">
                                <AuthInput formik={formik} label="Email*" name="email" placeholder="Enter Your Email Address" type="email" />
                                <div className="flex flex-col w-full mt-4">
                                    <label className="text-gray-700 font-normal" htmlFor="password">Password</label>
                                    <input
                                        className="text-sm border border-gray-300 rounded p-2 mt-1"
                                        placeholder="Enter password"
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {formik.errors.password && <span className="text-xs text-red-500 mt-1">{formik.errors.password}</span>}
                                    <div className="flex justify-between mt-4 items-center">
                                        <div className="flex items-center gap-1">
                                            <input type="checkbox" className="form-checkbox text-gray-600" />
                                            <span className="text-xs font-normal tracking-widest">Remember me</span>
                                        </div>
                                        <Link href="/forget-password" className="text-xs font-normal tracking-widest">Forget Password?</Link>
                                    </div>
                                </div>
                                <button type="submit" className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 text-sm font-normal">
                                    {loading ? <span className="spinner h-4 w-4"></span> : 'Sign In'}
                                </button>
                                {/* <div className="flex flex-col items-start mt-4 gap-2">
                                    <h6 className="text-xs font-normal tracking-widest">
                                        Or Continue with
                                    </h6>
                                    <div className="flex gap-2 mt-4">
                                        <div className="p-2 border border-gray-300 cursor-pointer rounded" onClick={() => signIn("google", { callbackUrl: '/profile' })}>
                                            <FcGoogle className="text-lg" />
                                        </div>
                                        <div className="p-2 border border-gray-300 cursor-pointer rounded" onClick={() => signIn("github", { callbackUrl: '/profile' })}>
                                            <FaFacebook className="text-lg text-blue-600" />
                                        </div>
                                    </div>
                                </div> */}
                            </form>
                            <p className="text-xs text-gray-500 text-center md:mt-4 mt-8">
                                By continuing you agree to Tapster&apos;s Terms of Service and Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default SignIn;
