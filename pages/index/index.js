//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '开启摩匠',
    headPortrait: '/images/team-pic.jpg',
    mjName:'摩匠团队'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../member/member'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  }
})
