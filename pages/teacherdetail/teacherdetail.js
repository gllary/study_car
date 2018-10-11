// pages/teacherdetail/teacherdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../image/forback.png',
    ],
    time:"2018.9.8",
    message: "在这发表您的评论",
    flag: true,
    teachers: [{
      id: 1,
      name: "魏教练",
      introduce: "为人亲善 深受学员爱戴 经常有学员主动选择让魏教练带他练车 谈吐风趣 有多年驾驶培训教学经验 是我们驾培行业辛勤的园丁"
    },

    ],
    comments: [{
      id: 1,
      name: "fourous",
      comment: "这是我的简介，我来自武汉理工大学，计算机学院，是一名优秀的少先队员，我立志改变中国，改变社会，改变武汉理工大学的破壁风貌而努力"
    },

    {
      id: 2,
      name: "adila",
      comment: "这是我的简介，我来自武汉理工大学，计算机学院，是一名优秀的少先队员，我立志改变中国，改变社会，改变武汉理工大学的破壁风貌而努力"
      },

      {
        id: 3,
        name: "adila",
        comment: "这是我的简介，我来自武汉理工大学，计算机学院，是一名优秀的少先队员，我立志改变中国，改变社会，改变武汉理工大学的破壁风貌而努力"
      },

      {
        id: 4,
        name: "adila",
        comment: "这是我的简介，我来自武汉理工大学，计算机学院，是一名优秀的少先队员，我立志改变中国，改变社会，改变武汉理工大学的破壁风貌而努力"
      },

      {
        id: 5,
        name: "adila",
        comment: "这是我的简介，我来自武汉理工大学，计算机学院，是一名优秀的少先队员，我立志改变中国，改变社会，改变武汉理工大学的破壁风貌而努力"
      },

      {
        id: 6,
        name: "adila",
        comment: "这是我的简介，我来自武汉理工大学，计算机学院，是一名优秀的少先队员，我立志改变中国，改变社会，改变武汉理工大学的破壁风貌而努力"
      },

      {
        id: 7,
        name: "adila",
        comment: "这是我的简介，我来自武汉理工大学，计算机学院，是一名优秀的少先队员，我立志改变中国，改变社会，改变武汉理工大学的破壁风貌而努力"
      }
    ]
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

  order_teacher: function () {
    wx.navigateTo({
      url: '../orderteacher/orderteacher',
    })
  }
})



