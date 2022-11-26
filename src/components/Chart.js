import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import "./chart.scss"

export default function Chart(props) {
  const [chartsData, setChartsData] = useState(null);
  const [products, setProducts] = useState(null);
  
  useEffect(() => {
    console.log("charts data", props.data);
    formatDataForCharts(props.data);
  }, [])
  

  function formatDataForCharts(data){
    let filtered_data = [];
    // filtering data based on months
    data.forEach(entry => {
      if(filtered_data.filter(e => e.month === entry.month).length === 0) filtered_data.push({ month: entry.month })
    })

    //updating product revenues month wise
    data.forEach(entry =>{
      let month_entry = filtered_data.filter(e => e.month === entry.month)[0]
      if(month_entry[`${entry.product}`]) month_entry[`${entry.product}`] += entry.revenue 
      else month_entry[`${entry.product}`] = entry.revenue
      let obj_to_replace = filtered_data.find((obj) => obj.month === entry.month);
      Object.assign(obj_to_replace, month_entry);
    })

    //setting list of products
    let filtered_products = filtered_data.filter(e => e.month === "January")[0];
    filtered_products = Object.keys(filtered_products).filter(e => e !== "month");
    setProducts(filtered_products);
    
    setChartsData(filtered_data);
  }


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="chart">
      <LineChart
        width={1000}
        height={400}
        data={chartsData}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        {products && products.map(entry =>{
          return <Line
          type="monotone"
          dataKey={entry}
          stroke={getRandomColor()}
          activeDot={{ r: 8 }}
        />
        })}
      </LineChart>
    </div>
  );
}
