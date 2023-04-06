import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./DiscountFormStyle";
import Icons from "../../Styles/Icons";
import Navbar from "../Navbar/Navbar";
import MapSelector from "../../utils/MapSelector";
import Button from "../../utils/Button";

interface FormValue {
  img: FileList;
  title: string;
  price: string;
  region: string;
}

const DiscountForm = () => {
  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState<any>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: { title: "", price: "", region: "" },
  });
  const { img, title, price, region } = watch();

  useEffect(() => {
    if (img && img.length > 0) {
      const file = img[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [img]);

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    const formData = new FormData();
    formData.append("price", data.price);
    formData.append("title", data.title);
    formData.append("region", data.region);
    formData.append("image", data.img[0]);

    // formdata 콘솔확인용 추후 삭제 & tsconfig 수정
    for (let key of formData.values()) {
      console.log(key);
    }

    //제출 성공시
    navigate("/community");
  };

  const isButtonActive: boolean = imagePreview && title && price && region;

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
          {errors.title?.type === "required" && "제목을 입력해주세요"}
          <S.Input
            placeholder="할인 상품 가격"
            {...register("price", { required: true })}
          />

          {errors.price?.type === "required" && "가격을 입력해주세요"}
          <S.Input
            placeholder="지역"
            {...register("region", { required: true })}
          />

          {/* 모두채워졌을때 완료설정 */}
          <MapSelector />
          <Button active={!isButtonActive}>꾸에엑</Button>
        </S.Container>
      </S.Form>
    </>
  );
};
export default DiscountForm;
