import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Navbar from "../../Navbar/Navbar";
import * as S from "./SaleFormStyle";
import Icons from "../../../Styles/Icons";
import ErrorMessage from "../../Error/ErrorMessage";
import FormRequirements from "../../../constants/FormRequriements";
import type { SaleProps } from "../../../constants/interfaces";
import { defaultDiscountValue } from "../../../constants/defaultFormOption";
import axios from "axios";
const {
  titleRequirements,
  imageRequirements,
  discountPriceRequirements,
  priceRequirements,
} = FormRequirements;
const SaleForm = () => {
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

  console.log(sido);
  console.log("location: ", location.state);
  console.log("로그인한사람의 sido: ", sido);

  let defaultValue = defaultDiscountValue;

  if (location.state) {
    defaultValue = location.state.datas;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SaleProps>({
    defaultValues: defaultValue,
  });
  const { img } = watch();

  useEffect(() => {
    if (img && img.length > 0) {
      const file = img[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [img]);

  const onSubmitHandler: SubmitHandler<SaleProps> = async (data) => {
    const salepost = {
      nickname: nicks,
      price: data.price,
      place: data.place,
      discountPrice: data.discountPrice,
      title: data.title,
      location: sido,
    };

    const formData = new FormData();
    formData.append("file", data.img[0]);
    formData.append(
      "salepost",
      new Blob([JSON.stringify(salepost)], { type: "application/json" })
    );
    // formdata 콘솔확인용 추후 삭제 & tsconfig 수정
    for (let key of formData.values()) {
      console.log(key);
    }

    try {
      const response = await axios({
        url: location.state
          ? `/board-sale/${sido}/update/${location.state.num}`
          : `/board-sale`,
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
              {...register("img", imageRequirements)}
              type="file"
              accept="image/*"
            />
          </label>
          {errors.img && <ErrorMessage>{errors.img.message}</ErrorMessage>}

          <S.Input
            placeholder="할인 상품명"
            {...register("title", titleRequirements)}
          />
          {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

          <S.Input
            placeholder="판매 장소"
            {...register("place", priceRequirements)}
          />
          {errors.place && <ErrorMessage>{errors.place.message}</ErrorMessage>}

          <S.Input
            placeholder="상품 가격"
            {...register("price", priceRequirements)}
          />
          {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
          <S.Input
            placeholder="할인 상품 가격"
            {...register("discountPrice", discountPriceRequirements)}
          />
          {errors.discountPrice && (
            <ErrorMessage>{errors.discountPrice.message}</ErrorMessage>
          )}

          {/* 모두채워졌을때 완료설정 */}

          <S.Button>작성</S.Button>
        </S.Container>
      </S.Form>
    </>
  );
};
export default SaleForm;
