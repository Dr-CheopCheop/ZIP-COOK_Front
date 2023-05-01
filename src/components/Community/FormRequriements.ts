const cookTimeRequirements = {
  required: {
    value: true,
    message: "시간을 입력해주세요!",
  },
  pattern: {
    value:
      /([01]?[0-9]|2[0-3])시간\s*(?:반)?\s*[0-5]?[0-9]분|[0-5]?[0-9]분|([01]?[0-9]|2[0-3])시간/,
    message: "시간과 분을 사용하여 입력해주세요!",
  },
};

const titleRequirements = {
  required: {
    value: true,
    message: "레시피 제목을 입력해 주세요!",
  },
};

const imageRequirements = {
  required: {
    value: true,
    message: "이미지를 첨부해주세요!",
  },
};

const difficultyRequirements = {
  required: {
    value: true,
    message: "난이도를 입력해주세요!",
  },
};

const FormRequirements = {
  cookTimeRequirements,
  titleRequirements,
  imageRequirements,
  difficultyRequirements,
};

export default FormRequirements;
