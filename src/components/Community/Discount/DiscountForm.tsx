import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

import Navbar from "../../Navbar/Navbar";
import * as S from "./DiscountFormStyle";
import Icons from "../../../Styles/Icons";
import url from "../../../constants/path";
import type { FormProps } from "../../../constants/interfaces";

const DiscountForm = () => {
  const navigate = useNavigate();
  const axiosData = useAxios();
  const { isLoading, error, sendRequest: sendFormRequest } = axiosData;

  const [imagePreview, setImagePreview] = useState<any>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: { title: "", price: "" },
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
    formData.append("price", data.price);
    formData.append("title", data.title);

    // formdata 콘솔확인용 추후 삭제 & tsconfig 수정
    for (let key of formData.values()) {
      console.log(key);
    }
    const abc = (responseData: object) => {
      console.log("Discount upload Success!", responseData);
      navigate("/community");
    };

    sendFormRequest(
      {
        url: `${url}/discount.json`,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "application/json" },
      },
      abc
    );
  };

  // const isButtonActive: boolean = imagePreview && title && price;

  return (
    <>
      <Navbar />
      <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
        <S.Container>
          <S.Manual>
            <p>할인 정보를 입력해 주세요.</p>
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
            placeholder="할인 상품명"
            {...register("title", { required: true })}
          />
          <S.Input
            placeholder="할인 상품 가격"
            {...register("price", { required: true })}
          />

          {/* 모두채워졌을때 완료설정 */}
          {errors.title?.type === "required" && "제목을 입력해주세요"}
          {errors.price?.type === "required" && "가격을 입력해주세요"}

          <S.Button>작성</S.Button>
        </S.Container>
        {isLoading && "로딩중"}
        {error && "에러발생"}
      </S.Form>
    </>
  );
};
export default DiscountForm;
