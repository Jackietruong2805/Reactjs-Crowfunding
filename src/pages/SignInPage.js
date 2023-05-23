import useToggleValue from 'hooks/useToggleValue';
import React from 'react';
import LayoutAuthentication from '../layout/LayoutAuthentication';
import FormGroup from 'components/common/FormGroup';
import ButtonGoogle from 'components/button/ButtonGoogle';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Label } from 'components/label';
import { Input } from 'components/input';
import { IconEyeToggle } from 'components/icons';
import { Button } from 'components/button';

const schema = yup.object({
    email: yup
      .string()
      .email()
      .required("This field is required"),
    password: yup
      .string()
      .min(8, "Password must be 8 character")
      .required("This field is required"),
  });

const SignInPage = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit",
      });
    const {value: showPassword, handleToggleValue: handleTogglePassword} = useToggleValue();
    const handleSignIn = (values) => {
        console.log("values", values);
    }
    return (
        <LayoutAuthentication heading="Welcome Back!">
            <p className="mb-6 text-xs font-normal text-center lg:mb-8 text-text3 lg:text-sm">
                Don't have an account?{" "}
                <Link className="font-medium underline text-primary" to="/sign-up">
                    Sign up
                </Link>
            </p>
            <ButtonGoogle text='Sign in with google'></ButtonGoogle>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <FormGroup>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                        error={errors.email?.message}
                        placeholder="example@gmail.com"
                        control={control}
                        name="email"
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password *</Label>
                    <Input
                        error={errors.password?.message}
                        placeholder="Enter password"
                        control={control}
                        type={`${showPassword ? 'text' : 'password'}`}
                        name="password"
                    >
                        <IconEyeToggle
                        open={showPassword}
                        onClick={handleTogglePassword}
                        ></IconEyeToggle>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <span className='inline-block ml-auto text-sm font-medium text-primary'>Forgot password</span>
                </FormGroup>
                <Button className="w-full" kind='primary' type="submit">
                    Sign In
                </Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignInPage;