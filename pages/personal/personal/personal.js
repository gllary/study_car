// pages/personal/personal/personal.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    moneybalance:0,
    couponnum: 0,
    integralnum: 0,
    myteacher: '无',
    if_apply:'未报名',
    Customer_call:'123456',
   
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log("cheng");
        that.setData({
          userInfo: res.data
        })
        console.log("jia");
      },
    });

    wx.request({
      url: 'http://result.eolinker.com/gEUIzZyd311350ff3d0982a5b71cc809c83d3b83a0d021c?uri=reasontest',
      method:'GET',
      header: { "Content-Type": 'application/json'},
      
      success:function(res){
        console.log(res.data);
        that.setData({
          moneybalance: res.data.moneybalance,
          couponnum: res.data.couponnum,
          integralnum: res.data.integralnum,
          myteacher: res.data.myteacher,
          if_apply: res.data.if_apply,
          Customer_call: res.data.Customer_call,

        })
       


      }
    })
   
   
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
  TOchteacher:function(){
    wx.navigateTo({
      url: '../chteacher/chteacher',
    })
  },
  Tofeedback:function(){
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  Toaffair:function(){
   /* wx.navigateTo({
      url: '../myaffair/myaffair',
    })*/
    wx.showToast({
      title: '敬请期待！',
      icon: 'loading'
    })
  },
  Toround:function(){
   /* wx.navigateTo({
      url: '../myround/myround',
    })*/
    wx.showToast({
      title: '敬请期待！',
      icon:'loading'
    })
  },
  Tostore:function(){
    wx.showToast({
      title: '敬请期待！',
      icon: 'loading'
    })
  },
  Tofun:function(){
    wx.showToast({
      title: '敬请期待！',
      icon: 'loading'
    })
  },
  Tocustom:function(){
    wx.makePhoneCall({
      phoneNumber: this.data.Customer_call,
      success:function(){
        wx.showToast({
          title: '成功拨打该电话',
        })
      }
    })
  },
  Toback:function(){
    wx.navigateTo({
      url: '../../directlogin/directlogin',
    })
  }
  

})