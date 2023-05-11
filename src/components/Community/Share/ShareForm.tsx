import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useAxios from "../../../hooks/useAxios";
import Navbar from "../../Navbar/Navbar";
import * as S from "./ShareFormStyle";
import Icons from "../../../Styles/Icons";
import url from "../../../constants/path";
import ErrorMessage from "../../Error/ErrorMessage";
import FormRequirements from "../../../constants/FormRequriements";
import type { FormProps } from "../../../constants/interfaces";
import { defaultShareValue } from "../../../constants/defaultFormOption";
import Loading from "../../Loading/Loading";

const { titleRequirements, imageRequirements, contentsRequirements } =
  FormRequirements;
let defaultValue = defaultShareValue;

const ShareForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [imagePreview, setImagePreview] = useState<string>("");

  const axiosData = useAxios();
  const { isLoading, error, sendRequest: sendFormRequest } = axiosData;

  if (location.state) {
    defaultValue = location.state.datas;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: defaultValue,
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
            {...register("contents", contentsRequirements)}
          />

          {errors.contents && (
            <ErrorMessage>{errors.contents.message}</ErrorMessage>
          )}

          {/* 모두채워졌을때 완료설정 */}
          <S.Button>작성</S.Button>

          {isLoading ? <Loading /> : <></>}
          {error && "에러"}
        </S.Container>
      </S.Form>
    </>
  );
};

export default ShareForm;
