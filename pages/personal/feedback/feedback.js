// pages/personal/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    imgUrls: [
      '../../image/forback.png',
    ],
    texts: "至少5个字",
    min: 5,//最少字数
    max: 140, //最多字数 
    message: "在这里输入您想输入的内容，匿名提交您想要的内容",
    flag: true,
    feedbacks:[{
      id:0,
      feedback_txt:"这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，非常感谢大家，我是武汉理工余家头小霸王，这是一个非常好的APP，希望不要被这个淹没，你好你好这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，非常感谢大家，我是武汉理工余家头小霸王，这是一个非常好的APP，希望不要被这个淹没，你好你好",
      feedback_time:"2018.8.22"
    },
    {
      id:1,
      feedback_txt: "这是一个好的想法，将传统驾校和实地结合起来",
      feedback_time: "2018.8.22"
    },
    {
      id: 2,
      feedback_txt: "这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，非常感谢大家，我是武汉理工余家头小霸王，这是一个非常好的APP，希望不要被这个淹没，你好你好这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，非常感谢大家，我是武汉理工余家头小霸王，这是一个非常好的APP，希望不要被这个淹没，你好你好",
      feedback_time: "2018.8.22"
      },
      {
        id: 3,
        feedback_txt: "这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，非常感谢大家，我是武汉理工余家头小霸王，这是一个非常好的APP，希望不要被这个淹没，你好你好这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，非常感谢大家，我是武汉理工余家头小霸王，这是一个非常好的APP，希望不要被这个淹没，你好你好",
        feedback_time: "2018.8.22"
      },
      {
        id: 4,
        feedback_txt: "这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，非常感谢大家，我是武汉理工余家头小霸王，这是一个非常好的APP，希望不要被这个淹没，你好你好这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，非常感谢大家，我是武汉理工余家头小霸王，这是一个非常好的APP，希望不要被这个淹没，你好你好",
        feedback_time: "2018.8.22"
      },
      {
        id: 5,
        feedback_txt: "这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，非常感谢大家，我是武汉理工余家头小霸王，这是一个非常好的APP，希望不要被这个淹没，你好你好这是一个好的想法，将传统驾校和实地结合起来，搭建一个完整的互联平台，非常感谢大家，我是武汉理工余家头小霸王，这是一个非常好的APP，希望不要被这个淹没，你好你好",
        feedback_time: "2018.8.22"
      }
    ]
  
  },
   //字数限制  
  inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);

    //最少字数限制
    if (len <= this.data.min)
      this.setData({
        texts: "还没够5个字，还不能发表"
      })
    else if (len > this.data.min)
      this.setData({
        texts: " "
      })

    //最多字数限制
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len //当前字数  
    });
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
  //这里的官方方法改变，需要字符串加起来
  //like是点赞，unlike是踩，点击评论跳到另一个界面
  likereact: function (e) {
    var id = e.target.dataset.id;
    this.data.feedbacks[id].like = this.data.feedbacks[id].like ? 0 : 1;
    var l = "feedbacks[" + id + "].like";
    this.setData({
      [l]: this.data.feedbacks[e.target.dataset.id].like
    })
  },
  unlikereact: function (e) {
    var id = e.target.dataset.id;
    this.data.feedbacks[id].unlike = this.data.feedbacks[id].unlike ? 0 : 1;
    var l = "feedbacks[" + id + "].unlike";
    this.setData({
      [l]: this.data.feedbacks[e.target.dataset.id].unlike
    })
  }

  

})