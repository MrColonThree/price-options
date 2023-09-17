import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentData = [
    {
      id: 1,
      name: "Alice",
      mathMarks: 85,
      physicsMarks: 78,
      chemistryMarks: 92,
    },
    { id: 2, name: "Bob", mathMarks: 78, physicsMarks: 82, chemistryMarks: 75 },
    {
      id: 3,
      name: "Charlie",
      mathMarks: 92,
      physicsMarks: 88,
      chemistryMarks: 90,
    },
    {
      id: 4,
      name: "David",
      mathMarks: 88,
      physicsMarks: 85,
      chemistryMarks: 79,
    },
    { id: 5, name: "Eve", mathMarks: 75, physicsMarks: 70, chemistryMarks: 68 },
    {
      id: 6,
      name: "Frank",
      mathMarks: 94,
      physicsMarks: 92,
      chemistryMarks: 96,
    },
    {
      id: 7,
      name: "Grace",
      mathMarks: 80,
      physicsMarks: 76,
      chemistryMarks: 84,
    },
    {
      id: 8,
      name: "Helen",
      mathMarks: 87,
      physicsMarks: 89,
      chemistryMarks: 85,
    },
    { id: 9, name: "Ivy", mathMarks: 90, physicsMarks: 92, chemistryMarks: 88 },
    {
      id: 10,
      name: "Jack",
      mathMarks: 82,
      physicsMarks: 79,
      chemistryMarks: 76,
    },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="mathMarks" type="monotone" stroke="red"></Line>
        <Line dataKey="physicsMarks" type="" stroke="blue"></Line>
        <Line dataKey="chemistryMarks" type="" stroke="green"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
