<template>
    <div id="detailContrainer" class="slide-enter-active">
        <Header title="影片详情">
            <i class="el-icon-back" @click="handleToBack" style="position:absolute;font-size:30px;line-height:50px" ></i>
        </Header>
        <Loading v-if="isLoading" />
		<div v-else id="content" class="contentDetail">
			<div class="detail_list">
				<div class="detail_list_filter"></div>
				<div class="detail_list_content" style="display:flex">
					<div class="detail_list_img">
						<img alt="抱歉暂无图片" :src="detailList.images.small">
					</div>
					<div class="detail_list_info">
						<h2>{{detailList.title}}</h2>
						<p>{{detailList.original_title}}</p>
						<p>{{detailList.rating.average}}</p>
						<span v-for="(item,index) in detailList.genres" :key="index"> {{item}}</span>
						<p>{{detailList.languages[0]}} / {{detailList.durations[0]}}</p>
						<p>2018-11-16大陆上映</p>
					</div>
				<div class="detail_list_bg" :style="{ 'background-image' : 'url('+detailList.images.small+')' }"></div>


				</div>
			</div>
			<div class="detail_intro">
				<p>{{detailList.summary}}</p>
			</div>
			<!-- <div class="detail_player swiper-container">
				<ul class="swiper-wrapper">
					<li class="swiper-slide" >
						<div>
							主演：
						</div>
						<p v-for="(i,index) in detailList.writers" :key="index">{{i.name}}</p>
					</li>
				</ul>
			</div> -->
		</div>
	</div>
</template>

<script>

import Header from '@/components/Header';

export default {
    name : 'Detail',
    data(){
        return {
            detaiId:"",
            detailList:[],
            isLoading : true,
            
        }
    },
    components : {
        Header
    },
    props : ['movieId'],
    methods : {
        handleToBack(){
            this.$router.back();//返回前一个页面
        }
    },
    mounted(){
        var detaiId=window.localStorage.getItem("detaiId");
        // console.log(detaiId);
        this.detaiId=detaiId;
           this.axios.get('https://douban.uieee.com/v2/movie/subject/'+detaiId).then((res)=>{
            //    console.log(res);
         
               if(res.status=="200"){
                    this.detailList=res.data;        
                    this.isLoading = false;

                    
                //    console.log(res.data.original_title)英文名字
                // console.log(res.data.title)中文名
                // rating.average评分
                // genres  类型
                // console.log(parseInt(res.data.durations))分钟
                // pubdate
                //summary


               }
               
      });
    }



    
   
    
}
</script>

<style scoped>
#detailContrainer{ position: absolute; left:0; top:0; z-index: 600; width:100%; min-height:100%; background:white;}
#detailContrainer.slide-enter-active{ animation:.3s slideMove;}
@keyframes slideMove{
    0%{ transform : translateX(100%); }
    100%{ transform : translateX(0); }
}
#content.contentDetail{ display: block; margin-bottom:0;}
#content .detail_list{ height:200px; width:100%; position: relative; overflow: hidden;}
.detail_list .detail_list_bg{ width:100%; height:100%; background: 0 40%; filter: blur(20px); background-size:cover; position: absolute; left: 0; top: 0;}
.detail_list .detail_list_filter{ width:100%; height:100%; position: absolute;background-color: #40454d;opacity: .55; position: absolute; left: 0; top: 0; z-index: 1;}
.detail_list .detail_list_img{ width:108px; height: 150px; border: solid 1px #f0f2f3; margin:20px;display: inline-block;z-index: 5}
.detail_list .detail_list_img img{ width:100%; height: 100%;}
.detail_list .detail_list_info{  display: inline-block;z-index: 5;}
.detail_list .detail_list_info h2{ font-size: 20px;}
.detail_list .detail_list_info p{ color:black;}
#content .detail_intro{ padding: 10px;}
#content .detail_player{ margin:20px;}
.detail_player .swiper-slide{ width:70px; margin-right: 20px; text-align: center; font-size: 14px;}
.detail_player .swiper-slide img{ width:100%; margin-bottom: 5px;}
</style>
