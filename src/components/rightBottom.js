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
                  title: '数据纯属虚构',
                  subtext: '数据纯属虚构',
              },
          }
      },
      methods: {
          init() {
              //基于准备好的dom，初始化echarts实例
              this.rightBottom = echarts.init(document.getElementById('rightBottom'));
              return this;
          },
          update() {
        	  /**
        	   * desc  line
        	   */
        	  if (this.rightBottom === null) {
                  this.init();
              }
        	  var myData = ['机电', '化工', '五金', '电子', '农产', '家用电器', '园林产品', '食品', '医疗'];
        	  var databeast = {
        	      1: [389, 259, 262, 324, 232, 176, 196, 214, 133],
        	      2: [111, 315, 139, 375, 204, 352, 163, 258, 385],
        	      3: [227, 210, 328, 292, 241, 110, 130, 185, 392],
        	      4: [100, 350, 300, 250, 200, 150, 100, 150, 200],
        	      5: [280, 128, 255, 254, 313, 143, 360, 343, 338],
        	      6: [121, 388, 233, 309, 133, 308, 297, 283, 349],
        	      7: [200, 350, 300, 250, 200, 150, 100, 150, 200],
        	      8: [380, 129, 173, 101, 310, 393, 386, 296, 366],
        	      9: [363, 396, 388, 108, 325, 120, 180, 292, 200],
        	      10: [300, 350, 300, 250, 200, 150, 100, 150, 200],
        	      11: [100, 350, 300, 250, 200, 150, 100, 150, 200],
        	      12: [280, 128, 255, 254, 313, 143, 360, 343, 338],

        	  };
        	  var databeauty = {
        	      1: [121, 388, 233, 309, 133, 308, 297, 283, 349],
        	      2: [200, 350, 300, 250, 200, 150, 100, 150, 200],
        	      3: [380, 129, 173, 101, 310, 393, 386, 296, 366],
        	      4: [363, 396, 388, 108, 325, 120, 180, 292, 200],
        	      5: [300, 350, 300, 250, 200, 150, 100, 150, 200],
        	      6: [100, 350, 300, 250, 200, 150, 100, 150, 200],
        	      7: [280, 128, 255, 254, 313, 143, 360, 343, 338],
        	      8: [389, 259, 262, 324, 232, 176, 196, 214, 133],
        	      9: [111, 315, 139, 375, 204, 352, 163, 258, 385],
        	      10: [227, 210, 328, 292, 241, 110, 130, 185, 392],
        	      11: [100, 350, 300, 250, 200, 150, 100, 150, 200],
        	      12: [280, 128, 255, 254, 313, 143, 360, 343, 338],

        	  };
        	  var timeLineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        	var   option = {
        	      baseOption: {
        	          backgroundColor: '#0C397A',
        	          timeline: {
        	              show: true,
        	              axisType: 'category',
        	              tooltip: {
        	                  show: true,
        	                  formatter: function(params) {
        	                      console.log(params);
        	                      return params.name + '月份数据统计';
        	                  }
        	              },
        	              autoPlay: true,
        	              currentIndex: 6,
        	              playInterval: 1000,
        	              label: {
        	                  normal: {
        	                      show: true,
        	                      interval: 'auto',
        	                      formatter: '{value}月',
        	                  },
        	              },
        	              data: [],
        	          },
        	          title: {
        	              textStyle: {
        	                  color: '#fff',
        	                  fontSize: 16,
        	              },
        	              subtext: '',
        	          },
        	          legend: {
        	              data: ['进口', '出口'],
        	              top: 4,
        	              right: '30%',
        	              textStyle: {
        	                  color: '#fff',
        	              },
        	          },
        	          tooltip: {
        	              show: true,
        	              trigger: 'axis',
        	              formatter: '{b}<br/>{a}: {c}人',
        	              axisPointer: {
        	                  type: 'shadow',
        	              }
        	          },
        	          
        	          toolbox:{
        	        	  
        	          },
        	          
        	          grid: [{
        	              show: false,
        	              left: '4%',
        	              top: 60,
        	              bottom: 60,
        	              containLabel: true,
        	              width: '46%',
        	          }, {
        	              show: false,
        	              left: '50.5%',
        	              top: 80,
        	              bottom: 60,
        	              width: '0%',
        	          }, {
        	              show: false,
        	              right: '4%',
        	              top: 60,
        	              bottom: 60,
        	              containLabel: true,
        	              width: '46%',
        	          }, ],

        	          xAxis: [
        	              {
        	              type: 'value',
        	              inverse: true,
        	              axisLine: {
        	                  show: false,
        	              },
        	              axisTick: {
        	                  show: false,
        	              },
        	              position: 'top',
        	              axisLabel: {
        	                  show: true,
        	                  textStyle: {
        	                      color: '#B2B2B2',
        	                      fontSize: 12,
        	                  },
        	              },
        	              splitLine: {
        	                  show: true,
        	                  lineStyle: {
        	                      color: '#1F2022',
        	                      width: 1,
        	                      type: 'solid',
        	                  },
        	              },
        	          }, {
        	              gridIndex: 1,
        	              show: false,
        	          }, {
        	              gridIndex: 2,
        	              type: 'value',
        	              axisLine: {
        	                  show: false,
        	              },
        	              axisTick: {
        	                  show: false,
        	              },
        	              position: 'top',
        	              axisLabel: {
        	                  show: true,
        	                  textStyle: {
        	                      color: '#B2B2B2',
        	                      fontSize: 12,
        	                  },
        	              },
        	              splitLine: {
        	                  show: true,
        	                  lineStyle: {
        	                      color: '#1F2022',
        	                      width: 1,
        	                      type: 'solid',
        	                  },
        	              },
        	          }, ],
        	          yAxis: [{
        	              type: 'category',
        	              inverse: true,
        	              position: 'right',
        	              axisLine: {
        	                  show: false
        	              },
        	              axisTick: {
        	                  show: false
        	              },
        	              axisLabel: {
        	                  show: false,
        	                  margin: 8,
        	                  textStyle: {
        	                      color: '#9D9EA0',
        	                      fontSize: 12,
        	                  },

        	              },
        	              data: myData,
        	          }, {
        	              gridIndex: 1,
        	              type: 'category',
        	              inverse: true,
        	              position: 'left',
        	              axisLine: {
        	                  show: false
        	              },
        	              axisTick: {
        	                  show: false
        	              },
        	              axisLabel: {
        	                  show: true,
        	                  textStyle: {
        	                      color: '#9D9EA0',
        	                      fontSize: 12,
        	                  },

        	              },
        	              data: myData.map(function(value) {
        	                  return {
        	                      value: value,
        	                      textStyle: {
        	                          align: 'center',
        	                      }
        	                  }
        	              }),
        	          }, {
        	              gridIndex: 2,
        	              type: 'category',
        	              inverse: true,
        	              position: 'left',
        	              axisLine: {
        	                  show: false
        	              },
        	              axisTick: {
        	                  show: false
        	              },
        	              axisLabel: {
        	                  show: false,
        	                  textStyle: {
        	                      color: '#9D9EA0',
        	                      fontSize: 12,
        	                  },

        	              },
        	              data: myData,
        	          }, ],
        	          series: [],

        	      },

        	      options: [],


        	  };

        	  for (var i = 0; i < timeLineData.length; i++) {
        	      option.baseOption.timeline.data.push(timeLineData[i]);
        	      option.options.push({
        	          title: {
        	              text: '2017年全国' + timeLineData[i] + '月份外贸数据',
        	          },
        	          series: [{
        	                  name: '进口',
        	                  type: 'bar',
        	                  barGap: 20,
        	                  barWidth: 20,
        	                  label: {
        	                      normal: {
        	                          show: false,
        	                      },
        	                      emphasis: {
        	                          show: true,
        	                          position: 'left',
        	                          offset: [0, 0],
        	                          textStyle: {
        	                              color: '#fff',
        	                              fontSize: 14,
        	                          },
        	                      },
        	                  },
        	                  itemStyle: {
        	                      normal: {
        	                          color: '#659F83',
        	                      },
        	                      emphasis: {
        	                          color: '#08C7AE',
        	                      },
        	                  },
        	                  data: databeast[timeLineData[i]],
        	              },


        	              {
        	                  name: '出口',
        	                  type: 'bar',
        	                  barGap: 20,
        	                  barWidth: 20,
        	                  xAxisIndex: 2,
        	                  yAxisIndex: 2,
        	                  label: {
        	                      normal: {
        	                          show: false,
        	                      },
        	                      emphasis: {
        	                          show: true,
        	                          position: 'right',
        	                          offset: [0, 0],
        	                          textStyle: {
        	                              color: '#fff',
        	                              fontSize: 14,
        	                          },
        	                      },
        	                  },
        	                  itemStyle: {
        	                      normal: {
        	                          color: '#F68989',
        	                      },
        	                      emphasis: {
        	                          color: '#F94646',
        	                      },
        	                  },
        	                  data: databeauty[timeLineData[i]],
        	              }
        	          ]
        	      });
        	  }
        	  this.rightBottom.setOption(option);
        	  /**
        	   * line end
        	   */
          }
      },
      mounted: function() {
          this.init()
              .update();
      }
}