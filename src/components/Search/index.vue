<template>
  <div class="search">
    <div class="search_input">
      <div class="search_input_wrapper">
        <div class="icon el-icon-search search_icon"></div>
        <input type="text" class="search_text" />
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <li>
          <div class="img">
            <img src="/img/re_1.jpg" />
          </div>
          <div class="info">
            <p class="info_name">巨石强森历险记</p>
            <p class="info_eng_name">jushi qiang sheng</p>
            <p class="info_type">动作，冒险，科幻</p>
            <p class="info_time">2019</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img src="/img/re_1.jpg" />
          </div>
          <div class="info">
            <p class="info_name">巨石强森历险记</p>
            <p class="info_eng_name">jushi qiang sheng</p>
            <p class="info_type">动作，冒险，科幻</p>
            <p class="info_time">2019</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img src="/img/re_1.jpg" />
          </div>
          <div class="info">
            <p class="info_name">巨石强森历险记</p>
            <p class="info_eng_name">jushi qiang sheng</p>
            <p class="info_type">动作，冒险，科幻</p>
            <p class="info_time">2019</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img src="/img/re_1.jpg" />
          </div>
          <div class="info">
            <p class="info_name">巨石强森历险记</p>
            <p class="info_eng_name">jushi qiang sheng</p>
            <p class="info_type">动作，冒险，科幻</p>
            <p class="info_time">2019</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img src="/img/re_1.jpg" />
          </div>
          <div class="info">
            <p class="info_name">巨石强森历险记</p>
            <p class="info_eng_name">jushi qiang sheng</p>
            <p class="info_type">动作，冒险，科幻</p>
            <p class="info_time">2019</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
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
  transform: translateY(8px);
  margin: 0 2px;
}
.search .search_text {
  width: 100%;
  border: none;
  height: 30px;
  font-size: 16px;
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