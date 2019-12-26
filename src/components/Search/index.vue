<template>
  <div class="search">
    <div class="search_input">
      <div class="search_input_wrapper">
        <div class="icon el-icon-search search_icon"></div>
        <input type="text" class="search_text"  v-model="message">
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
       
        <li v-for="item in moviesList" :key="item.id">
          <div class="img">
              <img :src="item.img | setWH('128.180')">
          </div>
          <div class="info">
            <p class="info_name">{{item.nm}} {{item.sc}}</p>
            <p class="info_eng_name">{{item.enm}}</p>
            <p class="info_type">{{item.cat}}</p>
            <p class="info_time">{{item.rt}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'Search',
  data(){
    return {
      message:"",
      moviesList:[],
    }
  },
  methods:{
    cancelRequest(){
      if(typeof this.source==="function"){
        this.source('终止请求');
      }
    }

  },
  watch:{
    message(newVal){
      var that=this;
      var cityId=this.$store.state.city.id;
      // console.log(newVal);
      this.cancelRequest();

      this.axios.get('/api/searchList?cityId='+cityid+'&kw='+newVal,{
         cancelToken: new this.axios.CancelToken(function(c){
          that.source=c;
        })
      }).then((res)=>{
       

        var msg=res.data.msg;
        var movies=res.data.data.movies;
        // console.log(res.data.data.movies);
        //判断是否有值
        if(msg&&movies){
          this.moviesList=movies.list;
          // console.log(this.moviesList);
        }
      }).catch((err)=>{
        if(this.axios.isCancel(err)){
          console.log('Rquest canceled',err.message);//请求如果被取消  ，这里返回取消的message 
        }else{
          console.log(err);
        }


      });

    }
  },

}
</script>


<style scoped>
.search {
  margin-top: 100px;
  overflow: auto;
}
.search .search_input {
  padding: 8px 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid gray;
}
.search .search_input_wrapper {
  padding: 0 10px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
  display: flex;
  line-height: 30px;
}
.search .search_icon {
  line-height: 30px;
}
.search .search_text {
  width: 100%;
  border: none;
  height: 30px;
  font-size: 16px;
  padding-left: 5px;
}
.search .search_result h3 {
  padding: 9px 15px;
  font-size: 15px;
  border-bottom: 1px solid gray;
  color: gray;
}
.search .search_result li {
  border-bottom: 1px solid gray;
  padding: 10px 15px ;
  box-sizing: border-box;
  display: flex;
}
.search img {
  width: 100%;
  height: 90px;
}
.search .info {
  float: left;
  padding: 10px 15px;
}
.search .info_name {
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.search .info_eng_name,
.search .info_type,
.search .info_time {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>