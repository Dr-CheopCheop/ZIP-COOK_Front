import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

import type { FormProps } from "../../constants/interfaces";
import Icons from "../../Styles/Icons";
import url from "../../constants/path";
import Navbar from "../Navbar/Navbar";
import * as S from "./RecipeFormStyle";

const RecipeForm = () => {
  const navigate = useNavigate();
  const axiosData = useAxios();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: { title: "", servings: "1인분" },
  });

  const { isLoading, error, sendRequest: sendFormRequest } = axiosData;
  const [imagePreview, setImagePreview] = useState<any>("");

  const onSubmitHandler: SubmitHandler<FormProps> = (data) => {
    const formData = new FormData();
    formData.append("image", data.img[0]);
    formData.append("title", data.title);
    formData.append("servings", data.servings);
    formData.append("Option", data.radioOption);
    formData.append("time", data.time);

    for (let key of formData.values()) {
      console.log(key);
    }

    const abc = (responseData: object) => {
      console.log("Recipe upload Success!", responseData);
      navigate("/community");
    };

    sendFormRequest(
      {
        url: `${url}/recipe.json`,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "application/json" },
      },
      abc
    );
  };

  const { img, servings } = watch();

  useEffect(() => {
    if (img && img.length > 0) {
      const file = img[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [img]);
  const servingsHandler = (operation: string) => {
    let num = parseInt(servings);

    switch (operation) {
      case "-":
        if (num === 1) break;
        setValue("servings", num - 1 + "인분");
        break;

      default:
        setValue("servings", num + 1 + "인분");
        break;
    }
  };
  return (
    <>
      <Navbar />

      <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
        <S.Container>
          <S.Manual>
            <p>레시피 기본 정보를 입력해 주세요.</p>
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
          {errors.img && <S.Error> 이미지를 첨부해주세요!</S.Error>}
          <S.Input
            {...register("title", { required: true })}
            placeholder="레시피 이름"
          />
          {errors.title && <S.Error> 레시피 제목을 입력해주세요!</S.Error>}

          <S.countContainer>
            <button type="button" onClick={() => servingsHandler("-")}>
              -
            </button>
            <S.Input {...register("servings", { required: true })} readOnly />
            <button type="button" onClick={() => servingsHandler("+")}>
              +
            </button>
          </S.countContainer>
          <S.Input
            {...register("time", { required: true })}
            placeholder="조리 시간"
          />
          <S.RadioContainer>
            <input
              type="radio"
              value="상"
              id="상"
              {...register("radioOption")}
            />
            <label htmlFor="상">상</label>
            <input
              type="radio"
              value="중"
              id="중"
              {...register("radioOption")}
            />
            <label htmlFor="중">중</label>
            <input
              type="radio"
              value="하"
              id="하"
              {...register("radioOption")}
            />
            <label htmlFor="하">하</label>
          </S.RadioContainer>

          {errors.time && <S.Error>조리 시간을 입력해주세요!</S.Error>}
          {isLoading && "로딩중"}
          {error && "에러발생"}
          <S.Button type="submit">{Icons.chef}Cook!</S.Button>
        </S.Container>
      </S.Form>
    </>
  );
};

export default RecipeForm;
