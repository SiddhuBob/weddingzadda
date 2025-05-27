import { Empty } from "antd";
import React from "react";

export default function EmptyComp({ message }) {
  return (
    <Empty
      style={{ maxWidth: "500px", margin: "auto", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}
      image="https://static.vecteezy.com/system/resources/previews/004/968/590/original/no-result-data-not-found-concept-illustration-flat-design-eps10-simple-and-modern-graphic-element-for-landing-page-empty-state-ui-infographic-etc-vector.jpg"
      imageStyle={{ width: "100%", maxWidth: "300px", minWidth: "200px", maxHeight: "300px" }}
      description={
        <h3>
          {message}
        </h3>
      }
    />
  );
}
