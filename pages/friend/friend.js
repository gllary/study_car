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

    shares:null,
    stus: [{
      id: 0,
      stu_txt: "这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，你好",
      stu_time: "2018.10.18",
      stu_pic:"../image/1.jpg",
      stu_name:"楚熙",
      stu_photo:"../image/1.jpg"

    },
    {
      id: 1,
      stu_txt: "这是一个好的想法，将传统驾校和实地结合起来",
      stu_time: "2018.8.22"
    },
    {
      id: 2,
      stu_txt: "这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，非常感谢大家，我是武汉理工余家头小霸王，这是一个非常好的APP，希望不要被这个淹没，你好你好这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台",
      stu_time: "2018.8.22"
    },
    {
      id: 3,
      stu_txt: "这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，非常感谢大家，我是武汉理工余家头小霸王，这是一个非常好的APP，这是一个非常好的APP，希望不要被这个淹没，你好你好",
      stu_time: "2018.8.22"
    },
    {
      id: 4,
      stu_txt: "这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，这是一个非常好的APP，希望不要被这个淹没，希望不要被这个淹没，你好你好",
      stu_time: "2018.8.22"
    },
    {
      id: 5,
      stu_txt: "这是一个好的想法，将传统驾校和实地结合起来，这是一个非常好的APP，希望不要被这个淹没，你好你好希望不要被这个淹没，你好你好",
      stu_time: "2018.8.22"
    }
    ]


  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'xxx',
      method: 'POST',
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
    this.data.stus[id].like = this.data.stus[id].like ? 0 : 1;
    var l = "stus[" + id + "].like";
    this.setData({
      [l]: this.data.stus[e.target.dataset.id].like
    })
  },
  unlikereact: function (e) {
    var id = e.target.dataset.id;
    this.data.stus[id].unlike = this.data.stus[id].unlike ? 0 : 1;
    var l = "stus[" + id + "].unlike";
    this.setData({
      [l]: this.data.stus[e.target.dataset.id].unlike
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

  },
  to_message:function(){
    wx.navigateTo({
      url: '../friend/my_message',
    })
  }
})