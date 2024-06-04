import React from "react";
import data from "./Data";
import Card from "./Card";

export default function Main() {
  return (
    <div className="flex flex-col items-center mt-12 ">
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}
