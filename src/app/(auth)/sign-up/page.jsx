'use client';

import React from 'react';
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import { signUp } from '@/lib/auth-client';

const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());


    const { data: resData, error } = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
    });

    console.log(data);
    // alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
};

const SignUp = () => {
    return (
        <div>
            <div className='text-center my-20'>
                <h2 className='font-bold text-2xl'>অ্যাকাউন্ট তৈরি করুন</h2>
                <p className='text-gray-500'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            </div>
            <div className=' max-w-96 py-10 px-8 rounded-2xl bg-white mx-auto flex items-center justify-center my-10 border-2 border-gray-200'>
                <Form
                    className="flex flex-col gap-4"
                    render={(props) => <form {...props} data-custom="foo" />}
                    onSubmit={onSubmit}
                >
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>নাম</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>
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