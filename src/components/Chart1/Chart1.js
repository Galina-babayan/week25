import { Chart } from "react-google-charts";

export const data = [
  ["Причина", "процент"],
  ["Из любви", 20],
  ["По просьбе детей, внуков", 17],
  ["Для радости, успокоения", 15],
  ["Чтобы ловили мышей", 12],
  ["Приютили с улицы", 11],
];

export const options = {
  title: "Почему люди заводят кошек?",
  is3D: true,
};

function Chart1(props) {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default Chart1;
