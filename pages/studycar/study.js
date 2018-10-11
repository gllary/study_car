// pages/studycar/study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgimg:"",
    
    teachers:[{
      id:0,
      like: 1,
      unlike: 1,
      name:"魏教练 ",
      introduce:"为人忠厚 年纪不大 说话比较幽默 虽然刚加入驾驶培训行业 但是善于创新 有自己的教学方式 让学员学车轻松愉快"
    },
      {
        id: 1,
        like:1,
        unlike:1,
        name: "万教练",
        introduce: "为人忠厚 年纪不大 说话比较幽默 虽然刚加入驾驶培训行业 但是善于创新 有自己的教学方式 让学员学车轻松愉快"
      },
      {
        id:2,
        like:1,
        unlike:1,
        name:"张教练",
        introduce:"为人淳朴 资历较高 有独特的教学方法 为学员着想 认真负责 "

      }
    ],
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
  To_teacher_detail:function(e)
  {
    var id = e.target.dataset.id;
    console.log(e),
    wx.navigateTo({
      url: '../teacherdetail/teacherdetail',
    })
  },
  //这里的官方方法改变，需要字符串加起来
  //like是点赞，unlike是踩，点击评论跳到另一个界面
  likereact:function(e){
    var id = e.target.dataset.id;
    this.data.teachers[id].like = this.data.teachers[id].like  ? 0 : 1;
    var l="teachers["+id+"].like";
    this.setData({
      [l]: this.data.teachers[e.target.dataset.id].like 
    })
  },
  unlikereact:function(e){
    var id = e.target.dataset.id;
    this.data.teachers[id].unlike = this.data.teachers[id].unlike ? 0 : 1;
    var l = "teachers[" + id + "].unlike";
    this.setData({
      [l]: this.data.teachers[e.target.dataset.id].unlike
    })
  }


})