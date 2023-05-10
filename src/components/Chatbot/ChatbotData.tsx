import React from 'react';
import * as C from './ChatbotStyle';

const ChatbotData = ({ datas, loading }: any) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <div>
          {datas.map((data: any) => (
            <C.SecondDiv key={data.id}>
              {data}
            </C.SecondDiv>
          ))}
        </div>
      </>
    );
  };

  export default ChatbotData;