<template>
<div id="browser">
	<div class="browserButton">
		<el-button ize="mini" icon="el-icon-d-arrow-right" class="bbutton" @click="browserButton"></el-button>	
	</div>
 <el-row style="height: 97%;">
  <el-col :span="15" class="leftlayout">
  	 	<el-row  class="leftandmidel">
	      <el-col :span="24" style="height: 100%;">
	        <left-andmidel style="height: 100%;"></left-andmidel>
	      </el-col>
	    </el-row>
	    <el-row  class="leftcontent" style="height: 53%;">
	      <el-col :span="12" class="leftTop" style="height: 100%;">
	      	 <section class="chart" style="height: 100%;">
	        <div id="leftTop" style="height: 100%;min-height:300px;"></div>
	         </section>
	      </el-col>
	      <el-col :span="12"  style="height: 100%;">
	        <left-bottom  style="height: 100%;"></left-bottom>
	      </el-col>
	    </el-row>
  </el-col>
  <!--right degin-->
  <el-col :span="9" class="rightlayout">
		    <el-row style="height: 50%;">
		      <el-col :span="24" style="height: 100%;">
		      	<right-top></right-top>
		      </el-col>
		    </el-row>
		    <el-row style="height: 50%;">
		      <el-col :span="24" style="height: 100%;">
		      	<right-bottom></right-bottom>
		      </el-col>
		    </el-row>
  </el-col>
  <!--right end-->
</el-row>
</div>
</template>

<script>
	import browserJS from './browser.js';
    export default browserJS;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#browser{
	background-color: #0C397A;
	overflow: hidden;
}
.leftlayout,.rightlayout{
	height: 100%;
}
.leftTop{
	border-radius: 2px;
}
.rightlayout div{
	height: 100%;
}
.leftandmidel{
	height: 50%;
}
.browserButton{
	position: fixed;
	right: 0px;
	top: 0px;
	color: darkgrey;
	z-index: 999;
	border: none;
}
.bbutton{
	background-color: #0C397A;
	border: none;
	color: #FFFFFF;
	font-size:30px ;
}
</style>
