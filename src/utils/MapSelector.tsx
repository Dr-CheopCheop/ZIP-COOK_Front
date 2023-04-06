import Select from "react-select";
import { map } from "../constants/map";
import { useState } from "react";

const MapSelector = () => {
  const { sido, sigugun, dong } = map;

  const [sidoValue, setSidoValue] = useState<string>("서울특별시");
  const [sigugunValue, setSigugunValue] = useState<string>("종로구");
  const [dongValue, setDongValue] = useState<string>("청운효자동");

  const filterdSidoList = sigugun.filter((e) => e.link === sidoValue);
  const filterdSidoSigugunList = dong.filter(
    (e) => e.sido === sidoValue && e.sigugun === sigugunValue
  );

  console.log(sidoValue, sigugunValue, dongValue);
  return (
    <>
      <Select
        onChange={(e: any) => setSidoValue(e.value)}
        options={sido}
        placeholder="시/도 선택"
        value={sido.filter((option) => option.value === sidoValue)}
      />
      <Select
        onChange={(e: any) => setSigugunValue(e.value)}
        options={filterdSidoList}
        placeholder="시/도 선택"
        value={filterdSidoList.filter(
          (option) => option.value === sigugunValue
        )}
      />
      <Select
        onChange={(e: any) => setDongValue(e.value)}
        options={filterdSidoSigugunList}
        placeholder="읍/면/동 선택"
        value={filterdSidoSigugunList.filter(
          (option) => option.value === dongValue
        )}
      />
    </>
  );
};

export default MapSelector;
