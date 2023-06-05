import React from "react";
import Icons from "../../../Styles/Icons";
import { useState } from "react";
import * as S from "./CommentItemStyle";

const CommentItem = (props: any) => {
  const [editToggle, setEditToggle] = useState<boolean>();
  const [editComment, setEditComment] = useState<string>();
  const { nickname, content, id } = props.data;

  const onChangeCommentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditComment(e.target.value);
  };

  const toggleHandler = () => {
    setEditToggle((state) => !state);
  };
  const editCommentHandler = (id: number) => {
    if (editComment) props.onEditComment(id, editComment);

    setEditToggle((state) => !state);
  };
  const deleteCommentHandler = (id: number) => {
    props.onDeleteComment(id);
  };

  return (
    <S.CommentItem>
      <S.CommentContent>
        {!editToggle ? (
          <>
            <div>{nickname}</div>
            <div>{content}</div>
          </>
        ) : (
          <>
            <input type="text" onChange={onChangeCommentHandler} />
          </>
        )}
      </S.CommentContent>
      <S.CommentButtonContainer>
        {!editToggle ? (
          <>
            <button onClick={toggleHandler}>{Icons.edit}</button>
            <button onClick={() => deleteCommentHandler(id)}>
              {Icons.trash}
            </button>
          </>
        ) : (
          <>
            <button onClick={() => editCommentHandler(id)}>
              {Icons.check}
            </button>
            <button onClick={toggleHandler}>{Icons.cross}</button>
          </>
        )}
      </S.CommentButtonContainer>
    </S.CommentItem>
  );
};

export default CommentItem;
