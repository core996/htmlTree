Vue.component("common-header",{
  template:`
  <div>
  <header class="aui-bar aui-bar-nav" id="aui-header">
    <a class="aui-pull-left aui-btn" @click="goBack">
          <span class="aui-iconfont aui-icon-left" ></span>返回
      </a>
   <div class="aui-title">{{menutitle}}</div>
  </header>
  </div>
  `,
  props:['menutitle'],
  methods:{
    goBack:function(){
      api.closeFrame({
           name: 'menuJump'
       });
        api.closeFrame({
             name: ''
         });
      }
  }
})
