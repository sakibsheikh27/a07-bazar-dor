'use client';

import React from 'react';
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

import { signIn } from '@/lib/auth-client';

const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());


    const { data: resData, error } = await signIn.email({
        email: data.email,
        password: data.password,
    });

    console.log("Response:", resData, error);

    // alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
};

const SignUp = () => {
    return (
        <div>
            <div className='text-center my-20'>
                <h2 className='font-bold text-2xl'>সাইন ইন</h2>
                <p className='text-gray-500'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            </div>
            <div className=' max-w-96 py-10 px-8 rounded-2xl bg-white mx-auto flex items-center justify-center my-10 border-2 border-gray-200'>
                <Form
                    className="flex w-96 flex-col gap-4"
                    render={(props) => <form {...props} data-custom="foo" />}
                    onSubmit={onSubmit}
                >

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
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
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>পাসওয়ার্ড</Label>
                        <Input placeholder="পাসওয়ার্ড দিন" />
                        <Description>অন্তত ৮টি অক্ষরের হতে হবে, যার মধ্যে একটি বড় হাতের অক্ষর ও একটি সংখ্যা থাকতে হবে</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit">
                            সাবমিট
                        </Button>
                        <Button type="reset" variant="secondary">
                            রিসেট
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;