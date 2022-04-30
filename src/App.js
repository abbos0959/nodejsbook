import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "./component/Navbar";
import { Card } from "./component/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Malumot } from "./component/Malumot";
import { Add } from "./component/Add";
import { Login } from "./component/Login";

const App = () => {
  const [data, setdata] = useState([]);
  const [fil, setfil] = useState([]);
  const [name, setname] = useState("");
  const getData = async () => {
    const data = await fetch("http://localhost:3000/api/v1/data")
      .then((res) => res.json())
      .then((data) => setdata(data.data));
  };
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/api/v1/data/${id}`, {
      method: "DELETE",
    }).then((a) => setdata(data.filter((val) => val.id !== id)));
  };
  const filte = data.filter((val) => {
    if (name == "") {
      return val;
    } else if (val.author?.toLowerCase().includes(name.toLowerCase())) {
      return val;
    }
  });

  const getSort = async (id) => {
    console.log(id);
    await fetch(`http://localhost:3000/api/v1/data/${id}`)
      .then((res) => res.json())
      .then((da) => setfil(da.data));
  };
  useEffect(() => {
    getData();
  }, []);

  console.log("filllllllllll", fil);

  return (
    <div>
      <Router>
        <Navbar name={name} setname={setname} />
        <Routes>
          <Route
            path="/"
            element={
              <Card
                handleDelete={handleDelete}
                getSort={getSort}
                filte={ filte }
              />
            }
          />
          <Route path="/books/:id" element={<Malumot fil={fil} />} />
          <Route path="/add_post" element={<Add data={data} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
