// pages/orderteacher/orderteacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_times:[
      {
        id:1,
        time1:"8:00-9:00"
      },
      {
        id: 2,
        time1: "8:00-9:00"
      },
      {
        id: 2,
        time1: "8:00-9:00"
      }
    ]
  },
  /**
   * 预约时间记录
   */
  time1:function(){
    wx.showToast(
      {
        title: '成功',
        icon: 'succes',
        duration: 1000,
        mask: true

      }
    )

  },
  time2: function () {
    wx.showToast(
      {
        title: '成功',
        icon: 'succes',
        duration: 1000,
        mask: true

      }
    )

  },
  time3: function () {
    wx.showToast(
      {
        title: '成功',
        icon: 'succes',
        duration: 1000,
        mask: true

      }
    )

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
  
  }
})