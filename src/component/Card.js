import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
export const Card = ({ data, handleDelete, getSort }) => {
  return (
    <div className="ca">
      <ul className="card-wrapper">
        {data.map((val) => {
          return (
            <li key={val.id} className="card">
              <img src={val.imageLink} alt="" />
              <h3>
                <a href="">{val?.author}</a>
              </h3>
              <p>{val?.title}</p>
              <div className="co">
                <h5>{val.country}</h5>
                <p>{val.language}</p>
              </div>
              <div className="co">
                <h5> Pages:{val.pages}</h5>
                <p> Year:{val.year}</p>
              </div>
              <div className="del">
                <a className="but" href={val.link} target="_blank">
                  Satyga Yo`l
                </a>
                <a>
                  {" "}
                  <Link to="/books/:{val.id}" onClick={() => getSort(val.id)}>
                    Batafsil
                  </Link>
                </a>
                <button onClick={() => handleDelete(val.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
