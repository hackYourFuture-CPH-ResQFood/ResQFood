"use client";
import { useState } from "react";
import AreaCodeSearch from "../AreaCodeSearch/AreaCodeSearch";

export default function AreaCodeSearchSection() {
  const [areaCode, setAreaCode] = useState("");

  const handleAreaSearch = (validateAreaCode) => {
    setAreaCode(validateAreaCode);
  };
  return (
    <section>
      <AreaCodeSearch onAreaCodeSearch={handleAreaSearch} />
      {areaCode && <p>You search for {areaCode}</p>}
    </section>
  );
}
