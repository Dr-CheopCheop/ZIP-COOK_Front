import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./DiscountFormStyle";

interface FormValue {
  title: string;
  price: string;
  img: FileList;
}
const DiscountForm = () => {
  const { register, handleSubmit } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
      <S.Input {...register("title", { required: true })} />
      <S.Input {...register("price", { required: true })} />
      <S.Input
        {...register("img", { required: true })}
        type="file"
        accept="image/*"
      />

      <S.Button>완료</S.Button>
    </S.Form>
  );
};
export default DiscountForm;
