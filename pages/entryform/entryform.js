// pages/entryform/entryform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    tel:'',
    id_card:'',
    address:'',
    qq:'',
    weixin:'',
    teacher:'',
  
  },
  show:function(){
    this.setData({flag:false})
  },
  hide:function(){
    this.setData({flag:true})
  },
  name:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  tel: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },
  id_card: function (e) {
    this.setData({
      id_card: e.detail.value
    })
  },
  address: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  qq: function (e) {
    this.setData({
      qq: e.detail.value
    })
  },
  weixin: function (e) {
    this.setData({
      weixin: e.detail.value
    })
  },
 teacher: function (e) {
    this.setData({
      teacher: e.detail.value
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
   * 报名表单提交
   */
  apply:function(){
    wx.showToast({
      title:'1',
    })
    wx.request({
      url: 'http://result.eolinker.com/gEUIzZyd311350ff3d0982a5b71cc809c83d3b83a0d021c?uri=/apply/',
      data:{
        'name':this.data.name,
        'tel': this.data.tel,
        'id_card': this.data.id_card,
        'address': this.data.adress,
        'qq': this.data.qq,
        'wx': this.data.weixin,
        'choice_teadher': this.data.teacher,
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method:'POST',
      success:function(res){
        wx.showToast({
          title: '成功！',
        })
        wx.navigateBack({
          delta: -1
        });
      }
    })
  }
})