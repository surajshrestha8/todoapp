import HighCharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SparkLine = ({ data }: any) => {
  const options: HighCharts.Options = {
    chart: {
      backgroundColor: 'white',
      borderWidth: 2,
      margin: [2, 0, 2, 0],
      borderColor: 'white',
      width: 220,
      height: 100,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: '',
    },
    xAxis: {
      title: {
        text: 'Costs',
      },
    },
    legend: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: 'Cost',
      },
      labels: {
        enabled: false,
      },
      startOnTick: false,
      endOnTick: false,
      tickPositions: [],
    },
    tooltip: {
      backgroundColor: 'white',
      borderWidth: 3,
      hideDelay: 2,
      shared: true,
      padding: 8,
      borderColor: '#910000',
      borderRadius: 1,
      pointFormat: '{series.name} has {point.y} {point.x}',
      enabled: false,
    },
    plotOptions: {
      series: {
        animation: true,
        pointStart: 2,
        lineWidth: 1,
        shadow: false,
        states: {
          hover: {
            lineWidth: 1,
            color: 'white',
          },
        },
        marker: {
          radius: 0,
          states: {
            hover: {
              radius: 1,
              fillColor: 'white',
            },
          },
        },
      },
      column: {
        negativeColor: '#910000',
        borderColor: 'black',
      },
    },
    series: [
      {
        name: 'New data',
        type: 'area',
        data: data,
      },
    ],
  };
  return (
    <>
      <div style={{ marginLeft: '50px', marginBottom: '30px' }}>
        <HighchartsReact highcharts={HighCharts} options={options} />
      </div>
    </>
  );
};

export default SparkLine;
