<template>
     <div id="main">
        <Header  title="喵喵影院"/>
        <div id="content">
           <div class="movie_menu">
                <ul>
                    <router-link tag="div" to="/cinema/CiList" class="city_name">热门</router-link>
                    <router-link tag="div" to="/cinema/northAmerica" class="hot_item">北美票房榜</router-link>
                    <router-link tag="div" to="/cinema/newTicket" class="hot_item">新片榜</router-link>
                </ul>
            </div>
             <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
        <TabBar/>
    <router-view name="detail" />
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';


    export default{
        name:'Cinema',
        components:{
            Header,
            TabBar,
        }
    }
</script>
<style>

#content .movie_menu {
  width: 100%;
  height: 50px;
  z-index: 1;
  position: fixed;
  border-bottom: 1px solid #e6e6e6;
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
    line-height: 50px;
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

