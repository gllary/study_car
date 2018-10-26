// pages/teacherdetail/teacherdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../image/forback.png',
    ],
    tid:null,
    time:"2018.9.8",
    message: "在这发表您的评论",
    flag: true,
    teachers: null,
    comments: null,
  },
  show: function () {
    this.setData({ flag: false })
  },
  hide: function () {
    this.setData({ flag: true })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.tid)
    var that=this
    that.setData({
      tid:options.tid
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
    var that=this
   
    wx.request({
      url: '',
      method: 'POST',
      data: {
        "tid": that.data.tid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          teachers:res.data.coach
        })
        console.log(that.data.teachers)

      },
      fail: function (res) {
        console.log(res);
      }
    })
      wx.request({
        url: '',
        method: 'POST',
        data: {
          "tid": that.data.tid
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res.data);
          that.setData({
            comments: res.data.comment_user
          })
        },
        fail: function (res) {
          console.log(res);
        }
      })

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

  order_teacher: function () {
    wx.navigateTo({
      url: '../orderteacher/orderteacher',
    })
  },
  input_button:function(){

  }
})



