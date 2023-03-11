import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Количество запросов в месяц, тыс.", { role: "style" }],
  ["Шотландская", 790, "rgb(89, 136, 152)"],
  ["Мейн-кун", 680, "rgb(27, 29, 81)"],
  ["Британская", 500, "goldenrod"],
  ["Бенгальская", 285, "rgb(197, 166, 134)"],
  ["Сфинкс", 200, "rgb(89, 136, 152)"],
  ["Ориентал", 186, "rgb(27, 29, 81)"],
  ["Сиамская", 160, "goldenrod"],
  ["Сибирская", 125, "rgb(197, 166, 134)"],
  ["Бурма", 120, "rgb(89, 136, 152)"],
  ["Абиссинская", 110, "rgb(27, 29, 81)"],
];

export const options = {
  title: "Рейтинг запросов о породах кошек:",
};

function Chart2(props) {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default Chart2;
