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

const levelRequirements = {
  required: {
    value: true,
    message: "난이도를 입력해주세요!",
  },
};
const shareContentRequirements = {
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

const ingredientsRequirements = {
  required: {
    value: true,
    message: "레시피 재료를 1개이상 입력해주세요!",
  },
};
const recipeContentRquirements = {
  required: {
    value: true,
    message: "상세설명을 입력해주세요!",
  },
};

const commentEditRequirements = {
  required: {
    value: true,
    message: "댓글을 입력해주세요!",
  },
};
const commentPostRequirements = {
  required: {
    value: true,
    message: "설명을 입력해주세요!",
  },
};

const summaryRequirements = {
  required: {
    value: true,
    message: "한 줄 설명을 입력해주세요!",
  },
};

const FormRequirements = {
  titleRequirements,
  imageRequirements,
  levelRequirements,
  shareContentRequirements,
  priceRequirements,
  ingredientsRequirements,
  recipeContentRquirements,
  discountPriceRequirements,
  commentEditRequirements,
  commentPostRequirements,
  summaryRequirements,
};

export default FormRequirements;
