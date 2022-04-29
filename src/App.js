import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "./component/Navbar";
import { Card } from "./component/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Malumot } from "./component/Malumot";
import { Add } from "./component/Add";

const App = () => {
  const [data, setdata] = useState([]);
  const [fil, setfil] = useState([]);
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
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Card handleDelete={handleDelete} getSort={getSort} data={data} />
            }
          />
          <Route path="/books/:id" element={<Malumot fil={fil} />} />
          <Route path="/add_post" element={<Add/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
