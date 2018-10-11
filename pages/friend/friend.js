// pages/friend/friend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'inform':'一对一学车”，享受VIP教学！',
    flag: 'true',
    imgUrls: [
      "../image/1.jpg",
      "../image/1.jpg",
      "../image/1.jpg",
      "../image/1.jpg",
    ]
    ,

    shares:null


  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://result.eolinker.com/gEUIzZyd311350ff3d0982a5b71cc809c83d3b83a0d021c?uri=friend',
      method: 'GET',
      header: { "Content-Type": 'application/json' },

      success: function (res) {
        console.log(res.data);
        that.setData({
          inform:res.data.inform,
          shares: res.data.shares

        })
        

   },
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
  likereact: function (e) {
    var id = e.target.dataset.id;
    this.data.shares[id].like = this.data.shares[id].like ? 0 : 1;
    var l = "shares[" + id + "].like";
    this.setData({
      [l]: this.data.shares[e.target.dataset.id].like
    })
  },
  /*
  控制评论区
  */
  show: function () {
    this.setData({ flag: false })

  },
  hide: function () {
    this.setData({ flag: true })
    wx.showToast({
      title: '私信成功！',
    })
  },
  showad: function () {
    wx.showToast({
      title: '广告位招标！',
    })

  }
})