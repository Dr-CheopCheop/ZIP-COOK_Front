const titleRequirements = {
  required: {
    value: true,
    message: "레시피 제목을 입력해 주세요!",
  },
};

const imageRequirements = {
  required: {
    value: true,
    message: "이미지를 추가해주세요!",
  },
};

const difficultyRequirements = {
  required: {
    value: true,
    message: "난이도를 입력해주세요!",
  },
};
const contentsRequirements = {
  required: {
    value: true,
    message: "내용을 입력해주세요!",
  },
};
const priceRequirements = {
  required: {
    value: true,
    message: "가격을 입력해주세요!",
  },
};
const discountPriceRequirements = {
  required: {
    value: true,
    message: "가격을 입력해주세요!",
  },
};

const foodIngredientRequirements = {
  required: {
    value: true,
    message: "레시피 재료를 1개이상 입력해주세요!",
  },
};
const manualRquirements = {
  required: {
    value: true,
    message: "설명을 입력해주세요!",
  },
};

const FormRequirements = {
  titleRequirements,
  imageRequirements,
  difficultyRequirements,
  contentsRequirements,
  priceRequirements,
  foodIngredientRequirements,
  manualRquirements,
  discountPriceRequirements,
};

export default FormRequirements;
