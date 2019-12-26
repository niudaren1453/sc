<template>
  <div class="city">
    <Loading v-if="isLoading" />
    <div v-else class="city_list">
      <div class="wrapper">
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <li v-for="item in hotList" :key="item.id" @click="handleToCity(item.nm,item.id)">{{item.nm }}</li>
            </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="item in cityList" :key="item.index">
              <h2>{{item.index}}</h2>
              <ul>
                <li v-for="itemList in item.list" :key="itemList.id" @click="handleToCity(itemList.nm,itemList.id)">{{itemList.nm}}</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li
          v-for="(item,index) in cityList"
          :key="item.index"
          @touchstart="handleToIndex(index)"
        >{{item.index}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'City',
  data() {
    return {
      cityList: [],
      hotList: [],
      isLoading: true
    }
  },
  mounted() {
    //本地存储定义
    var cityList = window.localStorage.getItem('cityList')
    var hotList = window.localStorage.getItem('hotList')
    //存储到本地，并判断如果两个值都有那么省去axios
    if (cityList && hotList) {
      this.cityList=JSON.parse(cityList);
      this.hotList=JSON.parse(hotList);
      this.isLoading=false;
    } else {
      //结构     data下的cities[("id":1,  "nm":"北京"  ,  "isHot":1,  "py":"beijing")]
      this.axios.get('/api/cityList').then(res => {
        // console.log(res)
        var msg = res.data.msg //用来判断数据
        if (msg === 'ok') {
          var cities = res.data.data.cities
          // console.log(data);
          var { cityList, hotList } = this.formatCityList(cities)
          this.cityList = cityList
          this.hotList = hotList
          this.isLoading = false
          //本地存储
          window.localStorage.setItem('cityList', JSON.stringify(cityList))
          window.localStorage.setItem('hostList', JSON.stringify(hotList))
        }
      })
    }
  },
  methods: {
    //实现如  上海      shanghai   截取s
    formatCityList(cities) {
      var cityList = [] //城市分类
      var hotList = [] //热门城市分类

      //热门城市
      for (var i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i])
        }
      }
      // console.log(hotList) //查看hot城市

      for (var i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase() //截取py下的第一个拼音 &转换成英文大写

        if (toCom(firstLetter)) {
          //新添加index
          cityList.push({
            index: firstLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          })
        } else {
          //累加已有index
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id })
            }
          }
        }
      }
      //城市字母排序
      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1
        } else if (n1.index < n2.index) {
          return -1
        } else {
          return 0
        }
      })

      //用来判断
      function toCom(firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          //用来判断这个index有没有存在，如果存在false    ，否则true
          if (cityList[i].index === firstLetter) {
            return false
          }
        }
        return true
      }
      //把热门城市 和 城市分类return
      return {
        cityList,
        hotList
      }
      // console.log(cityList);//城市分类
    },
    handleToIndex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName('h2') //ref 元素获取
      // console.log(h2[index])
      // console.log(h2[index].offsetTop)
      // console.log(this.$refs.city_sort.parentNode.parentNode)
      // console.log(this.$refs.city_sort.parentNode.parentNode.scrollTop)

      // console.log(this.$refs.city_sort.parentNode.parentNode.parentNode)
      // console.log(this.$refs.city_sort.parentNode.parentNode.parentNode.scrollTop)

      // console.log(this.$refs.city_sort.parentNode.parentNode.parentNode.parentNode)
      // console.log(this.$refs.city_sort.parentNode.parentNode.parentNode.parentNode.scrollTop)

      //外部高必须小于内部高
      this.$refs.city_sort.parentNode.parentNode.parentNode.parentNode.scrollTop =  h2[index].offsetTop - 100
      console.log("tiao")
      //parentNode=city_list     由于使用margin-top 所以减上-100
    },
    handleToCity(nm,id){
      //由于是在local storage写的不涉及到异步，所以使用commit
      this.$store.commit('city/CITY_INFO',{nm,id});
      // 记录点击的参数
      window.localStorage.setItem('nowNm',nm);
      window.localStorage.setItem('nowid',id);
      //切换到nowplaying
      this.$router.push('/movie/nowPlaying');
    },
  }
}
</script>

<style scoped>
#content .city {
  margin-top: 100px;
  display: flex;
  width: 100%;
  top: 0;
  bottom: 0;
}

.city .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}

.city .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}

.city .city_hot {
  margin-top: 20px;
}

.city .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: 400;
}

.city .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city .city_sort {
  height: 100%;
}

.city .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: 400;
}

.city .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}

.city .city_sort ul li {
  line-height: 30px;
}

.city .city_index {
  width: 20px;
  right: 0;
  display: flex;
}
.city .city_index > ul {
  position: fixed;
  right: 0;
}
.city .city_index ul li {
  padding-top: 1px;
}
</style> 