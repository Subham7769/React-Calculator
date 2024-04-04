import React, { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Papa from "papaparse";

function Tab1() {
  const [chartOptions, setChartOptions] = useState(null);
  const [tableData, setTableData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      parseCSV(file);
    }
  };

  const parseCSV = (file) => {
    Papa.parse(file, {
      complete: (result) => {
        const data = result.data;
        const cities = [];
        const incomes = [];
        
        for (let i = 1; i < data.length; i++) {
          const city = data[i][0];
          const incomeStr = data[i][1]; 
          const income = incomeStr ? parseFloat(incomeStr.replace(/[$,]/g, "")) : undefined;
          
          if (city && !isNaN(income)) { 
            cities.push(city);
            incomes.push(income);
          }
        }
        
        const options = generateChartOptions(cities, incomes);
        setChartOptions(options);
        setTableData(data);
      },
      header: true, 
    });
  };
  
  const generateChartOptions = (cities, incomes) => {
    return {
      chart: {
        type: "column",
      },
      title: {
        text: "Average Per Capita Income for Cities",
      },
      xAxis: {
        categories: cities,
      },
      yAxis: {
        title: {
          text: "Average Income",
        },
      },
      series: [
        {
          name: "Average Per Capita Income",
          data: incomes,
        },
      ],
    };
  };

  const hardcodedData = [
    ["New York", 75000],
    ["Los Angeles", 65000],
    ["Chicago", 60000],
    ["Houston", 55000],
    ["Phoenix", 50000],
  ];


  const hardcodedCities = hardcodedData.map((row) => row[0]);
  const hardcodedIncomes = hardcodedData.map((row) => row[1]);
  const hardcodedChartOptions = generateChartOptions(hardcodedCities, hardcodedIncomes);

  return (
    <div>
      <h2>Bar Chart Visualization</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {tableData && (
        <div>
          <table>
            <tbody>
              {tableData.slice(1).map((row, index) => (
                <tr key={index}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Render chart using hardcoded data when no file is uploaded */}
      {!tableData && <HighchartsReact highcharts={Highcharts} options={hardcodedChartOptions} />}
    </div>
  );
}

export default Tab1;
