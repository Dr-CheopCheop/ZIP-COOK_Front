import * as S from "./DiscountFormStyle";

import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";

interface FormValue {
  title: string;
  price: string;
  region: string;
  img: FileList;
}
const DiscountForm = () => {
  const [imagePreview, setImagePreview] = useState<any>("");
  const { register, handleSubmit, watch } = useForm<FormValue>();
  const image = watch("img");

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    const formData = new FormData();
    formData.append("price", data.price);
    formData.append("title", data.title);
    formData.append("region", data.region);
    formData.append("image", data.img[0]);

    // formdata 콘솔확인용
    for (let key of formData.values()) {
      console.log(key);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
      <S.Container>
        <S.Manual>
          <p>할인 정보를 입력해 주세요.</p>
        </S.Manual>
        <label>
          <S.ImgView>
            {imagePreview ? (
              <img src={imagePreview} alt="" />
            ) : (
              <p>사진 첨부</p>
            )}
          </S.ImgView>
          <S.ImgInput
            {...register("img", { required: true })}
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
        <S.Input
          placeholder="지역"
          {...register("region", { required: true })}
        />

        <S.Button>완료</S.Button>
      </S.Container>
    </S.Form>
  );
};
export default DiscountForm;
