import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import type { FormProps } from "../../../constants/interfaces";
import Icons from "../../../Styles/Icons";
import url from "../../../constants/path";
import Navbar from "../../Navbar/Navbar";
import * as S from "./RecipeFormStyle";
import FormRequirements from "../FormRequriements";

const {
  cookTimeRequirements,
  titleRequirements,
  imageRequirements,
  difficultyRequirements,
} = FormRequirements;

const RecipeForm = () => {
  const [level, setLevel] = useState<number>(1);
  const navigate = useNavigate();
  const axiosData = useAxios();
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: { title: "", quantity: "1인분", foods: [] },
  });

  const { isLoading, error, sendRequest: sendFormRequest } = axiosData;
  const [imagePreview, setImagePreview] = useState<string>("");

  const onSubmitHandler: SubmitHandler<FormProps> = (data) => {
    const formData = new FormData();
    formData.append("image", data.img[0]);
    formData.append("title", data.title);
    formData.append("quantity", data.quantity);
    formData.append("difficulty", data.difficulty);
    formData.append("cookTime", data.cookTime);
    data.foods.forEach((food) => formData.append("foods", food));

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

  const { img, quantity } = watch();

  useEffect(() => {
    if (img && img.length > 0) {
      const file = img[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [img]);
  const quantityHandler = (operation: string) => {
    let num = parseInt(quantity);

    switch (operation) {
      case "-":
        if (num === 1) break;
        setValue("quantity", num - 1 + "인분");
        break;

      default:
        setValue("quantity", num + 1 + "인분");
        break;
    }
  };
  if (isLoading) return <>Loading...</>;
  if (error) return <>error</>;

  const showLevel = (num: number) => {
    alert(num);
    setLevel(num);
  };

  return (
    <>
      <Navbar />
      <S.LevelBar>
        <button onClick={() => showLevel(1)}>1</button>
        <button onClick={() => showLevel(2)}>2</button>
        <button onClick={() => showLevel(3)}>3</button>
      </S.LevelBar>

      <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
        <S.Container>
          <S.LevelByVIew isView={level === 1}>
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
                {...register("img", imageRequirements)}
                type="file"
                accept="image/*"
              />
            </label>
            {errors.img && <S.Error> 이미지를 첨부해주세요!</S.Error>}
            <S.Input
              {...register("title", titleRequirements)}
              placeholder="레시피 이름"
            />
            {errors.title && <S.Error> 레시피 제목을 입력해주세요!</S.Error>}

            <S.countContainer>
              <button type="button" onClick={() => quantityHandler("-")}>
                -
              </button>
              <S.Input {...register("quantity", { required: true })} readOnly />
              <button type="button" onClick={() => quantityHandler("+")}>
                +
              </button>
            </S.countContainer>
            <S.Input
              {...register("cookTime", cookTimeRequirements)}
              placeholder="조리 시간"
            />
            {errors.cookTime && <S.Error> {errors.cookTime.message}</S.Error>}

            <S.RadioContainer>
              <div>난이도</div>
              <input
                type="radio"
                value="상"
                id="상"
                {...register("difficulty", difficultyRequirements)}
              />
              <label htmlFor="상">상</label>
              <input
                type="radio"
                value="중"
                id="중"
                {...register("difficulty", difficultyRequirements)}
              />
              <label htmlFor="중">중</label>
              <input
                type="radio"
                value="하"
                id="하"
                {...register("difficulty", difficultyRequirements)}
              />
              <label htmlFor="하">하</label>
            </S.RadioContainer>
            {errors.difficulty && <S.Error> 난이도를 입력해주세요!</S.Error>}
          </S.LevelByVIew>

          <S.LevelByVIew isView={level === 2}>
            <S.Manual>
              <p>레시피 재료를 추가해 주세요.</p>
            </S.Manual>
            <Controller
              name="foods"
              control={control}
              defaultValue={[]}
              rules={{ required: true }}
              render={({ field }) => (
                <S.StyledTags
                  {...field}
                  value={field.value || []}
                  onChange={field.onChange}
                  inputProps={{ placeholder: "재료" }}
                />
              )}
            />
            {errors.foods && <S.Error>재료를 추가해주세요</S.Error>}
          </S.LevelByVIew>

          <S.LevelByVIew isView={level === 3}>
            <S.Manual>
              <p>상세 정보를 입력해 주세요.</p>
            </S.Manual>
          </S.LevelByVIew>

          <S.Button type="submit">{Icons.chef}Cook!</S.Button>
        </S.Container>
      </S.Form>
    </>
  );
};

export default RecipeForm;
