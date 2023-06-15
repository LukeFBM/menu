import React from "react";

const Title = ({ text }) => {
  return (
    <main>
      <div className="title">
        <h2>{text || "Default text"}</h2>
        <div className="title-underline"></div>
      </div>
    </main>
  );
};

export default Title;
