/**
 * @desc browser 只有航班风险监控这个模块组件
 * 其他的模块组件基于 import 导入
 * 使用components 钩子函数 注册
 * 页面以组件名的标签形式写入
 * 数据修改 在表格实例化 title  标题
 * data 实例化的数据修改
 */

import echarts from 'echarts';
 require('echarts/lib/chart/graph')
 require('echarts/lib/chart/pie')
 import leftAndmidel from './leftAndmidel.vue'
 import leftBottom from './leftBottom.vue'
 import rightTop from './rightTop.vue'
 import rightBottom from './rightBottom.vue'
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
      components:{
    	  leftAndmidel,
    	  leftBottom,
    	  rightTop,
    	  rightBottom
      },
      methods: {
    	  browserButton(){
    		  this.$router.push("./map");  
    	  },
          init() {
              //基于准备好的dom，初始化echarts实例
              this.leftTop = echarts.init(document.getElementById('leftTop'));
              return this;
          },
          update() {
              if (this.leftTop === null) {
                  this.init();
              }
              this.leftTop.setOption({
            	    backgroundColor: "#0C397A",
            	    color: ['#ffd285', '#ff733f', '#ec4863'],

            	    title: [{
            	        text: '航班风险监控中心',
            	        left: '1%',
            	        top: '6%',
            	        textStyle: {
            	            color: '#fff'
            	        }
            	    }, {
            	        text: '风险来源',
            	        left: '83%',
            	        top: '6%',
            	        textAlign: 'center',
            	        textStyle: {
            	            color: '#fff'
            	        }
            	    }],
            	    tooltip: {
            	        trigger: 'axis'
            	    },
            	    legend: {
            	        x: 300,
            	        top: '7%',
            	        left:"30%",
            	        textStyle: {
            	            color: '#ffd285',
            	        },
            	        data: ['悉尼', '北美', '南美']
            	    },
            	    grid: {
            	        left: '1%',
            	        right: '35%',
            	        top: '16%',
            	        bottom: '6%',
            	        containLabel: true
            	    },
            	    toolbox: {
            	        "show": false,
            	        feature: {
            	            saveAsImage: {}
            	        }
            	    },
            	    xAxis: {
            	        type: 'category',
            	        "axisLine": {
            	            lineStyle: {
            	                color: '#FF4500'
            	            }
            	        },
            	        "axisTick": {
            	            "show": false
            	        },
            	        axisLabel: {
            	            textStyle: {
            	                color: '#fff'
            	            }
            	        },
            	        boundaryGap: false,
            	        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            	    },
            	    yAxis: {
            	        "axisLine": {
            	            lineStyle: {
            	                color: '#fff'
            	            }
            	        },
            	        splitLine: {
            	            show: true,
            	            lineStyle: {
            	                color: '#fff'
            	            }
            	        },
            	        "axisTick": {
            	            "show": false
            	        },
            	        axisLabel: {
            	            textStyle: {
            	                color: '#fff'
            	            }
            	        },
            	        type: 'value'
            	    },
            	    series: [{
            	            name: '悉尼',
            	            smooth: true,
            	            type: 'line',
            	            symbolSize: 8,
            	            symbol: 'circle',
            	            data: [90, 50, 39, 50, 120, 82, 80]
            	        }, {
            	            name: '北美',
            	            smooth: true,
            	            type: 'line',
            	            symbolSize: 8,
            	            symbol: 'circle',
            	            data: [70, 50, 50, 87, 90, 80, 70]
            	        }, {
            	            name: '南美',
            	            smooth: true,
            	            type: 'line',
            	            symbolSize: 8,
            	            symbol: 'circle',
            	            data: [290, 200, 20, 132, 15, 200, 90]
            	        }, {
            	            type: 'pie',
            	            center: ['83%', '33%'],
            	            radius: ['25%', '30%'],
            	            label: {
            	                normal: {
            	                    position: 'center'
            	                }
            	            },
            	            data: [{
            	                value: 335,
            	                name: '用户来源分析',
            	                itemStyle: {
            	                    normal: {
            	                        color: '#ffd285'
            	                    }
            	                },
            	                label: {
            	                    normal: {
            	                        formatter: '{d} %',
            	                        textStyle: {
            	                            color: '#ffd285',
            	                            fontSize: 20

            	                        }
            	                    }
            	                }
            	            }, {
            	                value: 180,
            	                name: '占位',
            	                tooltip: {
            	                    show: false
            	                },
            	                itemStyle: {
            	                    normal: {
            	                        color: '#87CEFA'
            	                    }
            	                },
            	                label: {
            	                    normal: {
            	                        textStyle: {
            	                            color: '#ffd285',
            	                        },
            	                        formatter: '\航班延误'
            	                    }
            	                }
            	            }]
            	        },


            	        {
            	            type: 'pie',
            	            center: ['83%', '72%'],
            	            radius: ['25%', '30%'],
            	            label: {
            	                normal: {
            	                    position: 'center'
            	                }
            	            },
            	            data: [{
            	                value: 435,
            	                name: '用户来源分析',
            	                itemStyle: {
            	                    normal: {
            	                        color: '#ff733f'
            	                    }
            	                },
            	                label: {
            	                    normal: {
            	                        formatter: '{d} %',
            	                        textStyle: {
            	                            color: '#ff733f',
            	                            fontSize: 20

            	                        }
            	                    }
            	                }
            	            }, {
            	                value: 100,
            	                name: '占位',
            	                tooltip: {
            	                    show: false
            	                },
            	                itemStyle: {
            	                    normal: {
            	                        color: '#87CEFA'
            	                    }
            	                },
            	                label: {
            	                    normal: {
            	                        textStyle: {
            	                            color: '#FF4500',
            	                        },
            	                        formatter: '\暴风雨'
            	                    }
            	                }
            	            }]
            	        }
            	    ]
              });
             
          }
      },
      mounted: function() {
    	  this.browser = document.getElementById('browser');
    	  this.browser.style.height = window.innerHeight + "px";
          this.init()
              .update();
      }
}