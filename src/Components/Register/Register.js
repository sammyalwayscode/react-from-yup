import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register = () => {
  const authSchema = yup.object().shape({
    name: yup
      .string()
      .required("This field id required")
      .max(10, "Thats the max you can write"),
    email: yup.string().email().required("Your Email is required"),
    password: yup
      .string()
      .required("Create your password before you proceed")
      .min(6, "Your password must be six character long"),
    confirm: yup.string().oneOf([yup.ref("password"), null]),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(authSchema) });

  const whenSummitted = async (val) => {
    console.log(val);
    reset();
  };

  return (
    <Container>
      <Wrapper>
        <FormCard onSubmit={handleSubmit(whenSummitted)}>
          <Content>
            <Label>Name</Label>
            <Input placeholder="Enter Name" {...register("name")} />
            <LabelError> {errors.name?.message} </LabelError>
          </Content>
          <Content>
            <Label>Email</Label>
            <Input placeholder="Enter Email Address" {...register("email")} />
            <LabelError> {errors.email?.message} </LabelError>
          </Content>
          <Content>
            <Label>Password</Label>
            <Input placeholder="Enter Password" {...register("password")} />
            <LabelError> {errors.password?.message} </LabelError>
          </Content>
          <Content>
            <Label>Confirm Password</Label>
            <Input
              placeholder="Enter Confirm Password"
              {...register("confirm")}
            />
            <LabelError> {errors.confirm?.message} </LabelError>
          </Content>
          <Button type="submit">Summit</Button>
        </FormCard>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  min-height: 90vh;
`;
const Wrapper = styled.div`
  height: 400px;
  width: 600px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Fredoka One", cursive;
  display: flex;
`;
const FormCard = styled.form``;
const Content = styled.div``;
const Label = styled.div`
  font-size: 12px;
`;
const Input = styled.input`
  height: 30px;
  width: 300px;
  outline: none;
  font-family: "Fredoka One", cursive;
`;
const LabelError = styled.div`
  font-size: 10px;
  color: red;
`;

const Button = styled.button`
  margin: 20px 0;
  height: 30px;
  width: 100px;
  font-family: "Fredoka One", cursive;
  border: none;
  outline: none;
  background-color: #4c8bf5;
  color: #fff;
  border-radius: px;
`;
