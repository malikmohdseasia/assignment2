import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Import histogram module
import HistogramModule from "highcharts/modules/histogram-bellcurve";


// Initialize the module
HistogramModule(Highcharts); // ✅ This works

const HistogramChart = () => {
  // Sample data
  const data = [1, 2, 2, 3, 3, 3, 4, 4, 5];

  const options = {
    title: {
      text: "Histogram Example",
    },
    xAxis: [
      {
        title: { text: "Data" },
      },
      {
        title: { text: "Histogram" },
        alignTicks: false,
      },
    ],
    yAxis: [
      {
        title: { text: "Frequency" },
      },
    ],
    series: [
      {
        name: "Data",
        type: "scatter",
        data: data,
        visible: false, // hide scatter points if you want only histogram
      },
      {
        name: "Histogram",
        type: "histogram",
        baseSeries: 0, // links to the scatter series index
        zIndex: -1,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HistogramChart;
