import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import React, { PureComponent } from "react";
import { BallTriangle } from "react-loader-spinner";
import { BarChart, Bar, XAxis } from "recharts";

const Another = () => {
  const [another, setAnother] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const aiData = data.data.data;
        const aiWithFakeData = aiData.map((ai) => {
          const obj = {
            name: ai.phone_name,
            price: parseInt(ai.slug.split("-")[1]),
          };
          return obj;
        });
        setAnother(aiWithFakeData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      )}
      <h1 className="text-3xl text-center ">LengtH: {another.length}</h1>
      <BarChart width={800} height={500} data={another}>
        <Bar dataKey="price" fill="purple" />
        <XAxis dataKey="name"></XAxis>
      </BarChart>
    </div>
  );
};

export default Another;
