 import echarts from 'echarts';
 require('echarts/lib/chart/pie')
 require('echarts/lib/chart/gauge.js')
 require('echarts/lib/chart/gauge/GaugeSeries.js')
 require('echarts/lib/chart/gauge/GaugeView.js')
 require('echarts/lib/chart/gauge/PointerPath.js')
  require('echarts/lib/chart/graph.js')
 require('echarts/lib/chart/graph/adjustEdge')
  require('echarts/lib/chart/graph/backwardCompat')
  require('echarts/lib/chart/graph/categoryFilter')
  require('echarts/lib/chart/graph/categoryVisual')
  require('echarts/lib/chart/graph/graphAction')
  require('echarts/lib/chart/graph/GraphSeries')
  require('echarts/lib/chart/graph/GraphView')
  require('echarts/lib/chart/graph/simpleLayout')
 require('echarts/lib/chart/graph/simpleLayoutHelper')
 require('echarts/lib/chart/graph/createView')
  require('echarts/lib/chart/graph/edgeVisual')
   require('echarts/lib/chart/graph/adjustEdge')
         
         
 export default  {
      data() {
          return {
              chartDom: null,
              data: {
                  title: '垂直方向柱状标题',
                  subtext: '子标题描述信息',
              },
          }
      },
      methods: {
          init() {
              //基于准备好的dom，初始化echarts实例
              this.leftBottom = echarts.init(document.getElementById('leftBottom'));
              return this;
          },
          update() {
        	  /**
        	   * desc  line
        	   */
        	  if (this.leftBottom === null) {
                  this.init();
              }
        	  var rocket = 'path://M-244.396,44.399c0,0,0.47-2.931-2.427-6.512c2.819-8.221,3.21-15.709,3.21-15.709s5.795,1.383,5.795,7.325C-237.818,39.679-244.396,44.399-244.396,44.399z M-260.371,40.827c0,0-3.881-12.946-3.881-18.319c0-2.416,0.262-4.566,0.669-6.517h17.684c0.411,1.952,0.675,4.104,0.675,6.519c0,5.291-3.87,18.317-3.87,18.317H-260.371z M-254.745,18.951c-1.99,0-3.603,1.676-3.603,3.744c0,2.068,1.612,3.744,3.603,3.744c1.988,0,3.602-1.676,3.602-3.744S-252.757,18.951-254.745,18.951z M-255.521,2.228v-5.098h1.402v4.969c1.603,1.213,5.941,5.069,7.901,12.5h-17.05C-261.373,7.373-257.245,3.558-255.521,2.228zM-265.07,44.399c0,0-6.577-4.721-6.577-14.896c0-5.942,5.794-7.325,5.794-7.325s0.393,7.488,3.211,15.708C-265.539,41.469-265.07,44.399-265.07,44.399z M-252.36,45.15l-1.176-1.22L-254.789,48l-1.487-4.069l-1.019,2.116l-1.488-3.826h8.067L-252.36,45.15z';
        	  var _line = 'path://M0.626,200V0H0.374v200C0.462,200,0.551,200,0.626,200z';

        	  var arr = [];
        	  var r = 100;
        	  for (var i = 0; i < 1000; i++) {
        	      var rad = 2 * Math.PI / 1000 * i;
        	      var x = Math.cos(rad) * r + 500;
        	      var y = Math.sin(rad) * r + 500;

        	      arr.push([x, y]);
        	  }

        	  var arr2 = [];
        	  for (var i = 500; i < 1000; i++) {
        	      var rad = 2 * Math.PI / 1000 * i;
        	      var x = Math.cos(rad) * r + 500;
        	      var y = Math.sin(rad) * r + 500;

        	      arr2.push([x, y]);
        	  }
        	  for (var i = 0; i < 500; i++) {
        	      var rad = 2 * Math.PI / 1000 * i;
        	      var x = Math.cos(rad) * r + 500;
        	      var y = Math.sin(rad) * r + 500;

        	      arr2.push([x, y]);
        	  }


        	  var v1dom = document.getElementById("chart-panel");
        	  // v1dom.style.width = '500px';
        	  // v1dom.style.height = '500px';
        	  var v1 = echarts.init(v1dom);
        	  v1.resize();
        	 var  dataBJ = [

        	      [134, 96, 165, 41, 55],

        	  ];
        	var   indicatorData = [{
        	      name: '响应时间',
        	      max: 300
        	  }, {
        	      name: '消耗流量',
        	      max: 300
        	  }, {
        	      name: '卡顿率',
        	      max: 300
        	  }, {
        	      name: '错误率',
        	      max: 300
        	  }, {
        	      name: '崩溃率',
        	      max: 300
        	  }];

        	  var rotate = 45;
        	  var width = 4;
        	 var option = {
        	      backgroundColor: '#0C397A',
        	      title: {
        	          text: '45',
        	          x: 'center',
        	          y: 'center',
        	          textStyle: {
        	              fontWeight: 'bold',
        	              color: "#fff",
        	              fontSize: 80
        	          },
        	          zlevel: 21
        	      },
        	      legend: {
        	          bottom: 0,
        	          orient: 'horizontal',
        	          itemWidth: 30,
        	          itemHeight: 20,

        	          data: [{
        	              name: '19-35岁',
        	              icon: 'circle',
        	              textStyle: {
        	                  color: "#fc20ff"
        	              }
        	          }]
        	      },
        	      tooltip: {},
        	      xAxis: {

        	          max: 1000,
        	          min: 0,
        	          interval: 100,
        	          show: false,
        	          silent: true

        	      },
        	      yAxis: {

        	          max: 1000,
        	          min: 0,
        	          interval: 100,
        	          show: false,
        	          silent: true
        	      },
        	      radar: {
        	          center: ['50%', '50%'],
        	          indicator: indicatorData,
        	          radius: '65%',
        	          splitNumber: 1,
        	          shape: 'circle',
        	          name: {
        	              textStyle: {
        	                  color: '#fff',
        	                  fontSize: 18,
        	                  fontFamily: "Microsoft YaHei"
        	              },

        	              padding: [8, 8, 8, 8]
        	          },
        	          splitLine: {

        	              lineStyle: {
        	                  color: '#4f8bbe',
        	                  opacity: 0.5,
        	                  type: 'dotted'
        	              }
        	          },
        	          splitArea: {
        	              show: true,
        	              areaStyle: {
        	                  color: '#0d6dba',
        	                  opacity: 0
        	              }
        	          },
        	          axisLine: {
        	              show: true,
        	              lineStyle: {
        	                  color: '#4f8bbe',
        	                  opacity: 0.5,
        	                  type: 'dotted'
        	              }
        	          },
        	          axisTick: {
        	              show: true
        	          },
        	          axisLabel: {
        	              show: true,
        	              formatter: function(value, index) {

        	                  return value;
        	              }
        	          },
        	          zlevel: 20
        	      },
        	      series: [

        	          // {
        	          //     name: '成绩单',
        	          //     type: 'radar',
        	          //     data: [
        	          //         {
        	          //             value: dataBJ[0],
        	          //             name: '张三',
        	          //             label: {
        	          //                 normal: {
        	          //                     show: true,
        	          //                     formatter:function(params) {
        	          //                         return params.value;
        	          //                     }
        	          //                 }
        	          //             }
        	          //         }
        	          //     ]
        	          // },


        	          {
        	              name: '左下红弧',
        	              type: 'gauge',
        	              radius: '99%',
        	              startAngle: -160,
        	              endAngle: -170,
        	              zlevel: 22,
        	              axisLine: {
        	                  lineStyle: {
        	                      color: [
        	                          [0.2, '#d70029'],
        	                          [1, '#d70029']
        	                      ],
        	                      width: 4,
        	                      shadowColor: '#d70029',
        	                      shadowOffsetX: 0,
        	                      shadowOffsetY: -12,
        	                      shadowBlur: 120,
        	                      opacity: 1,
        	                  }

        	              },
        	              splitLine: {
        	                  show: false,
        	              },
        	              axisLabel: {
        	                  show: false,
        	              },
        	              axisTick: {
        	                  show: false,
        	              },
        	              detail: {
        	                  show: false
        	              }
        	          },


        	          {
        	              name: '右上红弧',
        	              type: 'gauge',
        	              radius: '99%',
        	              startAngle: -340,
        	              endAngle: -350,
        	              zlevel: 22,
        	              axisLine: {
        	                  lineStyle: {
        	                      color: [
        	                          [0.2, '#d70029'],
        	                          [1, '#d70029']
        	                      ],
        	                      width: 4,
        	                      shadowColor: '#d70029',
        	                      shadowOffsetX: 0,
        	                      shadowOffsetY: -12,
        	                      shadowBlur: 120,
        	                      opacity: 1,
        	                  }

        	              },
        	              splitLine: {
        	                  show: false,
        	              },
        	              axisLabel: {
        	                  show: false,
        	              },
        	              axisTick: {
        	                  show: false,
        	              },
        	              detail: {
        	                  show: false
        	              }
        	          },


        	          {
        	              name: '右外圈',
        	              type: 'gauge',
        	              radius: '99%',
        	              startAngle: -320,
        	              endAngle: -400,
        	              axisLine: {
        	                  lineStyle: {
        	                      color: [
        	                          [0.2, '#0e313f'],
        	                          [0.8, '#0e313f'],
        	                          [1, '#0e313f']
        	                      ],
        	                      width: 4,
        	                      // shadowColor: '#d70029',
        	                      shadowOffsetX: 0,
        	                      shadowOffsetY: -12,
        	                      shadowBlur: 120,
        	                      opacity: 1,
        	                  }

        	              },
        	              splitLine: {
        	                  show: false,
        	              },
        	              axisLabel: {
        	                  show: false,
        	              },
        	              axisTick: {
        	                  show: false,
        	              },
        	              detail: {
        	                  show: false
        	              }
        	          },

        	          {
        	              name: '左外圈',
        	              type: 'gauge',
        	              radius: '99%',
        	              startAngle: -140,
        	              endAngle: -220,
        	              axisLine: {
        	                  lineStyle: {
        	                      color: [
        	                          [0.2, '#0e313f'],
        	                          [0.8, '#0e313f'],
        	                          [1, '#0e313f']
        	                      ],
        	                      width: 4,
        	                      // shadowColor: '#d70029',
        	                      shadowOffsetX: 0,
        	                      shadowOffsetY: -12,
        	                      shadowBlur: 120,
        	                      opacity: 1,
        	                  }

        	              },
        	              splitLine: {
        	                  show: false,
        	              },
        	              axisLabel: {
        	                  show: false,
        	              },
        	              axisTick: {
        	                  show: false,
        	              },
        	              detail: {
        	                  show: false
        	              }
        	          },

        	          {
        	              name: '蓝色外圈1',
        	              type: 'gauge',
        	              radius: '99%',
        	              startAngle: -85 + rotate,
        	              endAngle: -115 + rotate,
        	              splitNumber: 4,
        	              axisLine: {
        	                  lineStyle: {
        	                      color: [
        	                          [1, '#1e5a67']
        	                      ],
        	                      width: width,


        	                      opacity: 1,
        	                  }

        	              },
        	              splitLine: {
        	                  show: false,
        	              },
        	              axisLabel: {
        	                  show: false,
        	              },
        	              axisTick: {
        	                  show: false,
        	              },
        	              detail: {
        	                  show: false
        	              }
        	          }, {
        	              name: '蓝色外圈2',
        	              type: 'gauge',
        	              radius: '99%',
        	              startAngle: -155 + rotate,
        	              endAngle: 175 + rotate,
        	              splitNumber: 4,
        	              axisLine: {
        	                  lineStyle: {
        	                      color: [
        	                          [1, '#1e5a67']
        	                      ],
        	                      width: width,


        	                      opacity: 1,
        	                  }

        	              },
        	              splitLine: {
        	                  show: false,
        	              },
        	              axisLabel: {
        	                  show: false,
        	              },
        	              axisTick: {
        	                  show: false,
        	              },
        	              detail: {
        	                  show: false
        	              }
        	          }, {
        	              name: '蓝色外圈3',
        	              type: 'gauge',
        	              radius: '99%',
        	              startAngle: 25 + rotate,
        	              endAngle: -5 + rotate,
        	              splitNumber: 4,
        	              axisLine: {
        	                  lineStyle: {
        	                      color: [
        	                          [1, '#1e5a67']
        	                      ],
        	                      width: width,


        	                      opacity: 1,
        	                  }

        	              },
        	              splitLine: {
        	                  show: false,
        	              },
        	              axisLabel: {
        	                  show: false,
        	              },
        	              axisTick: {
        	                  show: false,
        	              },
        	              detail: {
        	                  show: false
        	              }
        	          }, {
        	              name: '蓝色外圈4',
        	              type: 'gauge',
        	              radius: '99%',
        	              startAngle: 95 + rotate,
        	              endAngle: 65 + rotate,
        	              splitNumber: 4,
        	              axisLine: {

        	                  lineStyle: {
        	                      color: [
        	                          [1, '#1e5a67']
        	                      ],
        	                      width: width,
        	                      opacity: 1,
        	                  }

        	              },
        	              splitLine: {
        	                  show: false,
        	              },
        	              axisLabel: {
        	                  show: false,
        	              },
        	              axisTick: {
        	                  show: false,
        	              },
        	              detail: {
        	                  show: false
        	              }
        	          },

        	          {
        	              type: 'pie',

        	              radius: ['72%', '92%'],
        	              label: {
        	                  normal: {
        	                      position: 'center'
        	                  }
        	              },
        	              data: [{
        	                  value: 1000,
        	                  tooltip: {
        	                      show: false
        	                  },
        	                  itemStyle: {
        	                      normal: {
        	                          color: '#4dfaff',
        	                          opacity: 0.2
        	                      }
        	                  }
        	              }]
        	          },

        	          // {
        	          //     coordinateSystem: 'cartesian2d',
        	          //     type: 'lines',
        	          //     polyline: true,
        	          //     zlevel: 1,
        	          //     // symbol: runingline,
        	          //     // symbolSize:20,
        	          //     effect: {
        	          //         show: true,
        	          //         constantSpeed: 200,
        	          //         trailLength: 0.001,
        	          //         symbolSize: 20,
        	          //         // symbol: 'circle',
        	          //         symbol:_line,
        	          //         // symbol: runingline,
        	          //         loop: true
        	          //     },
        	          //     lineStyle: {
        	          //         normal: {
        	          //             color: '#52f7f7',
        	          //             opacity: 0,
        	          //             curveness: 0.9
        	          //         }
        	          //     },
        	          //     data: [{
        	          //         coords: arr
        	          //     }]
        	          // },

        	          // {
        	          //     coordinateSystem: 'cartesian2d',
        	          //     type: 'lines',
        	          //     polyline: true,
        	          //     zlevel: 1,
        	          //     effect: {
        	          //         show: true,
        	          //         constantSpeed: 200,
        	          //         trailLength: 0.1,
        	          //         symbolSize: 20,
        	          //         // symbol: 'circle',
        	          //         symbol: _line,
        	          //         loop: true,
        	          //         color: '#4dfaff'
        	          //     },
        	          //     lineStyle: {
        	          //         normal: {
        	          //             color: '#4dfaff',
        	          //             opacity: 0.8,
        	          //             curveness: 0.5
        	          //         }
        	          //     },
        	          //     data: [{
        	          //         coords: arr2
        	          //     }]
        	          // },


        	          {
        	              name: '雷达线ALL',
        	              type: 'radar',
        	              silent: true,
        	              lineStyle: {
        	                  normal: {
        	                      type: 'dotted',
        	                      color: "#355862",
        	                      width: 2,
        	                      opacity: 1,

        	                  }
        	              },
        	              data: [
        	                  [300, 300, 300, 300, 300]
        	                  // { name:'A',value:300,label:{ normal:{ show:true,zlevel:30 } } },
        	                  // { name:'B',value:300,label:{ normal:{ show:true,zlevel:30 } } },
        	                  // { name:'C',value:300,label:{ normal:{ show:true,zlevel:30 } } },
        	                  // { name:'D',value:300,label:{ normal:{ show:true,zlevel:30 } } },
        	                  // { name:'E',value:300,label:{ normal:{ show:true,zlevel:30 } } },
        	              ],

        	              label: {
        	                  normal: {
        	                      show: true
        	                  }
        	              },

        	              itemStyle: {
        	                  normal: {
        	                      opacity: 0

        	                  }
        	              },
        	              areaStyle: {
        	                  normal: {
        	                      color: '#0d6dba',
        	                      opacity: 0
        	                  }
        	              }
        	          },

        	          {
        	              name: '雷达线2',
        	              type: 'radar',
        	              silent: true,
        	              lineStyle: {
        	                  normal: {
        	                      type: 'dotted',
        	                      color: "#355862",
        	                      width: 2,
        	                      opacity: 0.8,

        	                  }
        	              },
        	              data: [
        	                  // [250, 250, 250, 250, 250]

        	                  {
        	                      name: 'B',
        	                      value: [250, 250, 250, 250, 250],
        	                      symbol: 'circle',
        	                      symbolSize: 1,
        	                      label: {
        	                          normal: {
        	                              show: true
        	                          }
        	                      },
        	                      itemStyle: {
        	                          normal: {
        	                              opacity: 0.85
        	                          }
        	                      }
        	                  }
        	              ],

        	              itemStyle: {
        	                  normal: {
        	                      opacity: 0

        	                  }
        	              },
        	              areaStyle: {
        	                  normal: {
        	                      color: 'rgba(0,0,0,0)',
        	                      opacity: 0
        	                  }
        	              }
        	          },

        	          {
        	              name: '雷达线3',
        	              type: 'radar',
        	              silent: true,
        	              lineStyle: {
        	                  normal: {
        	                      type: 'dotted',
        	                      color: "#355862",
        	                      width: 2,
        	                      opacity: 0.6,

        	                  }
        	              },
        	              data: [
        	                  // [200, 200, 200, 200, 200]

        	                  {
        	                      name: 'A',
        	                      value: [200, 200, 200, 200, 200],
        	                      symbol: 'circle',
        	                      symbolSize: 1,
        	                      label: {
        	                          normal: {
        	                              show: true
        	                          }
        	                      },
        	                      itemStyle: {
        	                          normal: {
        	                              opacity: 0.85
        	                          }
        	                      }
        	                  }
        	              ],

        	              itemStyle: {
        	                  normal: {
        	                      opacity: 0

        	                  }
        	              },
        	              areaStyle: {
        	                  normal: {
        	                      color: 'rgba(0,0,0,0)',
        	                      opacity: 0
        	                  }
        	              }
        	          },

        	          {
        	              name: '雷达线4',
        	              type: 'radar',
        	              silent: true,
        	              lineStyle: {
        	                  normal: {
        	                      type: 'dotted',
        	                      color: "#355862",
        	                      width: 2,
        	                      opacity: 0.4,

        	                  }
        	              },
        	              data: [
        	                  // [150, 150, 150, 150, 150]
        	                  {
        	                      name: 'B',
        	                      value: [150, 150, 150, 150, 150],
        	                      symbol: 'circle',
        	                      symbolSize: 1,
        	                      label: {
        	                          normal: {
        	                              show: true
        	                          }
        	                      },
        	                      itemStyle: {
        	                          normal: {
        	                              opacity: 1
        	                          }
        	                      }
        	                  }
        	              ],

        	              itemStyle: {
        	                  normal: {
        	                      opacity: 0

        	                  }
        	              },
        	              areaStyle: {
        	                  normal: {
        	                      color: 'rgba(0,0,0,0)',
        	                      opacity: 0
        	                  }
        	              }
        	          },

        	          {
        	              name: '雷达线5',
        	              type: 'radar',
        	              silent: true,
        	              lineStyle: {
        	                  normal: {
        	                      type: 'dotted',
        	                      color: "#355862",
        	                      width: 2,
        	                      opacity: 0.2,

        	                  },

        	              },
        	              data: [
        	                  // [100, 100, 100, 100, 100]

        	                  {
        	                      name: 'B',
        	                      value: [100, 100, 100, 100, 100],
        	                      symbol: 'circle',
        	                      symbolSize: 1,
        	                      label: {
        	                          normal: {
        	                              show: true
        	                          }
        	                      },
        	                      itemStyle: {
        	                          normal: {
        	                              opacity: 1
        	                          }
        	                      }
        	                  }
        	              ],

        	              itemStyle: {
        	                  normal: {
        	                      opacity: 0

        	                  }
        	              },
        	              areaStyle: {
        	                  normal: {
        	                      color: 'rgba(0,0,0,0)',
        	                      opacity: 0
        	                  }
        	              }
        	          },


        	          {
        	              name: '数据显示',
        	              type: 'radar',
        	              lineStyle: {
        	                  normal: {
        	                      width: 0.1,
        	                      opacity: 0.1
        	                  }
        	              },
        	              data: dataBJ,
        	              symbolSize: 0,
        	              itemStyle: {
        	                  normal: {
        	                      borderColor: '#32565f',
        	                      borderWidth: 4,
        	                  }
        	              },
        	              areaStyle: {
        	                  normal: {
        	                      color: '#ca4a49',
        	                      opacity: 0.85
        	                  }
        	              },
        	              label: {
        	                  normal: {
        	                      show: true,
        	                      position: 'top'
        	                  }
        	              },
        	              zlevel: 21
        	          },




        	          {
        	              name: "仪盘表",
        	              type: "gauge",
        	              // min: 0,
        	              // max: 360,
        	              startAngle: 0,
        	              endAngle: 15,
        	              splitNumber: 5,
        	              radius: '92%',
        	              // radius: ['72%', '92%'],
        	              zlevel: 22,
        	              axisLine: {
        	                  lineStyle: {
        	                      color: [
        	                          [0.1, "#d70029"],
        	                          [1, "#0d2534"]
        	                      ],
        	                      // width: 90,
        	                      opacity: 0
        	                  },
        	              },
        	              axisTick: {
        	                  lineStyle: {
        	                      // color: '#4dfdfe',
        	                      color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
        	                          color: '#4dfdfe',
        	                          offset: 0.9,
        	                      }, {
        	                          color: '#143a49',
        	                          offset: 0.2
        	                      }]),
        	                      width: 2,
        	                      opacity: [
        	                          [0.1, 1],
        	                          [0.5, 0.5],
        	                          [1, 0.1]
        	                      ]
        	                  },

        	                  length: '22%',
        	                  splitNumber: 2
        	              },
        	              pointer: {
        	                  shadowColor: '#fff',
        	                  shadowBlur: 5,
        	                  show: false
        	              },
        	              axisLabel: {
        	                  distance: 10,
        	                  textStyle: {
        	                      color: "#fff"
        	                  },
        	                  show: false,
        	              },
        	              splitLine: {
        	                  "show": false
        	              },
        	              itemStyle: {
        	                  normal: {
        	                      color: "#494f50"
        	                  }
        	              },
        	              detail: {

        	                  show: false
        	              }
        	          },


        	          {
        	              name: "仪盘表",
        	              type: "gauge",
        	              // min: 0,
        	              // max: 360,
        	              startAngle: 180,
        	              endAngle: 195,
        	              splitNumber: 5,
        	              radius: '92%',
        	              // radius: ['72%', '92%'],
        	              zlevel: 22,
        	              axisLine: {
        	                  lineStyle: {
        	                      color: [
        	                          [0.1, "#d70029"],
        	                          [1, "#0d2534"]
        	                      ],
        	                      // width: 90,
        	                      opacity: 0
        	                  },
        	              },
        	              axisTick: {
        	                  lineStyle: {
        	                      // color: '#4dfdfe',
        	                      color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
        	                          color: '#4dfdfe',
        	                          offset: 0.9,
        	                      }, {
        	                          color: '#143a49',
        	                          offset: 0.2
        	                      }]),
        	                      width: 2,
        	                      opacity: [
        	                          [0.1, 1],
        	                          [0.5, 0.5],
        	                          [1, 0.1]
        	                      ]
        	                  },

        	                  length: '22%',
        	                  splitNumber: 2
        	              },
        	              pointer: {
        	                  shadowColor: '#fff',
        	                  shadowBlur: 5,
        	                  show: false
        	              },
        	              axisLabel: {
        	                  distance: 10,
        	                  textStyle: {
        	                      color: "#fff"
        	                  },
        	                  show: false,
        	              },
        	              splitLine: {
        	                  "show": false
        	              },
        	              itemStyle: {
        	                  normal: {
        	                      color: "#494f50"
        	                  }
        	              },
        	              detail: {

        	                  show: false
        	              }
        	          }

        	      ]
        	  };
        	  v1.setOption(option);





        	  setInterval(function() {

        	      var series1 = option.series[option.series.length - 2];
        	      series1.startAngle += 10;
        	      series1.endAngle = series1.startAngle + 15;

        	      var series2 = option.series[option.series.length - 1];
        	      series2.startAngle += 10;
        	      series2.endAngle = series2.startAngle + 15;


        	      v1.setOption(option);
        	  }, 100);
        	  /**
        	   * leftBottom end
        	   */
          }
      },
      mounted: function() {
          this.init()
              .update();
      }
}