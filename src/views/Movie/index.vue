<template>
    <div id="main" >
        <Header title="喵喵电影"/>
            <div id="content">
                <div class="movie_menu">
                <ul>
                    <router-link tag="div" to="/movie/city" class="city_name">福州</router-link>
                    <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
                    <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
                    <router-link tag="div" to="/movie/search" class="icon el-icon-search"></router-link>
                </ul>
            </div>
            <keep-alive>
                <router-view/>
            </keep-alive>
            </div>
        <TabBar/>
    </div>
</template>
<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

    export default{
        name:'Movie',
        components:{
            Header,
            TabBar,
        }
    }
</script>
<style scope>
#content .movie_menu {
  width: 100%;
  height: 50px;
  z-index: 1;
  position: fixed;
  border-bottom: 1px solid #e6e6e6;
  margin-top: 50px;
}
#content .movie_menu ul {
  width: 100%;
  height: 50px;
  text-align: center;
  display: flex;
  background: white;
  line-height: 50px;
}
#content .movie_menu ul>div{
    height: 50px
}
#content .movie_menu div {
  flex: 1px;
}
#content .movie_menu .icon {
    transform: translateY(20px);
}

.city_name.router-link-active{
    color: red;
    border-bottom: 2px red solid;
}
.hot_item.router-link-active{
    color: red;
    border-bottom: 2px red solid;

}
.hot_item.router-link-active{
    color: red;
    border-bottom: 2px red solid;

}
.movie_menu ul .icon.router-link-active{
    color: red;
}

</style>

