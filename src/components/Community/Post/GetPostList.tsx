import { Link } from "react-router-dom";
import DummyData from "./Dummydata";
import type { PostListProps } from "../../../constants/interfaces";
//get을통해 받아올예정
const GetPostList = (props: PostListProps) => {
  return (
    <>
      <h1>{props.category}</h1>
      <ul>
        {DummyData.map((data) => (
          <Link
            key={data.id}
            to={`/community/${props.category}/${data.id}`}
            state={{ category: props.category }}
          >
            {/* category에따라 구성변경 */}
            <li>{data.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default GetPostList;
