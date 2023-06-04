import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import type { RecipeProps } from "../../../constants/interfaces";
import Icons from "../../../Styles/Icons";
import Navbar from "../../Navbar/Navbar";
import * as S from "./RecipeFormStyle";
import ErrorMessage from "../../Error/ErrorMessage";
import FormRequirements from "../../../constants/FormRequriements";
import { convertToHour, convertToMinute } from "../../../utils/TimeConvert";
import { defaultRecipeValue } from "../../../constants/defaultFormOption";
// import Loading from "../../Loading/PageLoading";
import { url } from "../../../constants/serverURL";
import axios from "axios";
const {
  titleRequirements,
  imageRequirements,
  levelRequirements,
  ingredientsRequirements,
  recipeContentRquirements,
  summaryRequirements,
} = FormRequirements;

const RecipeForm = () => {
  const location = useLocation();
  const [imagePreview, setImagePreview] = useState<string>("");
  const [levels, setLevels] = useState<number>(1);

  let defaultValues = defaultRecipeValue;
  const navigate = useNavigate();

  //수정 여부
  if (location.state) defaultValues = location.state.datas;
  else defaultValues = defaultRecipeValue;

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<RecipeProps>({
    defaultValues: defaultValues,
  });

  const onSubmitHandler: SubmitHandler<RecipeProps> = async (data) => {
    const formData = new FormData();
    formData.append("file", data.img[0]);

    const recipepost = {
      uid: 1,
      nickname: "김모씨",
      title: data.title,
      serving: data.serving,
      level: data.level,
      time: data.time,
      summary: data.summary,
      ingredients: data.ingredients,
      content: data.content,
    };
    formData.append("recipepost", JSON.stringify(recipepost));

    for (let key of formData.values()) {
      console.log(key);
    }

    console.log(recipepost);
    console.log(JSON.stringify(recipepost));

    try {
      const response = await axios({
        url: location.state
          ? `/board-recipe/${location.state.num}`
          : `/board-recipe`,
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

  const { img, serving, title, time, level, ingredients } = watch();

  useEffect(() => {
    if (img && img.length > 0) {
      const file = img[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [img]);
  const servingHandler = (operation: string) => {
    let num = parseInt(serving);

    switch (operation) {
      case "-":
        if (num === 1) break;
        setValue("serving", num - 1 + "인분");
        break;

      default:
        setValue("serving", num + 1 + "인분");
        break;
    }
  };
  const timeHandler = (operation: string) => {
    let num = parseInt(convertToMinute(time));

    switch (operation) {
      case "-":
        if (num === 10) break;
        setValue("time", convertToHour(num - 10));
        break;

      default:
        setValue("time", convertToHour(num + 10));
        break;
    }
  };

  const showLevels = (num: number) => {
    switch (num) {
      case 2:
        if (img && title && serving && time && level) {
          setLevels((levels) => 2);
        } else {
        }
        break;
      case 3:
        if (
          img &&
          title &&
          serving &&
          time &&
          level &&
          ingredients.length > 0
        ) {
          setLevels((levels) => 3);
        } else {
        }
        break;
      default:
        setLevels(num);
        break;
    }
  };

  return (
    <>
      <Navbar />
      <S.LevelBar>
        <S.LevelButton isActive={1 === levels} onClick={() => showLevels(1)}>
          1
        </S.LevelButton>
        <S.LevelButton
          disabled={!(img && title && serving && time && level)}
          isActive={2 === levels}
          onClick={() => showLevels(2)}
        >
          2
        </S.LevelButton>
        <S.LevelButton
          disabled={
            ingredients.length === 0 ||
            !(img && title && serving && time && level)
          }
          isActive={3 === levels}
          onClick={() => showLevels(3)}
        >
          3
        </S.LevelButton>
      </S.LevelBar>

      <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
        <S.Container>
          <S.LevelByVIew isView={levels === 1}>
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
              <button type="button" onClick={() => servingHandler("-")}>
                -
              </button>
              <S.Input {...register("serving")} readOnly />
              <button type="button" onClick={() => servingHandler("+")}>
                +
              </button>
            </S.countContainer>

            <S.countContainer>
              <button type="button" onClick={() => timeHandler("-")}>
                -
              </button>
              <S.Input {...register("time")} readOnly />
              <button type="button" onClick={() => timeHandler("+")}>
                +
              </button>
            </S.countContainer>
            <S.RadioContainer>
              <div>난이도</div>
              <input
                type="radio"
                value="상"
                id="상"
                {...register("level", levelRequirements)}
              />
              <label htmlFor="상">상</label>
              <input
                type="radio"
                value="중"
                id="중"
                {...register("level", levelRequirements)}
              />
              <label htmlFor="중">중</label>
              <input
                type="radio"
                value="하"
                id="하"
                {...register("level", levelRequirements)}
              />
              <label htmlFor="하">하</label>
            </S.RadioContainer>
            {errors.level && (
              <ErrorMessage> {errors.level.message}</ErrorMessage>
            )}
          </S.LevelByVIew>

          <S.LevelByVIew isView={levels === 2}>
            <S.Manual>
              <p>레시피 재료를 추가해 주세요.</p>
              {Icons.refrigerator}
            </S.Manual>
            <Controller
              name="ingredients"
              control={control}
              defaultValue={[]}
              rules={ingredientsRequirements}
              render={({ field }) => (
                <S.StyledTags
                  {...field}
                  value={field.value || []}
                  onChange={field.onChange}
                  inputProps={{ placeholder: "재료" }}
                />
              )}
            />
            {errors.ingredients && (
              <ErrorMessage>{errors.ingredients.message}</ErrorMessage>
            )}
          </S.LevelByVIew>

          <S.LevelByVIew isView={levels === 3}>
            <S.Manual>
              <p>상세 정보를 입력해 주세요.</p>
              <p>만드는 과정</p>
            </S.Manual>
            <S.SummaryInput
              {...register("summary", summaryRequirements)}
              placeholder="레시피 한 줄 설명"
            />
            {errors.summary && (
              <ErrorMessage>{errors.summary.message}</ErrorMessage>
            )}
            <Controller
              name="content"
              control={control}
              defaultValue={[]}
              rules={recipeContentRquirements}
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
            {errors.content && (
              <ErrorMessage>{errors.content.message}</ErrorMessage>
            )}
            <S.Button type="submit">{Icons.chef}Cook!</S.Button>
          </S.LevelByVIew>
        </S.Container>
      </S.Form>
    </>
  );
};

export default RecipeForm;
