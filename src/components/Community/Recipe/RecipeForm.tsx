import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import type { FormProps } from "../../../constants/interfaces";
import Icons from "../../../Styles/Icons";
import url from "../../../constants/path";
import Navbar from "../../Navbar/Navbar";
import * as S from "./RecipeFormStyle";
import ErrorMessage from "../../Error/ErrorMessage";
import FormRequirements from "../../../constants/FormRequriements";
import { convertToHour, convertToMinute } from "../../../utils/TimeConvert";
import { defaultRecipeValue } from "../../../constants/defaultFormOption";
import Loading from "../../Loading/Loading";
const {
  titleRequirements,
  imageRequirements,
  difficultyRequirements,
  foodIngredientRequirements,
  manualRquirements,
} = FormRequirements;

const RecipeForm = () => {
  const location = useLocation();
  const [imagePreview, setImagePreview] = useState<string>("");
  const [level, setLevel] = useState<number>(1);

  let defaltValues = defaultRecipeValue;
  const navigate = useNavigate();
  const axiosData = useAxios();

  if (location.state) {
    defaltValues = location.state.datas;

    console.log(defaltValues);
  } else {
    defaltValues = defaultRecipeValue;
    console.log(defaltValues);
  }
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: defaltValues,
  });

  const { isLoading, error, sendRequest: sendFormRequest } = axiosData;

  const onSubmitHandler: SubmitHandler<FormProps> = (data) => {
    const formData = new FormData();
    formData.append("image", data.img[0]);
    formData.append("title", data.title);
    formData.append("quantity", data.quantity);
    formData.append("difficulty", data.difficulty);
    formData.append("cookTimes", data.cookTimes);
    data.foods.forEach((food) => formData.append("foods", food));
    data.manuals.forEach((manual) => formData.append("manuals", manual));

    for (let key of formData.values()) {
      console.log(key);
    }

    console.log(formData);
    const abc = (responseData: object) => {
      console.log("Recipe upload Success!", responseData);
      navigate("/community");
    };
    // defaltValues =

    sendFormRequest(
      {
        //작성 수정여부에 따른 URL수정
        url: `${url}/recipe.json`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // headers: { "Content-Type": "multipart/form-data" },
        data: formData,
      },
      abc
    );
  };

  const { img, quantity, title, cookTimes, difficulty, foods } = watch();

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
  const cookTimesHandler = (operation: string) => {
    let num = parseInt(convertToMinute(cookTimes));

    switch (operation) {
      case "-":
        if (num === 10) break;
        setValue("cookTimes", convertToHour(num - 10));
        break;

      default:
        setValue("cookTimes", convertToHour(num + 10));
        break;
    }
  };

  const showLevel = (num: number) => {
    switch (num) {
      case 2:
        if (img && title && quantity && cookTimes && difficulty) {
          setLevel((level) => 2);
        } else {
        }
        break;
      case 3:
        if (
          img &&
          title &&
          quantity &&
          cookTimes &&
          difficulty &&
          foods.length > 0
        ) {
          setLevel((level) => 3);
        } else {
        }
        break;
      default:
        setLevel(num);
        break;
    }
  };

  if (error) return <>error</>;
  return (
    <>
      <Navbar />
      <S.LevelBar>
        <S.LevelButton isActive={1 === level} onClick={() => showLevel(1)}>
          1
        </S.LevelButton>
        <S.LevelButton
          disabled={!(img && title && quantity && cookTimes && difficulty)}
          isActive={2 === level}
          onClick={() => showLevel(2)}
        >
          2
        </S.LevelButton>
        <S.LevelButton
          disabled={
            foods.length === 0 ||
            !(img && title && quantity && cookTimes && difficulty)
          }
          isActive={3 === level}
          onClick={() => showLevel(3)}
        >
          3
        </S.LevelButton>
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
            {errors.img && <ErrorMessage> {errors.img.message}</ErrorMessage>}
            <S.Input
              {...register("title", titleRequirements)}
              placeholder="레시피 이름"
            />
            {errors.title && (
              <ErrorMessage> {errors.title.message}</ErrorMessage>
            )}

            <S.countContainer>
              <button type="button" onClick={() => quantityHandler("-")}>
                -
              </button>
              <S.Input {...register("quantity")} readOnly />
              <button type="button" onClick={() => quantityHandler("+")}>
                +
              </button>
            </S.countContainer>

            <S.countContainer>
              <button type="button" onClick={() => cookTimesHandler("-")}>
                -
              </button>
              <S.Input {...register("cookTimes")} readOnly />
              <button type="button" onClick={() => cookTimesHandler("+")}>
                +
              </button>
            </S.countContainer>
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
            {errors.difficulty && (
              <ErrorMessage> {errors.difficulty.message}</ErrorMessage>
            )}
          </S.LevelByVIew>

          <S.LevelByVIew isView={level === 2}>
            <S.Manual>
              <p>레시피 재료를 추가해 주세요.</p>
              {Icons.refrigerator}
            </S.Manual>
            <Controller
              name="foods"
              control={control}
              defaultValue={[]}
              rules={foodIngredientRequirements}
              render={({ field }) => (
                <S.StyledTags
                  {...field}
                  value={field.value || []}
                  onChange={field.onChange}
                  inputProps={{ placeholder: "재료" }}
                />
              )}
            />
            {errors.foods && (
              <ErrorMessage>{errors.foods.message}</ErrorMessage>
            )}
          </S.LevelByVIew>

          <S.LevelByVIew isView={level === 3}>
            <S.Manual>
              <p>상세 정보를 입력해 주세요.</p>
              <p>만드는 과정</p>
            </S.Manual>
            <Controller
              name="manuals"
              control={control}
              defaultValue={[]}
              rules={manualRquirements}
              render={({ field }) => (
                <S.StyledManuals
                  {...field}
                  value={field.value || []}
                  onChange={field.onChange}
                  inputProps={{
                    placeholder: ` ${field.value.length + 1}. 설명`,
                  }}
                />
              )}
            />
            <S.Button type="submit">{Icons.chef}Cook!</S.Button>
          </S.LevelByVIew>
        </S.Container>
      </S.Form>

      {isLoading ? <Loading /> : <></>}
    </>
  );
};

export default RecipeForm;
