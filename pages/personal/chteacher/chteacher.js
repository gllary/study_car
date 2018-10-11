// pages/personal/chteacher/chteacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reason:'',
  
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
  rea_input:function(e){
    this.setData(
      {
        reason:e.detail.value
      }
    )

  },
  hand_in:function(){
    var that=this;
    wx.request({
      url: 'http://result.eolinker.com/gEUIzZyd311350ff3d0982a5b71cc809c83d3b83a0d021c?uri=reasontest',
      data:{
        reason:this.data.reason
      },
      method:'POST',
      header:{
        'content-type':'application/json'
      },
      success:function(res){
        
        wx.navigateBack({
          delta: -1
        })
        wx.showToast({
          title: '提交成功',
        })
      }
    })


  }
})