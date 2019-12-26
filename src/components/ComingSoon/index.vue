<template>
  <div class="comingSoon" ref="comingSoon">
       <Loading v-if="isLoading" />
    
    <ul v-else>
      <li>{{pullDownMsg}}</li>
      <li v-for="item in movieList" :key="item.id">
        <div class="recommend_left">
          <img :src="item.img | setWH('128.180')" />
        </div>
        <div class="recommend_mid">
          <div class="film_name">{{item.nm}}</div>
          <div class="ober">{{item.wish}}人想看</div>
          <div class="star">主演：{{item.star}}</div>
          <div class="projection_times">上映日期 ：{{item.rt}}</div>
        </div>
        <div class="recommend_right">
          <div class="btn_buy">预售</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import BScorll from 'better-scroll'

export default {
  name: 'ComingSoon',
 data() {
    return {
      movieList: [],
      pullDownMsg: '',
      isLoading:true,
    }
  },
  mounted() {
    this.axios.get('/api/movieOnInfoList?cityId=10').then(res => {
      var msg = res.data.msg
      if (msg == 'ok') {
        this.movieList = res.data.data.movieList;
        this.isLoading=false;
        this.$nextTick(() => {
          var scroll = new BScorll(this.$refs.comingSoon, {
            tap: true,
            probeType: 1
          })
          scroll.on('scroll', pos => {
            // console.log(2);
            if (pos.y > 30) {
              this.pullDownMsg = '正在更新中'
            }
          })

          scroll.on('touchEnd', pos => {
            // console.log(3);
            if (pos.y > 30) {
              this.axios.get('/api/movieOnInfoList?cityId=10').then(res => {
                var msg = res.data.msg
                if (msg == 'ok') {
                  this.pullDownMsg = '更新完毕'
                  setTimeout(()=>{
                    this.movieList = res.data.data.movieList
                    this.pullDownMsg='';
                  },1000)
                }
              })
            }
          })
        })
      }
    })
  },
  methods: {
    handleToDetail() {
      console.log(1)
    }
  }
}
</script>

<style  scoped>
#content .comingSoon {
  margin-top: 100px;
  height: 100%;
  /* overflow: hidden; */
}
#content ul {
  margin: 0 12px;
}
#content li {
  border-top: 1px solid #e6e6e6;
  display: flex;
  margin: 22px 0 0 0;
}
#content .recommend_left {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
#content .recommend_left img {
  width: 60px;
  height: 90px;
}
#content .recommend_mid {
  display: flex;
  flex: 3;
  flex-direction: column;
}
#content .recommend_mid .film_name {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
}
#content .recommend_mid .ober,
#content .recommend_mid .star,
#content .recommend_mid .projection_times {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .recommend_right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
#content .btn_buy {
  width: 50px;
  height: 26px;
  background: skyblue;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  color: white;
}
</style>