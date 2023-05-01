import * as M from "./MypageStyle";
import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import {useForm,SubmitHandler} from "react-hook-form";


interface FormValue {
  id : string
  password : string
  code : number
  password_confirm : string
  email : string
}

const Mypage = () => {
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors }, 
  } = useForm<FormValue>({
    defaultValues: {id:"", email:"", password:"", password_confirm:""},
  });
    console.log(watch());
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const passwordRef = useRef<string | null>(null);
    passwordRef.current = watch("password");


    //이메일 전송
    const sendEmail = async (data: FormValue) => {
      try{
        const {email} = data;
        const res = await axios.post("", {email}) //이메일 전송 api
        if(res.status === 200){
          setIsEmailSent(true);
        }else {
          console.log("이메일전송실패",data);
          throw new Error("이메일 전송에 실패하였습니다.");
        }
      }catch (error){
        console.log("이메일전송실패",data);
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
        const {email, password} = data;
        await sendEmail(data);
        //mypage api
        const signUpRes = await axios.post('/api/mypage', { email, password});
        console.log(signUpRes);
      } catch(error){
        console.error(error);
        console.log("이메일 전송실패");
        setEmailError("이메일 전송에 실패했습니다.");
      }finally{
        setIsSubmitting(false);
      }
      alert("변경이 완료되었습니다.");
    };

  return (
    <M.Form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <M.Div>My page</M.Div>
          <M.Line></M.Line>
            <M.Div><M.Lable>ID</M.Lable></M.Div>
          <M.Div><M.Lable>password</M.Lable>
            <span><M.Input placeholder=" 영문 대/소문자, 특수문자 포함 8글자 이상 입력해주세요" {...register("password", { 
              required: true, 
              minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              })} 
              type="password" />
              </span>
              </M.Div>
              {errors.password && errors.password.type === "required" && (
                <div>비밀번호를 입력해주세요.</div>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <div>비밀번호는 8자 이상 입력해주세요.</div>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <div>비밀번호는 영문 대/소문자, 숫자, 특수문자를 포함해 8글자 이상 입력해주세요.</div>
              )}
          <M.Div><M.Lable>password_confirm</M.Lable>
            <span>
              <M.Input placeholder=" 비밀번호를 동일하게 입력해주세요" {...register("password_confirm", { required: true,
                validate: (value) => value === passwordRef.current})} type="password" />
            </span>
            </M.Div>
              {errors.password_confirm && errors.password_confirm.type === "required" && (
                <div>비밀번호를 다시 한번 입력해주세요.</div>
              )}
              {errors.password_confirm && errors.password_confirm.type === "required" && (
                <div>비밀번호가 일치하지 않습니다.</div>
              )}
          <M.Div><M.Lable>Email</M.Lable>
            <span><M.Input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" />
            </span>
            <span>
              <M.E_button type="button" onClick={handleSubmit(sendEmail)}>인증번호 보내기</M.E_button>
            </span>
          </M.Div>
            {errors.email && errors.email.type === "pattern" && (
              <div>이메일 형식에 맞게 작성해주세요!</div>
            )}
            {errors.email && errors.email.type === "required" && <div>이메일을 작성해주세요!</div>}
            {isEmailSent ? (
              <div>이메일이 전송되었습니다. 인증코드를 확인해주세요.</div>
            ) : (<div></div>)}
          <M.Div><M.Lable>Email Verification Number</M.Lable>
            <span>
              <M.Input {...register("code", {required: true})} placeholder="이메일 인증번호를 입력해주세요."/>
            </span>
            <span><M.E_button type="button" onClick={handleSubmit(verifyEmailCode)} disabled={!isEmailSent || isSubmitting}>
              확인</M.E_button></span>
          </M.Div>
          {emailError && <div>{emailError}</div>}
          <M.Div><M.Button>완료</M.Button></M.Div>
        </div>
    </M.Form>
  );
};

export default Mypage;