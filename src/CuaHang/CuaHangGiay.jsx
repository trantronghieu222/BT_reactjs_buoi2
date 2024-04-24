import React, { useState } from "react";
import Dssp from "./Dssp";
import ChiTietSP from "./ChiTietSP";
import data from "./data.json";

const CuaHangGiay = () => {
  // console.log(data);
  const [chiTietSP, setChiTietSP] = useState({
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
  });

  return (
    <div className="container">
      <h1 className="text-center text-secondary">Shop shoe</h1>
      <Dssp products={data} setChiTietSP={setChiTietSP}></Dssp>
      <ChiTietSP chiTietSP={chiTietSP}></ChiTietSP>
    </div>
  );
};

export default CuaHangGiay;
