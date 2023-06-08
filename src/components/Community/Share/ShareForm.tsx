import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Navbar from "../../Navbar/Navbar";
import * as S from "./ShareFormStyle";
import Icons from "../../../Styles/Icons";
import ErrorMessage from "../../Error/ErrorMessage";
import FormRequirements from "../../../constants/FormRequriements";
import type { ShareProps } from "../../../constants/interfaces";
import { defaultShareValue } from "../../../constants/defaultFormOption";
import axios from "axios";

const { titleRequirements, imageRequirements, shareContentRequirements } =
  FormRequirements;
let defaultValue = defaultShareValue;

const ShareForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [imagePreview, setImagePreview] = useState<string>("");
  const [nicks, setNicks] = useState();
  const [sido, setSido] = useState();

  const fetchNickname = async () => {
    const userInfoRes = await axios.get("/auth/user");
    const userInfo = await userInfoRes.data;
    console.log(userInfo);
    setNicks(userInfo.nickname);
    setSido(userInfo.location.split(" ")[0]);
  };

  useEffect(() => {
    fetchNickname();
  }, []);

  console.log("location: ", location.state);
  console.log("로그인한사람의 sido: ", sido);
  if (location.state) {
    defaultValue = location.state.datas;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ShareProps>({
    defaultValues: defaultValue,
  });
  const { img } = watch();

  useEffect(() => {
    if (img && img.length > 0) {
      const file = img[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [img]);

  const onSubmitHandler: SubmitHandler<ShareProps> = async (data) => {
    const sharepost = {
      uid: 1,
      nickname: nicks,
      title: data.title,
      content: data.content,
      location: sido,
    };
    const formData = new FormData();

    formData.append("file", data.img[0]);
    formData.append(
      "sharepost",
      new Blob([JSON.stringify(sharepost)], { type: "application/json" })
    );

    try {
      const response = await axios({
        url: location.state
          ? `/board-share/${sido}/update/${location.state.num}`
          : `/board-share`,
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        data: formData,
      });
      console.log(response.data);

      navigate("/community");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Navbar />
      <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
        <S.Container>
          <S.Manual>
            <p>제품 정보를 입력해 주세요.</p>
          </S.Manual>
          <label>
            <S.ImgView>
              {imagePreview ? (
                <img src={imagePreview} alt="사진 첨부" />
              ) : (
                <>{Icons.camera}</>
              )}
            </S.ImgView>
            <S.ImgInput
              {...register("img", imageRequirements)}
              type="file"
              accept="image/*"
            />
            {errors.img && <ErrorMessage>{errors.img.message}</ErrorMessage>}
          </label>
          <S.Input
            placeholder="제목"
            {...register("title", titleRequirements)}
          />
          {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

          <S.Textarea
            placeholder="내용을 입력해주세요"
            rows={5}
            cols={33}
            {...register("content", shareContentRequirements)}
          />

          {errors.content && (
            <ErrorMessage>{errors.content.message}</ErrorMessage>
          )}

          {/* 모두채워졌을때 완료설정 */}
          <S.Button>작성</S.Button>
        </S.Container>
      </S.Form>
    </>
  );
};

export default ShareForm;
