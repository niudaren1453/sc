<template>
       <footer class="footer">
            <div class="footer-box">
                <router-link tag="div" to="/movie">
                     <div class="icon el-icon-video-camera">
                      </div>
                      <div class="footer-font">电影</div>
                  </router-link>
                  <router-link tag="div" to="/cinema">
                      <div class="icon el-icon-s-order">
                     </div>
                     <div class="footer-font"> 影院</div>
                  </router-link>
                 <router-link tag="div" to="/mine">
                    <div class="icon el-icon-s-check ">
                       </div>
                     <div class="footer-font">我的</div>
                 </router-link>
             </div>
     </footer>
</template>
<script>
export default {
    name:'TabBar',
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px solid #e6e6e6;
  position: fixed;
  left: 0;
  bottom: 0;
}
.footer .footer-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.footer .footer-box > div {
  flex: 1;
}
.footer .footer-box .footer-font {
  font-size: 12px;
  line-height: 18px;
}
.footer .footer-box>div.router-link-active {
    color: #f03d37;
}
</style>