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
              this.rightTop = echarts.init(document.getElementById('rightTop'));
              return this;
          },
          update() {
        	  /**
        	   * desc  line
        	   */
        	  if (this.rightTop === null) {
                  this.init();
              }
        	  var category = [];
        	  var dottedBase = +new Date();
        	  var lineData = [];
        	  var barData = [];

        	  for (var i = 0; i < 20; i++) {
        	      var date = new Date(dottedBase += 1000 * 3600 * 24);
        	      category.push([
        	          date.getFullYear(),
        	          date.getMonth() + 1,
        	          date.getDate()
        	      ].join('-'));
        	      var b = Math.random() * 200;
        	      var d = Math.random() * 200;
        	      barData.push(b)
        	      lineData.push(d + b);
        	  }


        	  // option
        	 var option = {
        	      backgroundColor: '#0C397A',
        	      title: {
          	        text: '纽约上证指数（%）',
          	        left: 'center',
          	        textStyle: {
          	            color: '#fff'
          	        }
          	    },
        	      tooltip: {
        	          trigger: 'axis',
        	          top:"10%",
        	          axisPointer: {
        	              type: 'shadow',
        	              label: {
        	                  show: true,
        	                  backgroundColor: '#0C397A'
        	              }
        	          }
        	      },
        	      legend: {
        	          data: ['line', 'bar'],
        	          bottom:10,
        	          textStyle: {
        	              color: '#ccc'
        	          }
        	      },
        	      xAxis: {
        	          data: category,
        	          axisLine: {
        	              lineStyle: {
        	                  color: '#ccc'
        	              }
        	          }
        	      },
        	      yAxis: {
        	          splitLine: {show: false},
        	          axisLine: {
        	              lineStyle: {
        	                  color: '#ccc'
        	              }
        	          }
        	      },
        	      series: [{
        	          name: 'line',
        	          type: 'line',
        	          smooth: true,
        	          showAllSymbol: true,
        	          symbol: 'emptyCircle',
        	          symbolSize: 15,
        	          data: lineData
        	      }, {
        	          name: 'bar',
        	          type: 'bar',
        	          barWidth: 10,
        	          itemStyle: {
        	              normal: {
        	                  barBorderRadius: 5,
        	                  color: new echarts.graphic.LinearGradient(
        	                      0, 0, 0, 1,
        	                      [
        	                          {offset: 0, color: '#14c8d4'},
        	                          {offset: 1, color: '#43eec6'}
        	                      ]
        	                  )
        	              }
        	          },
        	          data: barData
        	      }, {
        	          name: 'line',
        	          type: 'bar',
        	          barGap: '-100%',
        	          barWidth: 10,
        	          itemStyle: {
        	              normal: {
        	                  color: new echarts.graphic.LinearGradient(
        	                      0, 0, 0, 1,
        	                      [
        	                          {offset: 0, color: 'rgba(20,200,212,0.5)'},
        	                          {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
        	                          {offset: 1, color: 'rgba(20,200,212,0)'}
        	                      ]
        	                  )
        	              }
        	          },
        	          z: -12,
        	          data: lineData
        	      }, {
        	          name: 'dotted',
        	          type: 'pictorialBar',
        	          symbol: 'rect',
        	          itemStyle: {
        	              normal: {
        	                  color: '#0f375f'
        	              }
        	          },
        	          symbolRepeat: true,
        	          symbolSize: [12, 4],
        	          symbolMargin: 1,
        	          z: -10,
        	          data: lineData
        	      }]
        	  };
        	  this.rightTop.setOption(option);
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