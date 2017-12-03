<template>
<div id="map">
	<div class="mapButton" @click="mapButton">
		<i class="el-icon-d-arrow-left"></i>
	</div>
	<div class="maptobrowser" @click="maptobrowser">
		<i class="el-icon-d-arrow-right"></i>	
	</div>
 <el-row :gutter="20">
  <el-col :span="24">
  	<div class="grid-content bg-purple">
  	 <section class="chart">
	    <el-row class="Echart">
	      <el-col :span="24">
	        <div id="mapechart"></div>
	      </el-col>
	    </el-row>
	  </section>
  </div>
  </el-col>
</el-row>
</div>
</template>

<script>
	import mapJS from './map.js';
    export default mapJS;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map{
	width: 100%;
	overflow: hidden;
	background-color: #fff;
	background-image:url(../assets/171203191317.jpg);
	background-repeat:no-repeat ;
	background-size:100% ;
}
.line{
	position: relative;
	
}
.mapButton{
	position: fixed;
	left: 20px;
	top: 20px;
	color: #FFFFFF;
	font-size: 25px;
	z-index: 999;
}
.maptobrowser{
	
	position: fixed;
	right: 40px;
	top: 20px;
	color: #FFFFFF;
	font-size: 25px;
	z-index: 999;

}
.Echart{
	background: rgba(40,126,255,0.5);
}
</style>
