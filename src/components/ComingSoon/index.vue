<template>
    <div class="comingSoon">
                <ul>
                    <li v-for="item in movieList" :key="item.id">
                        <div class="recommend_left">
                             <img :src="item.img | setWH('128.180')">
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
export default {
    name:'ComingSoon',
     data() {
    return {
      movieList: [],
    }
  },
  mounted() {
    this.axios.get('/api/movieOnInfoList?cityId=10').then(res => {
      var msg = res.data.msg;
      if (msg == 'ok') {
        this.movieList=res.data.data.movieList;
      }
    })
  }
}
</script>

<style  scoped>
#content .comingSoon {
  margin-top: 100px;
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