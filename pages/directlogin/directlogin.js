// pages/login/firstlogin/firstlogin.js
var app=getApp();
Page({


  /**
   * 页面的初始数据
   */
  data: {

  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onGotUserInfo: function (e) {
    console.log(e.detail.userInfo)
    var that = this;
    //获取必要的变量
    var userInfo = e.detail.userInfo;
    var appId = app.globalData.g_appID;
    var appSecret = app.globalData.g_appSecret;
    wx.login({
      success: function (res) {
        console.log(res);
        wx.setStorage({
          key: 'userInfo',
          data: userInfo,
        })

        /**
         * wx.switchTab({
          url: '../home/home',
        })

         */
        
      
       
        var code = res.code;//获取code这个code是实时变化的
        if (code) {
          //userInfo是一个数组,这里会将这个数据发送到后台
          that.getOpenId(code,appId,appSecret,userInfo);
        }
      },
      fail: function () {
        console.log('登录失败！');
      }
    })
  },

  getOpenId: function (code, appId, appSecret, userInfo) {
    var that = this;
    var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + appSecret + '&js_code=' + code + '&grant_type=authorization_code';
    wx.request({
      url: url,
      method: 'GET',
      data: '',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        var openid = res.data.openid;
        that.sqluser(openid, userInfo);
       //that.sqlData(openid, userInfo);
      },
      fail: function () {
        console.log('请求openID失败');
      }
    })
  },
  
  sqluser: function (openid, userInfo){
    console.log(openid);
    var that=this;
    wx.request({
      url: 'http://localhost:8081/userqueryByid',
      method:'POST',
      data:{
        "openid":openid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(res.data);
        if (res.data.userbyid==null){
          console.log("sql");
         that.sqlData(openid, userInfo);
        }
        else{
          console.log("sqlget");
          //userInfo = res.data.userbyid;
          wx.setStorage({
            key: 'userInfo',
            data: res.data.userbyid,
          })
     
          wx.switchTab({
            url: '../home/home',
          })
        }
      },
      fail:function(res){
        console.log(res);
      }
    })
  },
  
  sqlData: function (openid, userInfo) {
    console.log(openid);
    console.log(userInfo);
    var that = this;
    wx.request({
      url: 'http://localhost:8081/userwxlogin',
      method: 'POST',
      data: {
        "openid": openid,
       "nickName": userInfo.nickName,
        "gender": userInfo.gender,
        "city":userInfo.city,
        "province":userInfo.province,
        "language":userInfo.language,
        "country": userInfo.country,
        "avatarUrl": userInfo.avatarUrl,

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        console.log("上传数据成功");
        wx.switchTab({
          url: '../home/home',
        })
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },
  tohome:function(){
    wx.switchTab({
      url: '../home/home',
    })
  }
})