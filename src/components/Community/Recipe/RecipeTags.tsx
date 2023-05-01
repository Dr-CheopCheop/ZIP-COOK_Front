import React from "react";
import { useForm, Controller } from "react-hook-form";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

function ReactTags() {
  const { control, handleSubmit } = useForm<{ tags: string[] }>({
    defaultValues: {
      tags: [],
    },
  });

  const onSubmit = (data: { tags: string[] }) => {
    console.log(data.tags, "상위전송");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="tags"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <TagsInput
            {...field}
            value={field.value || []}
            onChange={field.onChange}
            inputProps={{ placeholder: "레시피 재료를 추가해주세요" }}
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReactTags;
