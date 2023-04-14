import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useAxios from "../../hooks/useAxios";
import Navbar from "../Navbar/Navbar";
import * as S from "./ShareFormStyle";
import Icons from "../../Styles/Icons";
import url from "../../constants/path";
import type { FormProps } from "../../constants/interfaces";

const ShareForm = () => {
  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState<any>("");
  const axiosData = useAxios();

  const { isLoading, error, sendRequest: sendFormRequest } = axiosData;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: { title: "", contents: "" },
  });
  const { img } = watch();

  useEffect(() => {
    if (img && img.length > 0) {
      const file = img[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [img]);

  const onSubmitHandler: SubmitHandler<FormProps> = async (data) => {
    const formData = new FormData();
    formData.append("image", data.img[0]);
    formData.append("title", data.title);
    formData.append("contents", data.contents);

    // formdata 콘솔확인용 추후 삭제 & tsconfig 수정
    for (let key of formData.values()) {
      console.log(key);
    }

    const abc = (responseData: object) => {
      console.log("Share upload Success!", responseData);
      navigate("/community");
    };

    sendFormRequest(
      {
        url: `${url}/share.json`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // headers: { "Content-Type": "multipart/form-data" },
        data: formData,
      },
      abc
    );
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
              {...register("img", { required: "사진을 추가해주세요" })}
              type="file"
              accept="image/*"
            />
          </label>
          <S.Input
            placeholder="제목"
            {...register("title", { required: true })}
          />
          {errors.title?.type === "required" && "제목을 입력해주세요"}
          <S.Input
            placeholder="내용"
            {...register("contents", { required: true })}
          />

          {errors.contents?.type === "required" && "내용을 입력해주세요"}

          {/* 모두채워졌을때 완료설정 */}
          <S.Button>작성</S.Button>
          {isLoading && "로딩중"}
          {error && "에러"}
        </S.Container>
      </S.Form>
    </>
  );
};

export default ShareForm;
