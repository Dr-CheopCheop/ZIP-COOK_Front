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
import Loading from "../../Loading/PageLoading";
import { url } from "../../../constants/serverURL";
import axios from "axios";

const { titleRequirements, imageRequirements, shareContentRequirements } =
  FormRequirements;
let defaultValue = defaultShareValue;

const ShareForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [imagePreview, setImagePreview] = useState<string>("");
  //유저정보에서 위치정보 가져올예정
  const sido = "seoul";

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
    const formData = new FormData();
    formData.append("file", data.img[0]);
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("location", sido);
    // formdata 콘솔확인용 추후 삭제 & tsconfig 수정
    for (let key of formData.values()) {
      console.log(key);
    }

    try {
      const response = await axios({
        url: location.state
          ? `${url}/board-recipe/${location.state.num}`
          : `${url}/board-recipe`,
        method: location.state ? "PUT" : "POST",
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
