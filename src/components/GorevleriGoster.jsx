import React from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons

const GorevleriGoster = ({ gorevler, gorevDelete, setGorevler }) => {
  return (
    <div>
      {gorevler.map((gorev, index) => {
        return (
          <div
            key={index}
            className={gorev.bitti ? "done" : "gorev"}
            onDoubleClick={() => {
              setGorevler(
                gorevler.map((el) =>
                  el.id === gorev.id
                    ? { ...el, bitti: !el.bitti }
                    : { ...el }
                )
              );
            }}
          >
            <h3>
              {gorev.text}
              <FaTimesCircle
                style={{ color: "red" }}
                onClick={() => gorevDelete(gorev.id)}
              />
            </h3>
            <h6>{gorev.day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
