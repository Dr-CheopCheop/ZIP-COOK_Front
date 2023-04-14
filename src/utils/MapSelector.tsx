import Select from "react-select";
import { map } from "../constants/map";
import { useState } from "react";
import type { addressProps } from "../constants/interfaces";

const MapSelector = () => {
  const { sido, sigugun, dong } = map;

  const [addressPieces, setAddressPieces] = useState<addressProps>({
    sido: "",
    sigugun: "",
    dong: "",
  });
  const filterdSidoList = sigugun.filter((e) => e.link === addressPieces.sido);
  const filterdSidoSigugunList = dong.filter(
    (e) => e.sido === addressPieces.sido && e.sigugun === addressPieces.sigugun
  );

  const address = `${addressPieces.sido} ${addressPieces.sigugun} ${addressPieces.dong}`;
  console.log(address);
  const sidoHandler = (sido: string) => {
    setAddressPieces({
      sido: sido,
      sigugun: "",
      dong: "",
    });
  };
  const sigugunHandler = (sigugun: string) => {
    setAddressPieces({
      ...addressPieces,
      sigugun: sigugun,
      dong: "",
    });
  };
  const dongHandler = (dong: string) => {
    setAddressPieces({
      ...addressPieces,
      dong: dong,
    });
  };
  return (
    <>
      <Select
        onChange={(e: any) => sidoHandler(e.value)}
        options={sido}
        placeholder="시/도 선택"
        value={sido.filter((option) => option.value === addressPieces.sido)}
      />
      <Select
        onChange={(e: any) => sigugunHandler(e.value)}
        options={filterdSidoList}
        placeholder="시/군/구 선택"
        value={filterdSidoList.filter(
          (option) => option.value === addressPieces.sigugun
        )}
      />
      <Select
        onChange={(e: any) => dongHandler(e.value)}
        options={filterdSidoSigugunList}
        placeholder="읍/면/동 선택"
        value={filterdSidoSigugunList.filter(
          (option) => option.value === addressPieces.dong
        )}
      />{" "}
    </>
  );
};

export default MapSelector;
