// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[

    ],
  },
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  switchNav: function (e) {
    var cur = e.target.dataset.current;
    this.setWinHeight(cur);
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 3) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  to_four_people:function(){
    wx.navigateTo({
      url: '../fourpeople/fourpeople',
    })
  },
  to_one_people:function(){
    wx.navigateTo({
      url: '../onepeople/onepeople',
    })
  },
  to_group:function(){
    wx.navigateTo({
      url: '../group/group',
    })
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
    var that = this
    var array=new Array()
    for(let i=1;i<5;i++){
      let url = ""+i+".png"
      wx.downloadFile({
        url: url,
        success: (res) => {
          let temp = res.tempFilePath
          array[i-1]=temp
          that.setData({
            imgUrls : array
          })
        }
      })
    }
    
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
  /**
   * 轮播广告位
   */
  showad:function(){
    wx.showToast({
      title: '广告位招标！',
    })
    wx.navigateTo({
      url: '../ad/ad',
    })

  }
})