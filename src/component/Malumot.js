import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
export const Malumot = (props) => {
  const { fil } = props;
  console.log("fillllllllllllllllllcjaaaaaaaaa",fil.data);
  return (
    <div className="ca">
      <ul className="card-wrapper">
        <div>
        <li key={fil?.data?.id} className="card">
          <img src={fil?.data?.imageLink} alt="" />
          <h3>
            <a href="">{fil?.data?.author}</a>
          </h3>
          <p>{fil?.data?.title}</p>
          <div className="co">
            <h5>{fil?.data?.country}</h5>
            <p>{fil?.data?.language}</p>
          </div>
          <div className="co">
            <h5> Pages:{fil?.data?.pages}</h5>
            <p> Year:{fil?.data?.year}</p>
          </div>
          <div className="del">
            <a className="but" href={fil?.data?.link} target="_blank">
              Satyga Yo`l
            </a>
            <a href="/">Orqaga qaytish</a>
          </div>
        </li>
        </div>
      </ul>
    </div>
  );
};
