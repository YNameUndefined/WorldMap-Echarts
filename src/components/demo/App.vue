<template>
  <div id="demo" :style="{height:insertHeight}">
    <div class="demoLeft">
      <div id="insertCharts" ref="insertCharts"></div>
      <div id="rightTwoCharts" ref="rightTwoCharts"></div>
      <div id="peopleInsertCharts" ref="peopleInsertCharts"></div>
    </div>

    <div class="rightContainer">
      <div ref="demoMap" id="demoMap"></div>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import 'echarts/map/js/world.js'
  export default {
    name: 'demo',
    data () {
      return {
        insertHeight: '',
        radarData: [{name: 'Canada',
          title: [{
            text: '经济'
          }, {
            text: '科技'
          }, {
            text: '军事'
          }, {
            text: '文化'
          }],
          outData: [80, 4, 0.40, -70],
          inData: [90, 5, 0.30, -140]
        },
        {
          name: 'china',
          title: [{
            text: '经济'
          }, {
            text: '科技'
          }, {
            text: '军事'
          }, {
            text: '文化'
          }],
          outData: [100, 8, 0.40, -80],
          inData: [60, 5, 0.30, -100]
        },
        {name: 'Botswana',
          title: [{
            text: '经济'
          }, {
            text: '科技'
          }, {
            text: '军事'
          }, {
            text: '文化'
          }],
          outData: [200, 4, 0.40, -60],
          inData: [40, 3, 0.30, -150]
        },
        {name: 'Brazil',
          title: [{
            text: '经济'
          }, {
            text: '科技'
          }, {
            text: '军事'
          }, {
            text: '文化'
          }],
          outData: [130, 2, 0.50, -80],
          inData: [40, 5, 0.20, -100]
        }
        ],
        bar: [
          {name: 'china',
            title: ['房产', '电子', '工业', '农业', '轻工业', '食品'],
            data: [15, 20, 14, 12, 14, 15],
            color: '#CC3801'
          },
          {name: 'Canada',
            title: ['房产', '电子', '工业', '农业', '轻工业', '食品'],
            data: [5, 20, 36, 10, 10, 20],
            color: '#72A7BA'
          },
          {name: 'Botswana',
            title: ['房产', '电子', '工业', '农业', '轻工业', '食品'],
            data: [25, 13, 14, 18, 20, 20],
            color: '#72A7BA'
          },
          {name: 'Brazil',
            title: ['房产', '电子', '工业', '农业', '轻工业', '食品'],
            data: [15, 23, 15, 17, 32, 11],
            color: '#98BF8A'
          }
        ],
        pie: [
          {name: 'china',
            data: [{value: 335, name: 'IT'},
              {value: 235, name: '金融'},
              {value: 324, name: '房产'},
              {value: 655, name: '农业'},
              {value: 258, name: '工业'}]
          },
          {name: 'Canada',
            data: [
              {value: 335, name: 'IT'},
              {value: 310, name: '金融'},
              {value: 234, name: '房产'},
              {value: 135, name: '农业'},
              {value: 444, name: '工业'}
            ]
          },
          {name: 'Botswana',
            data: [{value: 999, name: 'IT'},
              {value: 666, name: '金融'},
              {value: 234, name: '房产'},
              {value: 135, name: '农业'},
              {value: 888, name: '工业'}
            ]
          },
          {name: 'Brazil',
            data: [{value: 111, name: 'IT'},
              {value: 555, name: '金融'},
              {value: 234, name: '房产'},
              {value: 789, name: '农业'},
              {value: 323, name: '工业'}
            ]
          }
        ]
      }
    },
    methods: {
//      财政收入
      drawLine (param) {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('insertCharts'))
        // 绘制图表
        myChart.setOption({
          tooltip: {},
          xAxis: {
            data: param && param.title || ['房产', '电子', '工业', '农业', '轻工业', '视频'],
            axisLabel: {
            	textStyle: {
				        color: '#fff'
				    }
            }
          },
          yAxis: {
            splitLine: {show: false},
            axisLabel: {
            	textStyle: {
				        color: '#fff'
				    }
            }
          },
          series: [{
            name: '销量',
            type: 'bar',
            data: param && param.data || [5, 20, 36, 10, 10, 20],
            itemStyle: {
              normal: {
                color: param && param.color || 'red'
              }
            }
          }]
        })
      },
      rightTwoCharts (param) {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('rightTwoCharts'))
        // 绘制图表
        myChart.setOption({
          radar: [{
            indicator: param && param.title || [{
              text: '经济'
            }, {
              text: '科技'
            }, {
              text: '军事'
            }, {
              text: '文化'
            }],
            center: ['50%', '50%'],
            radius: 80,
            startAngle: 50,
            splitNumber: 4,
            shape: 'circle',
            name: {
              textStyle: {
                color: '#ffffff'
              }
            },
            splitArea: {
              areaStyle: {
                color: 'rgba(0, 0, 0, 0)'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#B8BCC0',
                type: 'dotted',
                opacity: 0.6
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(64,183,255,0.6)'
              }
            }
          }],
          series: [{
            name: '雷达图',
            type: 'radar',
            data: [{
              value: param && param.outData || [100, 8, 0.40, -80],
              name: '图一',
              symbol: 'rect',
              symbolSize: 5,
              lineStyle: {
                normal: {
                  color: '#00FFC6'
                }
              },
              areaStyle: {
                normal: {
                  color: 'rgba(0,255,197,0.22)'
                }
              }
            }, {
              value: param && param.inData || [60, 5, 0.30, -100],
              name: '图二',
              lineStyle: {
                normal: {
                  color: '#F8E81C'
                }
              },
              areaStyle: {
                normal: {
                  color: 'rgba(248,230,27,0.21)'
                }
              }
            }]
          }]
        })
      },
      rightBottomRightCharts (param) {
        // 基于准备好的dom，初始化echarts实例
        console.log(param)
        let myChart = echarts.init(document.getElementById('peopleInsertCharts'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '65%',
              center: ['50%', '60%'],
              data: param && param.data || [
                {value: 335, name: 'IT'},
                {value: 310, name: '金融'},
                {value: 234, name: '房产'},
                {value: 135, name: '农业'},
                {value: 1548, name: '工业'}
              ],
              label: {
                normal: {
                  show: true,
                  position: 'outside'
                }
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      },
      map () {
        var geoCoordMap = {
          'china': [113.0823, 28.2568],
          'Botswana': [4.895168, 52.370216],
          'Canada': [-80.895168, 52.2312],
          'Brazil': [-50.895168, -20.2312]
        }

        var data = [{
          id: 1,
          name: 'china',
          value: 10
        }, {
          id: 2,
          name: 'Botswana',
          value: 28397.812
        }, {
          id: 3,
          name: 'Canada'
        }, {
          id: 4,
          name: 'Brazil'
        }]

        function formtGCData (geoData, data, srcNam, dest) {
          var tGeoDt = []
          if (dest) {
            for (var i = 0; i < data.length; i++) {
              if (srcNam !== data[i].name) {
                tGeoDt.push({
                  coords: [geoData[srcNam], geoData[data[i].name]]
                })
              }
            }
          } else {
            for (var j = 0; j < data.length; j++) {
              if (srcNam !== data[j].name) {
                tGeoDt.push({
                  coords: [geoData[data[j].name], geoData[srcNam]]
                })
              }
            }
          }
          return tGeoDt
        }

        function formtVData (geoData, data, srcNam) {
          var tGeoDt = []
          for (var i = 0; i < data.length; i++) {
            var tNam = data[i].name
            if (srcNam !== tNam) {
              tGeoDt.push({
                name: tNam,
                value: geoData[tNam]
              })
            }
          }
          tGeoDt.push({
            name: srcNam,
            value: geoData[srcNam],
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: 'red',
                borderColor: '#000'
              }
            }
          })
          return tGeoDt
        }

        var planePath = 'arrow'
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('demoMap'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '全球经济趋势流转动向',
            left: '50%',
            top: '30px',
            textStyle: {
              color: '#fff',
              opacity: 0.7
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(100,149,237,1)',
                borderWidth: 0.5,
                areaStyle: {
                  color: '#fff'
                }
              }
            }
          },
          dataRange: {
            show: false,
            min: 0,
            max: 1000000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            color: ['orangered', 'yellow', 'lightskyblue']
          },
          tooltip: {
            trigger: 'item'
          },
          geo: {
            map: 'world',
            label: {
              emphasis: {
                show: false
              }
            },
            roam: false,
            silent: true,
            itemStyle: {
              normal: {
                areaColor: '#37376e',
                borderColor: '#000'
              },
              emphasis: {
                areaColor: '#2a333d'
              }
            }
          },
          series: [{
            type: 'map',
            mapType: 'world',
            mapLocation: {
              y: 100
            },
            itemStyle: {
              emphasis: {label: {show: true}}
            },
            data: [
              {name: 'Afghanistan', value: 28397.812},
              {name: 'Angola', value: 19549.124},
              {name: 'Albania', value: 3150.143},
              {name: 'United Arab Emirates', value: 8441.537},
              {name: 'Argentina', value: 40374.224},
              {name: 'Armenia', value: 2963.496},
              {name: 'French Southern and Antarctic Lands', value: 268.065},
              {name: 'Australia', value: 22404.488},
              {name: 'Austria', value: 8401.924},
              {name: 'Azerbaijan', value: 9094.718},
              {name: 'Burundi', value: 9232.753},
              {name: 'Belgium', value: 10941.288},
              {name: 'Benin', value: 9509.798},
              {name: 'Burkina Faso', value: 15540.284},
              {name: 'Bangladesh', value: 151125.475},
              {name: 'Bulgaria', value: 7389.175},
              {name: 'The Bahamas', value: 66402.316},
              {name: 'Bosnia and Herzegovina', value: 3845.929},
              {name: 'Belarus', value: 9491.07},
              {name: 'Belize', value: 308.595},
              {name: 'Bermuda', value: 64.951},
              {name: 'Bolivia', value: 716.939},
              {name: 'Brazil', value: 195210.154},
              {name: 'Brunei', value: 27.223},
              {name: 'Bhutan', value: 716.939},
              {name: 'Botswana', value: 1969.341},
              {name: 'Central African Republic', value: 4349.921},
              {name: 'Canada', value: 34126.24},
              {name: 'Switzerland', value: 7830.534},
              {name: 'Chile', value: 17150.76},
              {name: 'China', value: 1359821.465},
              {name: 'Ivory Coast', value: 60508.978},
              {name: 'Cameroon', value: 20624.343},
              {name: 'Democratic Republic of the Congo', value: 62191.161},
              {name: 'Republic of the Congo', value: 3573.024},
              {name: 'Colombia', value: 46444.798},
              {name: 'Costa Rica', value: 4669.685},
              {name: 'Cuba', value: 11281.768},
              {name: 'Northern Cyprus', value: 1.468},
              {name: 'Cyprus', value: 1103.685},
              {name: 'Czech Republic', value: 10553.701},
              {name: 'Germany', value: 83017.404},
              {name: 'Djibouti', value: 834.036},
              {name: 'Denmark', value: 5550.959},
              {name: 'Dominican Republic', value: 10016.797},
              {name: 'Algeria', value: 37062.82},
              {name: 'Ecuador', value: 15001.072},
              {name: 'Egypt', value: 78075.705},
              {name: 'Eritrea', value: 5741.159},
              {name: 'Spain', value: 46182.038},
              {name: 'Estonia', value: 1298.533},
              {name: 'Ethiopia', value: 87095.281},
              {name: 'Finland', value: 5367.693},
              {name: 'Fiji', value: 860.559},
              {name: 'Falkland Islands', value: 49.581},
              {name: 'France', value: 63230.866},
              {name: 'Gabon', value: 1556.222},
              {name: 'United Kingdom', value: 62066.35},
              {name: 'Georgia', value: 4388.674},
              {name: 'Ghana', value: 24262.901},
              {name: 'Guinea', value: 10876.033},
              {name: 'Gambia', value: 1680.64},
              {name: 'Guinea Bissau', value: 10876.033},
              {name: 'Equatorial Guinea', value: 696.167},
              {name: 'Greece', value: 11109.999},
              {name: 'Greenland', value: 56.546},
              {name: 'Guatemala', value: 14341.576},
              {name: 'French Guiana', value: 231.169},
              {name: 'Guyana', value: 786.126},
              {name: 'Honduras', value: 7621.204},
              {name: 'Croatia', value: 4338.027},
              {name: 'Haiti', value: 9896.4},
              {name: 'Hungary', value: 10014.633},
              {name: 'Indonesia', value: 240676.485},
              {name: 'India', value: 12054.648},
              {name: 'Ireland', value: 4467.561},
              {name: 'Iran', value: 240676.485},
              {name: 'Iraq', value: 30962.38},
              {name: 'Iceland', value: 318.042},
              {name: 'Israel', value: 7420.368},
              {name: 'Italy', value: 60508.978},
              {name: 'Jamaica', value: 2741.485},
              {name: 'Jordan', value: 6454.554},
              {name: 'Japan', value: 127352.833},
              {name: 'Kazakhstan', value: 15921.127},
              {name: 'Kenya', value: 40909.194},
              {name: 'Kyrgyzstan', value: 5334.223},
              {name: 'Cambodia', value: 14364.931},
              {name: 'South Korea', value: 51452.352},
              {name: 'Kosovo', value: 97.743},
              {name: 'Kuwait', value: 2991.58},
              {name: 'Laos', value: 6395.713},
              {name: 'Lebanon', value: 4341.092},
              {name: 'Liberia', value: 3957.99},
              {name: 'Libya', value: 6040.612},
              {name: 'Sri Lanka', value: 20758.779},
              {name: 'Lesotho', value: 2008.921},
              {name: 'Lithuania', value: 3068.457},
              {name: 'Luxembourg', value: 507.885},
              {name: 'Latvia', value: 2090.519},
              {name: 'Morocco', value: 31642.36},
              {name: 'Moldova', value: 103.619},
              {name: 'Madagascar', value: 21079.532},
              {name: 'Mexico', value: 117886.404},
              {name: 'Macedonia', value: 507.885},
              {name: 'Mali', value: 13985.961},
              {name: 'Myanmar', value: 51931.231},
              {name: 'Montenegro', value: 620.078},
              {name: 'Mongolia', value: 2712.738},
              {name: 'Mozambique', value: 23967.265},
              {name: 'Mauritania', value: 3609.42},
              {name: 'Malawi', value: 15013.694},
              {name: 'Malaysia', value: 28275.835},
              {name: 'Namibia', value: 2178.967},
              {name: 'New Caledonia', value: 246.379},
              {name: 'Niger', value: 15893.746},
              {name: 'Nigeria', value: 159707.78},
              {name: 'Nicaragua', value: 5822.209},
              {name: 'Netherlands', value: 16615.243},
              {name: 'Norway', value: 4891.251},
              {name: 'Nepal', value: 26846.016},
              {name: 'New Zealand', value: 4368.136},
              {name: 'Oman', value: 2802.768},
              {name: 'Pakistan', value: 173149.306},
              {name: 'Panama', value: 3678.128},
              {name: 'Peru', value: 29262.83},
              {name: 'Philippines', value: 93444.322},
              {name: 'Papua New Guinea', value: 6858.945},
              {name: 'Poland', value: 38198.754},
              {name: 'Puerto Rico', value: 3709.671},
              {name: 'North Korea', value: 1.468},
              {name: 'Portugal', value: 10589.792},
              {name: 'Paraguay', value: 6459.721},
              {name: 'Qatar', value: 1749.713},
              {name: 'Romania', value: 21861.476},
              {name: 'Russia', value: 21861.476},
              {name: 'Rwanda', value: 10836.732},
              {name: 'Western Sahara', value: 514.648},
              {name: 'Saudi Arabia', value: 27258.387},
              {name: 'Sudan', value: 35652.002},
              {name: 'South Sudan', value: 9940.929},
              {name: 'Senegal', value: 12950.564},
              {name: 'Solomon Islands', value: 526.447},
              {name: 'Sierra Leone', value: 5751.976},
              {name: 'El Salvador', value: 6218.195},
              {name: 'Somaliland', value: 9636.173},
              {name: 'Somalia', value: 9636.173},
              {name: 'Republic of Serbia', value: 3573.024},
              {name: 'Suriname', value: 524.96},
              {name: 'Slovakia', value: 5433.437},
              {name: 'Slovenia', value: 2054.232},
              {name: 'Sweden', value: 9382.297},
              {name: 'Swaziland', value: 1193.148},
              {name: 'Syria', value: 7830.534},
              {name: 'Chad', value: 11720.781},
              {name: 'Togo', value: 6306.014},
              {name: 'Thailand', value: 66402.316},
              {name: 'Tajikistan', value: 7627.326},
              {name: 'Turkmenistan', value: 5041.995},
              {name: 'East Timor', value: 10016.797},
              {name: 'Trinidad and Tobago', value: 1328.095},
              {name: 'Tunisia', value: 10631.83},
              {name: 'Turkey', value: 72137.546},
              {name: 'United Republic of Tanzania', value: 44973.33},
              {name: 'Uganda', value: 33987.213},
              {name: 'Ukraine', value: 46050.22},
              {name: 'Uruguay', value: 3371.982},
              {name: 'United States of America', value: 312247.116},
              {name: 'Uzbekistan', value: 27769.27},
              {name: 'Venezuela', value: 236.299},
              {name: 'Vietnam', value: 89047.397},
              {name: 'Vanuatu', value: 236.299},
              {name: 'West Bank', value: 13.565},
              {name: 'Yemen', value: 22763.008},
              {name: 'South Africa', value: 51452.352},
              {name: 'Zambia', value: 13216.985},
              {name: 'Zimbabwe', value: 13076.978}
            ]
          }, {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.1,
              color: '#db9982',
              symbol: planePath,
              symbolSize: 8
            },
            lineStyle: {
              normal: {
                color: '#fff',
                width: 1,
                opacity: 0.4,
                curveness: 0.2
              }
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: {
                    color: 'rgb(249, 249, 249)'
                  }
                }
              }
            },
            data: formtGCData(geoCoordMap, data, 'china', true)
          }, {
            type: 'lines',
            color: '#000',
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.1,
              color: '#000',
              symbol: planePath,
              symbolSize: 8
            },
            lineStyle: {
              normal: {
                color: '#fff',
                width: 1,
                opacity: 0.4,
                curveness: 0.2
              }
            },
            data: formtGCData(geoCoordMap, data, 'china', false)
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              period: 4,
              scale: 2.5,
              brushType: 'stroke'
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
                color: '#fff',
                fontSize: 15
              }
            },
            symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#0D6695',
                borderColor: 'gold'
              }
            },
            data: formtVData(geoCoordMap, data, 'china')
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              period: 4,
              scale: 2.5,
              brushType: 'stroke'
            },
            symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#0D6695',
                borderColor: 'gold'
              }
            },
            data: formtVData(geoCoordMap, data, 'Brazil')
          }
          ]
        })
        //  雷达图
        myChart.on('click', (param) => {
          this.radarData.forEach((item, index) => {
            if (param.data.name.toLowerCase() === item.name.toLowerCase()) {
              this.rightTwoCharts(item)
            }
          })
          //  柱形图
          this.bar.forEach((item, index) => {
            if (param.data.name.toLowerCase() === item.name.toLowerCase()) {
              this.drawLine(item)
            }
          })
          //  pie
          this.pie.forEach((item, index) => {
            if (param.data.name.toLowerCase() === item.name.toLowerCase()) {
              this.rightBottomRightCharts(item)
            }
          })
        })
        myChart.on('dblclick', (param) => {
        	if(param.data.name.toLowerCase() == "china"){
        		this.$router.push('/map');
        	}
        })
      }
    },
    mounted () {
      this.$refs.demoMap.style.height = window.innerHeight + 'px'
      this.$refs.insertCharts.style.height = window.innerHeight * 0.3 + 'px'
      this.$refs.rightTwoCharts.style.height = window.innerHeight * 0.3 + 'px'
      this.$refs.peopleInsertCharts.style.height = window.innerHeight * 0.3 + 'px'
      this.drawLine()
      this.rightTwoCharts()
      this.rightBottomRightCharts()
      this.map()
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 15px;
    background: url('./images/star.jpg') no-repeat;
    background-size: 100% 100%;
  }
  td {
   text-align: center
  }
  p {
    color:#fff;
  }
  #demo {
    display: flex;
    width: 100%;
    background: rgba(0,0,0,0.7);
  }
  .demoLeft {
    width: 30%;
    height: 100%;
  }
  #insertCharts {
    width: 100%;
  }
  #peopleInsertCharts {
    width: 100%;
  }
  #rightTwoCharts {
    width: 100%;
  }
  #demoMap {
    width: 100%;
  }
  .rightContainer {
    width: 100%;
    height: 100%;
  }
</style>
