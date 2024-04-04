// BarChartVisualization.js
import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

function BarChartVisualization({ chartOptions }) {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}

export default BarChartVisualization;
