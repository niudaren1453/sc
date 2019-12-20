<template>
  <div>
    <div class="cineam">
      <div class='time'>更新日期：{{data}}</div>

      <div class="cineam_ul">
        <li class="cineam_li" v-for="(item,index) in subjects" :key="index">
          <div class="cineam_left">
            <div class="cineam_details">
              <p class="cineam_p1">{{item.subject.title}}</p>
              <p class="cineam_p2">评分<span>{{item.subject.rating.average}}</span></p>
            </div>
            <div class="cineam_address">
              <p >票数-{{item.box}}万  排名{{item.rank}}</p>
            </div>
            <div class="cineam_type">
              <ul>
                <li v-for="(i,genres) in subjects[index].subject.genres" :key="genres">
                    {{i}}
                  
                </li>
               
            
              </ul>
            </div>
          </div>
          <div class="cineam_right">
            <div class="cineam_m">
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
  name: 'NorthAmerica',
  data(){
      return{
          data:"",
          subjects:[],
      }
  },
  mounted() {
      this.axios.get('https://douban.uieee.com/v2/movie/us_box?apikey=0df993c66c0c636e29ecbb5344252a4a').then((res)=>{
        //   console.log(res);
        //   console.log(res.data.date);
        //   console.log(res.data.subjects);
          if(res.status=="200"){
              this.data=res.data.date;
              this.subjects=res.data.subjects;
              //把票房次数/10000
                for( var i=0;i<=this.subjects.length-1;i++){
                    if(this.subjects[i].box>10000){
                      this.subjects[i].box= this.subjects[i].box/10000;
                    }
                }
          }
      });
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
.cineam .cineam_p2 span{
    font-size:8px;
}
.cineam .cineam_address {
  font-size: 12px;
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

.time{
    padding:5px 10px;
}
</style>