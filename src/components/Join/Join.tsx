import { useForm, SubmitHandler } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import React, {useState, useRef} from 'react';
import * as S from "./JoinStyle";
import axios from 'axios';
import { spawn } from "child_process";

interface FormValue {
	name: string
	ID: string
  email: string
  code: number
  password: string
  password_confirm: string
}

const SignupForm = () => {
  const navigate = useNavigate();

	const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors }, 
  } = useForm<FormValue>({
    defaultValues: {name:"", ID:"", email:"", password:"", password_confirm:""},
  });
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const passwordRef = useRef<string | null>(null)
    passwordRef.current = watch("password");

    //이메일 전송
    const sendEmail = async (data: FormValue) => {
      try{
        const {email} = data;
        const res = await axios.post("", {email}) //이메일 전송 api
        if(res.status === 200){
          setIsEmailSent(true);
        }else {
          throw new Error("이메일 전송에 실패하였습니다.");
        }
      }catch (error){
        console.log("이메일 전송에 실패했습니다.");
      }
    };

    //이메일 전송번호 확인
    const verifyEmailCode = async (data : FormValue) => {
      try {
        const {email, code} = data;
        //이메일 코드 검증 api
        const res = await axios.post("",{email,code});
        if(res.data.verified){
          setIsEmailSent(true);
          alert("이메일 인증이 완료되었습니다.");
        }else {
          throw new Error("올바른 인증번호가 아닙니다.");
        }
      }catch (error) {
        console.log(error);
        alert("이메일 인증에 실패하였습니다. 다시 시도해주세요");
        setEmailError(String(error));
        setIsSubmitting(false);
      }
    };

    const onSubmitHandler: SubmitHandler<FormValue> = async (data) => {
      try {
        const {ID} = data;
        //아이디 중복 체크
        const idCheckRes = await axios.post('/api/checkId', {ID : ID}); //ID 중복 api 주소
        if(idCheckRes.data.exists){
          throw new Error("이미 사용중인 아이디입니다.");
        }
        
        await sendEmail(data);
      } catch(error){
        console.error(error);
        setEmailError("이메일 전송에 실패했습니다.");
      }finally{
        setIsSubmitting(false);
      }
      navigate('/login');
    };

  return (

    <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
      <S.Test to={"/main"}><S.p>Join Us</S.p></S.Test>
      <div>
	        <S.Div><label>Name</label></S.Div>
        	<div><S.Input placeholder=" 이름을 입력해주세요." {...register("name", { required: true })} /></div>
          {errors.name && errors.name.type === "required" && (
            <div>이름을 작성해주세요!</div>
          )}
	        <S.Div><label>ID</label></S.Div>
        	<div>
          <S.Input placeholder=" 6~8글자 이내로 입력해주세요" {...register("ID", { required: true, minLength : 6, maxLength: 8 })} /></div>
          {errors.ID && errors.ID.type === "required" && (
            <div>아이디는 6~8글자 이내로 작성해주세요.</div>
          )}
          {errors.ID && errors.ID.type === "maxLength" && (
            <div>아이디는 8글자 이내로 작성해주세요.</div>
          )}
	        <S.Div><label>Email</label></S.Div>
        	<div><S.Input placeholder=" 이메일을 입력해주세요" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" />
	        <span>
            <S.E_button type="button" onClick={handleSubmit(sendEmail)}>인증번호 보내기</S.E_button>
            </span>
          {errors.email && errors.email.type === "pattern" && (
            <div>이메일 형식에 맞게 작성해주세요!</div>
          )}
          {errors.email && errors.email.type === "required" && <div>이메일을 작성해주세요!</div>}
          {isEmailSent ? (
            <div>이메일이 전송되었습니다. 인증코드를 확인해주세요.</div>
          ) : (<span></span>)}

          </div>
          <S.Div><label>Email Verification Number</label></S.Div>
          <div><S.Input {...register("code", {required: true})} placeholder="이메일 인증번호를 입력해주세요."
          />
          <span><S.E_button type="button" onClick={handleSubmit(verifyEmailCode)} disabled={!isEmailSent || isSubmitting}>
            확인</S.E_button></span></div>
          {emailError && <div>{emailError}</div>}
          <S.Div><label>password</label></S.Div>
        	<div><S.Input placeholder=" 영문 대/소문자, 특수문자 포함 8글자 이상 입력해주세요" {...register("password", { 
            required: true, 
            minLength: 8,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            })} 
            type="password" /></div>
            {errors.password && errors.password.type === "required" && (
              <div>비밀번호를 입력해주세요.</div>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <div>비밀번호는 8자 이상 입력해주세요.</div>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <div>비밀번호는 영문 대/소문자, 숫자, 특수문자를 포함해 8글자 이상 입력해주세요.</div>
            )}
	        <S.Div><label>password_confirm</label></S.Div>
        	<div><S.Input placeholder=" 비밀번호를 동일하게 입력해주세요" {...register("password_confirm", { required: true,
            	validate: (value) => value === passwordRef.current})} type="password" /></div>
            {errors.password_confirm && errors.password_confirm.type === "required" && (
              <div>비밀번호를 다시 한번 입력해주세요.</div>
            )}
            {errors.password_confirm && errors.password_confirm.type === "required" && (
              <div>비밀번호가 일치하지 않습니다.</div>
            )}
        </div>
        <S.Button>Sign Up</S.Button>
      </S.Form>
  );
};

export default SignupForm;

