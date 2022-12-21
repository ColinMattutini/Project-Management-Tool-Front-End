import classes from "./Home.module.css";
import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Backlog", value: 400 },
//   { name: "In-Progress", value: 300 },
//   { name: "Review", value: 300 },
//   { name: "Complete", value: 200 },
// ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Tasks ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      ></text>
    </g>
  );
};

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [backlogTotal, setBacklogTotal] = useState(0);
  const [inProgressTotal, setInProgressTotal] = useState(0);
  const [reviewTotal, setReviewTotal] = useState(0);
  const [completeTotal, setCompleteTotal] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const fetchAllTasks = async () => {
    const response = await fetch(
      "http://localhost:8080/api/project/forumapplication/tasks",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    for (const postKey in data) {
      if (data[postKey].category === "COMPLETE") {
        setCompleteTotal((completeTotal) => completeTotal + 1);
      } else if (data[postKey].category === "REVIEW") {
        setReviewTotal((reviewTotal) => reviewTotal + 1);
      } else if (data[postKey].category === "INPROGRESS") {
        setInProgressTotal((inProgressTotal) => inProgressTotal + 1);
      } else if (data[postKey].category === "BACKLOG") {
        setBacklogTotal((backlogTotal) => backlogTotal + 1);
      }
    }
    console.log(backlogTotal, inProgressTotal, reviewTotal, completeTotal);
    console.log(data);
  };

  const data = [
    { name: "Backlog", value: backlogTotal },
    { name: "In-Progress", value: inProgressTotal },
    { name: "Review", value: reviewTotal },
    { name: "Complete", value: completeTotal },
  ];

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    //Responsive container used so chart can change size
    <div className={classes.column}>
      <div className={classes.column2}>
        <ResponsiveContainer>
          <PieChart width={100} height={100}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx={400}
              cy={200}
              innerRadius={100}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Home;
