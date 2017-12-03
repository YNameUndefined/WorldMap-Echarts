<template>
<div id="map">
	<div class="mapButton">
		<el-button size="mini" class="mapButton_s" icon="el-icon-d-arrow-left" @click="mapButton"></el-button>	
	</div>
	<div class="maptobrowser">
		<el-button size="mini" class="mapButton_b" icon="el-icon-d-arrow-right" @click="maptobrowser"></el-button>	
	</div>
 <el-row :gutter="20">
  <el-col :span="24">
  	<div class="grid-content bg-purple">
  	 <section class="chart">
	    <el-row>
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
	background-image: url(../assets/t.jpg);
}
.line{
	position: relative;
	
}
.mapButton{
	position: fixed;
	left: 20px;
	top: 20px;
	color: #FFFFFF;
	background-color: #000000;
	z-index: 999;
}
.maptobrowser{
	
	position: fixed;
	right: 50px;
	top: 20px;
	color: #FFFFFF;
	background-color: #000000;
	z-index: 999;

}
.mapButton_s{
	background-color: #000000;
	border:none ;
	color: #FFFFFF;
	font-size: 30px;
}
.mapButton_b{
	background-color: #000000;
	border:none ;
	color: #FFFFFF;
	font-size: 30px;
}
</style>
