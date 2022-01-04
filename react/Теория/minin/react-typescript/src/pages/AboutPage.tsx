import React from "react";
import { useHistory } from "react-router";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>страница информаци</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
        voluptatem voluptas est facilis dolores modi amet voluptates, distinctio
        aperiam provident et quos reiciendis minus suscipit nam at aut veritatis
        delectus.
      </p>
      <button className="btn" onClick={() => history.push("/")}>Обратно к списку дел</button>
    </>
  );
};
