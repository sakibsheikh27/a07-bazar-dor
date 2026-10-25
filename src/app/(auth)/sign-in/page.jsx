'use client';

import React from 'react';
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
    Toast,
} from '@heroui/react';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { signIn } from '@/lib/auth-client';
import Link from 'next/link';

const SignIn = () => {
    const router = useRouter();

    // Email and password sign in
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { error } = await signIn.email({
            email: data.email,
            password: data.password,
            callbackURL: '/',
        });

        if (error) {
            toast.error('Sign in failed! Please check your email and password.');
            return;
        }

        toast.success('Sign in successful!');

        router.push('/');
        router.refresh();
    };

    // Google sign in
    const handleGoogleSignIn = async () => {
        const { error } = await signIn.social({
            provider: 'google',
            callbackURL: '/',
        });

        if (error) {
            toast.error('Google sign-in failed!');
        }
        toast.success('Google sign-in successful!');
    };
    const handleGithubSignIn = async () => {
        const { error } = await signIn.social({
            provider: 'github',
            callbackURL: '/',
        });

        if (error) {
            toast.error('Github sign-in failed!');
        }
        toast.success('Github sign-in successfull!');
    };



    return (
        <div>
            <div className="my-20 text-center">
                <h2 className="text-2xl font-bold">সাইন ইন</h2>
                <p className="text-gray-500">
                    বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                </p>
            </div>

            <div className="mx-auto my-10 flex max-w-96 items-center justify-center rounded-2xl border-2 border-gray-200 bg-white px-8 py-10">
                <Form
                    className="flex w-full flex-col gap-4"
                    onSubmit={onSubmit}
                >
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return 'Please enter a valid email address';
                            }
                            return null;
                        }}
                    >
                        <Label>ইমেইল</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="password"
                        type="password"
                    >
                        <Label>পাসওয়ার্ড</Label>
                        <Input placeholder="পাসওয়ার্ড দিন" />
                        <Description>
                            আপনার অ্যাকাউন্টের পাসওয়ার্ড দিন।
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit">
                            সাইন ইন
                        </Button>

                        <Button type="reset" variant="secondary">
                            রিসেট
                        </Button>
                    </div>

                    <Button
                        type="button"
                        onClick={handleGoogleSignIn}
                    >
                        Google দিয়ে সাইন ইন করুন
                    </Button>
                    <Button
                        type="button"
                        onClick={handleGithubSignIn}
                    >
                        Github দিয়ে সাইন ইন করুন
                    </Button>
                    <Link href={'/sign-up'} className='text-sm text-green-500'>অ্যাকাউন্ট আছে নাই? <span className='underline'>সাইন আপ করুন</span></Link>
                </Form>

            </div>
        </div>
    );
};

export default SignIn;
