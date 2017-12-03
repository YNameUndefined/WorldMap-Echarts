 import echarts from 'echarts';
 require('echarts/lib/chart/map')
  require('echarts/map/js/province/zhejiang')
  require('echarts/map/js/china')
  require('echarts/map/js/china-contour')
  require('echarts/map/js/world')
  require('echarts/lib/chart/pie')
  require('echarts/lib/chart/line')
  require('echarts/lib/visual/VisualMapping')
  
  require('echarts/lib/visual/visualSolution')
  require('echarts/lib/visual/visualDefault')
  require('echarts/lib/visual/dataColor')
  require('echarts/lib/visual/seriesColor')
  require('echarts/lib/visual/seriesColor')
  require('echarts/lib/visual/seriesColor')
  
 
 export default  {
      data() {
          return {
              chartDom: null,
              data: {
                  title: 'IT趋势',
                  subtext: '子标题描述信息',
              },
          }
      },
      /**
       * @desc 组件注册
       */
      components:{
      },
      methods: {
    	  mapButton(){
    		this.$router.push("./goalMap");  
    	  },
    	  maptobrowser(){
    		  this.$router.push("./browser");
    	  },
          init() {
              //基于准备好的dom，初始化echarts实例
              this.mapechart = echarts.init(document.getElementById('mapechart'));
              return this;
          },
          update() {
        	  /**
        	   * desc map
        	   */
        	  if (this.mapechart === null) {
                  this.init();
              }
        	  /**
        	   * @desc 数据管理 
        	   */
        	  var data = [{
        		    "time": 1980,
        		    "data": [{
        		        "name": "台湾",
        		        "value": [633.76, 12.28, "台湾"]
        		    }, {
        		        "name": "香港",
        		        "value": [432.47, 8.38, "香港"]
        		    }, {
        		        "name": "江苏",
        		        "value": [319.80, 6.20, "江苏"]
        		    }, {
        		        "name": "上海",
        		        "value": [311.89, 6.05, "上海"]
        		    }, {
        		        "name": "山东",
        		        "value": [292.13, 5.66, "山东"]
        		    }, {
        		        "name": "辽宁",
        		        "value": [281, 5.45, "辽宁"]
        		    }, {
        		        "name": "广东",
        		        "value": [249.65, 4.84, "广东"]
        		    }, {
        		        "name": "四川",
        		        "value": [229.31, 4.44, "四川"]
        		    }, {
        		        "name": "河南",
        		        "value": [229.16, 4.44, "河南"]
        		    }, {
        		        "name": "黑龙江",
        		        "value": [221.00, 4.28, "黑龙江"]
        		    }]
        		}, {
        		    "time": 2000,
        		    "data": [{
        		        "name": "台湾",
        		        "value": [27435.15, 19.47, "台湾"]
        		    }, {
        		        "name": "香港",
        		        "value": [14201.59, 10.08, "香港"]
        		    }, {
        		        "name": "广东",
        		        "value": [10741.25, 7.62, "广东"]
        		    }, {
        		        "name": "江苏",
        		        "value": [8553.69, 6.07, "江苏"]
        		    }, {
        		        "name": "山东",
        		        "value": [8337.47, 5.92, "山东"]
        		    }, {
        		        "name": "浙江",
        		        "value": [6141.03, 4.36, "浙江"]
        		    }, {
        		        "name": "河南",
        		        "value": [5052.99, 3.59, "河南"]
        		    }, {
        		        "name": "河北",
        		        "value": [5043.96, 3.58, "河北"]
        		    }, {
        		        "name": "上海",
        		        "value": [4771.17, 3.39, "上海"]
        		    }, {
        		        "name": "辽宁",
        		        "value": [4669.10, 3.31, "辽宁"]
        		    }]
        		},{
        		    "time": 2005,
        		    "data": [{
        		        "name": "台湾",
        		        "value": [30792.89, 12.52, "台湾"]
        		    }, {
        		        "name": "广东",
        		        "value": [22527.37, 9.16, "广东"]
        		    }, {
        		        "name": "江苏",
        		        "value": [18598.69, 7.56, "江苏"]
        		    }, {
        		        "name": "山东",
        		        "value": [18366.87, 7.47, "山东"]
        		    }, {
        		        "name": "香港",
        		        "value": [14869.68, 6.05, "香港"]
        		    }, {
        		        "name": "浙江",
        		        "value": [13417.68, 5.46, "浙江"]
        		    }, {
        		        "name": "河南",
        		        "value": [10587.42, 4.30, "河南"]
        		    }, {
        		        "name": "河北",
        		        "value": [10043.42, 4.08, "河北"]
        		    }, {
        		        "name": "上海",
        		        "value": [9247.66, 3.76, "上海"]
        		    }, {
        		        "name": "辽宁",
        		        "value": [8047.3, 3.27, "辽宁"]
        		    }]
        		} ,{
        		    "time": 2010,
        		    "data": [{
        		        "name": "广东",
        		        "value": [46036.25, 9.49, "广东"]
        		    }, {
        		        "name": "江苏",
        		        "value": [41425.48, 8.54, "江苏"]
        		    }, {
        		        "name": "山东",
        		        "value": [39169.92, 8.08, "山东"]
        		    }, {
        		        "name": "台湾",
        		        "value": [30205.64, 6.23, "台湾"]
        		    }, {
        		        "name": "浙江",
        		        "value": [27747.65, 5.72, "浙江"]
        		    }, {
        		        "name": "河南",
        		        "value": [23092.36, 4.76, "河南"]
        		    }, {
        		        "name": "河北",
        		        "value": [20394.26, 4.21, "河北"]
        		    }, {
        		        "name": "辽宁",
        		        "value": [18457.3, 3.81, "辽宁"]
        		    }, {
        		        "name": "四川",
        		        "value": [17185.48, 3.54, "四川"]
        		    }, {
        		        "name": "上海",
        		        "value": [17165.98, 3.54, "上海"]
        		    }]
        		} ,{
        		    "time": 2015,
        		    "data": [{
        		        "name": "广东",
        		        "value": [72812.55, 9.35, "广东"]
        		    }, {
        		        "name": "江苏",
        		        "value": [70116.38, 9, "江苏"]
        		    }, {
        		        "name": "山东",
        		        "value": [63002.3, 8.09, "山东"]
        		    }, {
        		        "name": "浙江",
        		        "value": [42886, 5.51, "浙江"]
        		    }, {
        		        "name": "河南",
        		        "value": [37010.25, 4.75, "河南"]
        		    }, {
        		        "name": "台湾",
        		        "value": [32604.52, 4.19, "台湾"]
        		    }, {
        		        "name": "四川",
        		        "value": [30103.1, 3.87, "四川"]
        		    }, {
        		        "name": "河北",
        		        "value": [29806.1, 3.83, "河北"]
        		    }, {
        		        "name": "湖北",
        		        "value": [29550.19, 3.8, "湖北"]
        		    }, {
        		        "name": "湖南",
        		        "value": [29047.20, 3.73, "湖南"]
        		    }]
        		} ]


        		var option = {
        			  /**
        			   * desc 基础配置
        			   */
        		    backgroundColor: 'rgba(40,126,255,0.5)',
        		    baseOption: {
        		        animationDurationUpdate: 1000,
        		        animationEasingUpdate: 'quinticInOut',
        		        timeline: {
        		            axisType: 'category',
        		            orient: 'vertical',
        		            autoPlay: true,
        		            inverse: true,
        		            playInterval: 5000,
        		            left: null,
        		            right: 5,
        		            top: 20,
        		            bottom: 20,
        		            width: 46,
        		            height: null,
        		            label: {
        		                normal: {
        		                    textStyle: {
        		                        color: '#ddd'
        		                    }
        		                },
        		                emphasis: {
        		                    textStyle: {
        		                        color: '#fff'
        		                    }
        		                }
        		            },
        		            symbol: 'none',
        		            lineStyle: {
        		                color: '#555'
        		            },
        		            checkpointStyle: {
        		                color: '#bbb',
        		                borderColor: '#777',
        		                borderWidth: 1
        		            },
        		            controlStyle: {
        		                showNextBtn: false,
        		                showPrevBtn: false,
        		                normal: {
        		                    color: '#666',
        		                    borderColor: '#666'
        		                },
        		                emphasis: {
        		                    color: '#aaa',
        		                    borderColor: '#aaa'
        		                }
        		            },
        		            data: data.map(function(ele) {
        		                return ele.time
        		            })
        		        },
        		        backgroundColor: 'rgba(40,126,255,0.5)',
        		        /**
        		         * 三个图表的title管理（包括位置）
        		         */
        		        title: [{
        		            text: '2017全国IT行业趋势发展',
        		            left: '60%',
        		            top: "10%",
        		            textStyle: {
        		                fontSize: 25,
        		                color: 'rgba(255,255,255, 0.9)'
        		            }
        		        },{
        		            text: '2017全国IT行业薪酬分布',
        		            left: '6%',
        		            top: "63%",
        		            textStyle: {
        		            	 fontSize: 19,
        		                color: 'rgba(255,255,255, 0.9)'
        		            }
        		        },{
        		            text: '2017全国IT就业比例',
        		            left: '10%',
        		            top: "7%",
        		            textStyle: {
        		                fontSize: 19,
        		                color: 'rgba(255,255,255, 0.9)'
        		            }
        		        }],
        		        tooltip: {
        		            formatter: function(params) {
        		                if ('value' in params.data) {
        		                    return params.data.value[2] + ': ' + params.data.value[0];
        		                }
        		            }
        		        },
        		        grid: {
        		            left: 10,
        		            right: '45%',
        		            top: '70%',
        		            bottom: 5
        		        },
        		        xAxis: {},
        		        yAxis: {},
        		        /**
        		         * desc 插入数据 盒子设置
        		         */
        		        series: [{
        		            id: 'map',
        		            type: 'map',
        		            mapType: 'china',
        		            top: '4%',
        		            bottom: '8%',
        		            left: '40%',
        		            right: '0%',
        		            itemStyle: {
        		                normal: {
        		                    areaColor: '#808080',
        		                    borderColor: '#fff'
        		                },
        		                emphasis: {
        		                    label: {
        		                        show: true
        		                    },
        		                    areaColor: 'rgba(255,255,255, 0.5)'
        		                }
        		            },
        		            data: []
        		        }, {
        		            id: 'bar',
        		            type: 'bar',
        		            tooltip: {
        		            	"trigger": "axis",
        		                show: false
        		            },
        		            grid: {
        		                left: "31%",
        		                right: "0%",
        		                bottom: "3%",
        		                containLabel: true
        		            },
        		            label: {
        		                normal: {
        		                    show: true,
        		                    position: 'right',
        		                    textStyle: {
        		                        color: '#ddd'
        		                    }
        		                }
        		            },
        		            data: []
        		        },{
        		            id: 'pie',
        		            type: 'pie',
        		            radius: ['10%', '30%'],
        		            center: ['15%', '30%'],
        		            //roseType: 'area',
        		            tooltip: {
        		                formatter: '{b} {d}%'
        		            },
        		            data: [],
        		            label: {
        		                normal: {
        		                    textStyle: {
        		                        color: '#ddd'
        		                    }
        		                }
        		            },
        		            labelLine: {
        		                normal: {
        		                    lineStyle: {
        		                        color: '#ddd'
        		                    }
        		                }
        		            },
        		            itemStyle: {
        		                normal: {
        		                    borderColor: 'rgba(0,0,0,0.3)',
        		                    borderSize: 1
        		                }
        		            }
        		        }]
        		    },
        		    options: []
        		}

        		for (var i = 0; i < data.length; i++) {
        		    //计算其余省份GDP
        		    var restPercent = 100;
        		    var restValue = 0;
        		    data[i].data.forEach(function(ele) {
        		        restPercent = restPercent - ele.value[1];
        		    });
        		    restValue = data[i].data[0].value[0] * (restPercent / data[i].data[0].value[1]);
        		    console.log(restPercent);
        		    console.log(restValue);
        		    option.options.push({
        		        visualMap: [{
        		            calculable: true,
        		            dimension: 0,
        		            left: 10,
        		            top: 'center',
        		            itemWidth: 12,
        		            min: data[i].data[9].value[0],
        		            max: data[i].data[0].value[0],
        		            text: ['High', 'Low'],
        		            textStyle: {
        		                color: '#ddd'
        		            },
        		            inRange: {
        		                color: [ '#B894FE', '#271F52', '#FF80C0','#1BDBC2']
        		            }
        		        }],
        		        xAxis: {
        		            type: 'value',
        		            boundaryGap: [0, 0.1],
        		            axisLabel: {
        		                show: false,
        		            },
        		            splitLine: {
        		                show: false
        		            }
        		        },
        		        yAxis: {
        		            type: 'category',
        		            axisLabel: {
        		                show: false,
        		                textStyle: {
        		                    color: '#ddd'
        		                }
        		            },

        		            data: data[i].data.map(function(ele) {
        		                return ele.value[2]
        		            }).reverse()
        		        },
        		        series: [{
        		            id: 'map',
        		            data: data[i].data
        		        }, {
        		            id: 'bar',
        		            label: {
        		                normal: {
        		                    position: 'right',
        		                    formatter: '{b} : {c}'
        		                }
        		            },
        		            data: data[i].data.map(function(ele) {
        		                return ele.value[0]
        		            }).sort(function(a, b) {
        		                return a > b
        		            })
        		        },{
        		            id: 'pie',
        		            data: data[i].data.map(function(ele) {
        		                return {
        		                    name: ele.value[2],
        		                    value: ele.value
        		                }
        		            }).concat({
        		                name: '其他省份',
        		                value: restValue
        		            }),
        		        }]
        		    })
        		}
        	  this.mapechart.setOption(option);
          }
      },
      mounted: function() {
    	  this.mapechart = document.getElementById('mapechart');
    	  this.mapechart.style.height = window.innerHeight + "px";
          this.init()
              .update();
      }
}