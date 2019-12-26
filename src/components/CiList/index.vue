<template>
  <div>
    <Loading v-if="isLoading"/>
    <div class="cineam" v-else>
      <div class="cineam_ul">
        <li class="cineam_li" v-for="(item,index) in cinemaList" :key="index">
          <div class="cineam_left">
            <div class="cineam_details">
              <p class="cineam_p1">{{item.title}}</p>
              <p class="cineam_p2">评分<span>{{item.rating.average}}</span></p>
            </div>
            <div class="cineam_address">
              <p >{{item.original_title}}</p>
            </div>
            <div class="cineam_type">
              <ul>
                <li v-for="(i,genres) in cinemaList[index].genres" :key="genres">
                  {{i}}
                </li>
               
            
              </ul>
            </div>
          </div>
          <div class="cineam_right">
            <div class="cineam_m" @click="tiaozhuan(item.alt)">
               详情
             
              </div>
          </div>
        </li>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CiList',
  data(){
    return{
      cinemaList:[],
      isLoading:true,
    };
  },
  mounted() {
    this.axios.get('https://douban.uieee.com/v2/movie/top250').then((res)=>{

      if(res.status=='200'){
        this.cinemaList=res.data.subjects;
        this.isLoading=false;
      }

  
    })
  },
  methods:{
    tiaozhuan(value){
       window.location.href=value;
    }
  },
}
</script>
<style scoped>
.city_menu {
  width: 100%;
  z-index: 1;
  position: fixed;
  margin-top: 50px;
  background: white;
  display: flex;
  height: 50px;
}
.city_menu div {
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
}

.cineam {
  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
}
.cineam .cineam_ul {
  height: auto;
  margin: 0 10px;
}
.cineam .cineam_li {
  border-top: 1px solid #e6e6e6;
  height: 110px;
  display: flex;
}
.cineam .cineam_left {
  display: flex;
  flex: 4;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  text-align: left;
}
.cineam .cineam_details {
  flex-direction: row;
  display: flex;
  width: 100%;
}
.cineam .cineam_p1 {
  font-weight: 700;
  flex: 5;
}
.cineam .cineam_p2 {
  margin-left: 5px;
  font-size: 12px;
  color: red;
  font-weight: 700;
}
.cineam .cineam_address {
  font-size: 8px;
  color: gray;
  margin: 3px 0;
  width: 100%;
}
.cineam .cineam_address p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.cineam .cineam_type {
  display: flex;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
}
.cineam .cineam_type ul {
  display: flex;
  text-align: center;
}
.cineam .cineam_type li {
  font-size: 10px;
  margin: 0 4px;
  color: orange;
  border: 1px orange solid;
}
.cineam .cineam_right {
  display: flex;
  background: white;
  flex: 2;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.cineam .cineam_m {
  display: flex;
  color: gray;
}
.cineam .cineam_m img{
  width: 80px;
  height: 100px;
}

</style>