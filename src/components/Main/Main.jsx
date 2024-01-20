import './Main.scss';
import { useState, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { url } from '../../utils/constants'
import Button from '@mui/material/Button';
import Answer from '../Answer/Answer';
import Chart from "react-apexcharts";

const Main = () => {

  //Другая реализация
  /*
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);
  const [newClicked, setNewClicked] = useState(Date.now());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 100);
    }, 100);
    return () => clearInterval(timer);
  });
  
  useEffect(() => {
    if (count) {
      if ((Date.now() > (newClicked + 1000))) {
        setIsAllow(false);
      }
      else {
        setIsAllow(true);
      }
    }
  }, [seconds])
  
  //Обработчик клика на кнопку
  function handleButtonClick() {
    setCount(count + 1);
    setNewClicked(Date.now());
  }
  */

  const buttonRef = useRef(0);
  const [count, setCount] = useState(0);
  const data = useFetch(url, count);
 

  const [options, setOptions] = useState({
    options: {
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
      legend: {
        show: true,
        fontSize: '20px',
        position: 'bottom',
        formatter: function(seriesName, opts) {
          const sum = opts.w.globals.series.reduce((sum, item) => { return sum + item })
          return [seriesName, " - ", opts.w.globals.series[opts.seriesIndex]/sum*100, " %"]
      }
      },
      colors: ['#3ec93c', '#3ec23e', '#4ec23e', '#5ec23e'],
      plotOptions: {        
        radialBar: {
            hollow: {
                size: '40%',
            },            
            dataLabels: {
              show: true,
              name: {
                show: true,
                fontSize: '28px',
                fontWeight: 600,
                color: undefined,
                //offsetY: -20
              },
              value: {
                show: true,
                fontSize: '28px',
                fontWeight: 400,
                color: undefined,
                
                formatter: function (val) {
                  return val
                },
                
                //offsetY: -10
                
              },
              total: {
                show: true,
                label: 'TOTAL',
                color: '#373d3f',
                fontSize: '20px',
                fontFamily: undefined,
                fontWeight: 600,
                /*
                formatter: function (w) {
                  return w.config.series.map((a, index) => {
                    return w.config.labels[index] + " " + a + '%' 

                })},
                */
                formatter: function (w) {
                  return w.config.series.reduce((sum, item) => {
                    return sum + item 
                  })
                },
                
                
                
            }
            }
        },
      },
    },
    series: [44, 55, 67, 83],
  }
  )

  const [options1, setOptions1] = useState({
    options:{
      labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
      legend: {
        show: true,
        //floating: true,
        fontSize: '14px',
        position: 'left',
        offsetX: 160,
        //offsetY: 15,
        labels: {
          //useSeriesColors: true,
        },
        markers: {
          size: 3
        },
        formatter: function(seriesName, opts) {
          const sum = opts.w.globals.series.reduce((sum, item) => { return sum + item })
          return [seriesName, " - ", Math.trunc(opts.w.globals.series[opts.seriesIndex]/sum*100), " %"]
        },
        itemMargin: {
          vertical: 0
        }
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],    
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 15,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              show: true,
              formatter: function (val) {
                return val
              },
            },
            total: {
              show: true,
              formatter: function (w) {
                return w.config.series.reduce((sum, item) => {
                  return sum + item 
                })
              },
            }
          }
        }
      }, 
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
              show: false
          }
        }
      }],
  },
    series: [76, 67, 61, 90],
  });

  const [options2, setOptions2] = useState({
    options:{
      chart: {
        //background: transparent,
        height: 400,
        //redrawOnParentResize: true,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        },
        type: "line"
      },
      plotOptions: {
        bar: {
          columnWidth: 10,
        },
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [0,1]
      },
      stroke: {
        width: [1, 1, 4, 4],
        curve: 'straight',
      },
      title: {
        text: 'XYZ - Stock Analysis (2009 - 2016)',
        align: 'left',
        offsetX: 110
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      },
      yaxis: [
        {
          show: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#000000'
          },
          labels: {
            style: {
              colors: '#000000',
            }
          },
          title: {
            text: "Income (thousand crores)",
            style: {
              color: '#008FFB',
            }
          },
          tooltip: {
            enabled: false
          }
        },
        {
          seriesName: 'Income',
          show: true,
          opposite: false,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: false,
            color: '#00E396'
          },
          labels: {
            show: false,
            style: {
              colors: '#00E396',
            }
          },
          title: {
            text: "Operating Cashflow (thousand crores)",
            style: {
              color: '#00E396',
            }
          },
        },
        {
          seriesName: 'Revenue',
          show: true,
          opposite: false,
          max: 8,
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
            color: '#FEB019'
          },
          labels: {
            style: {
              colors: '#FEB019',
            },
          },
          title: {
            text: "Revenue (thousand crores)",
            style: {
              color: '#FEB019',
            }
          }
        },
        {
          seriesName: 'test',
          show: true,
          max: 8,
          opposite: false,
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
            color: '#000000'
          },
          labels: {
            show: false,
            style: {
              colors: '#000000',
            },
          },
          title: {
            text: "Revenue (thousand crores)",
            style: {
              color: '#000000',
            }
          }
        }
      ],
      tooltip: {
        fixed: {
          enabled: false,
          position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        },
      },    
    },
    series: [{
      name: 'Income',
      type: 'column',
      data: [1, 2, 3, 4, 4, 3, 2, 1]
    }, {
      name: 'Cashflow',
      type: 'column',
      data: [1, 2, 3, 4, 4, 3, 2, 1]
    }, {
      name: 'Revenue',
      type: 'line',
      data: [1/2, 2/2, 3/2, 4/2, 4/2, 3/2, 2/2, 1/2]
    }, {
      name: 'test',
      type: 'line',
      data: [2, 4, 6, 8, 8, 6, 4, 2]
    }]
  });

/*
  function debounce(callback: () => void, delay: number) {
    let timeout: number;
    return function () {
      //вызывается при каждом клике
      buttonRef.current += 1;
      clearTimeout(timeout);
      timeout = window.setTimeout(callback, delay);
    }
  }

  const debouncedButtonClick = debounce(() => setCount(buttonRef.current), 1000);
*/
  return (
    <main className="content">      
      <Button 
        variant="contained"
        color="warning"
        //onClick={debouncedButtonClick}
        disabled={data.loading}
      >
        {data.loading ? "Загрузка данных" : "Кликнуть"}
      </Button>
      <p className='title'>Кликнули {count} раз</p>
      <Answer loading={data.loading} data={data.data} error={data.error}/>
            <Chart
              options={options.options}
              series={options.series}
              type="radialBar"
              width="500"
            />
            {/*
            <Chart
              options={options1.options}
              series={options1.series}
              type="radialBar"
              width="500"
            />
  */}     
            <Chart
              options={options2.options}
              series={options2.series}
              type="bar"
              width="500"
            />
    </main>
  );
}

export default Main;
