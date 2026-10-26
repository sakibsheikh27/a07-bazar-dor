"use client";
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
import { updateUser } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProfilePage = () => {
    const handleUpdateUserProfile = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const resData = await updateUser({
            name: data.name
        });
    };
    const handleClick = () => {
        toast.success('Your name have changed');
    }
    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />
            <h2 className="text-center mt-10">প্রোফাইলে স্বাগতম!!!</h2>
            <div className=' max-w-96 py-10 px-8 rounded-2xl bg-white mx-auto flex items-center justify-center my-10 border-2 border-gray-200'>
                <Form className="w-full max-w-96" onSubmit={handleUpdateUserProfile}>
                    <Fieldset>
                        <Fieldset.Legend>প্রোফাইল সেটিংস</Fieldset.Legend>
                        <Description>নাম পরিবর্তন করো।</Description>
                        <FieldGroup>
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


                        </FieldGroup>
                        <Fieldset.Actions>
                            <Button 
                            onClick={handleClick}
                            type="submit">
                                পরিবর্তন করুন
                            </Button>
                            <Button type="reset" variant="secondary">
                                বাদ দিন
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
            </div>
        </div>
    );
};

export default ProfilePage;