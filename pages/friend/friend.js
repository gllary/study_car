// pages/friend/friend.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'inform':'一对一学车”，享受VIP教学！',
    flag: 'true',
    imgUrls: [],
    circleid:5,
    content:'',
    openid:'',
    stus:[],
    all:[],
    stu:[],
    comment:[],
    textdata:'',
    users:[],
    p:[],
    n:[],



  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log("cheng");
        that.setData({
          userInfo: res.data
        })
      },
    });
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        console.log(res)
        console.log(res.data)
        that.setData({
          openid: res.data
        })

      },
    });
    var array = new Array()

    for (let i = 1; i < 4; i++) {
      let url = "" + i + ".png"
      wx.downloadFile({
        url: url,
        success: (res) => {
          let temp = res.tempFilePath
          array[i - 1] = temp
          that.setData({
            imgUrls: array
          })
        }
      })

    }
 /*   wx.request({
      url: 'https://www.lieyanwenhua.com/circleall',
      method: 'POST',
      header: { "Content-Type": 'application/json' },

      success: function (res) {

        that.setData({
          all: res.data.circleall,
         
        })
        console.log(that.data.all.length)

        for (var i = 0; i < that.data.all.length; i++) {
          that.data.stu[i] = that.data.all[i];
          console.log(that.data.stu[i].circleid)
          wx.request({
            url: 'https://www.lieyanwenhua.com/userqueryByid',
            header: { "Content-Type": "application/x-www-form-urlencoded" },
            method: 'POST',
            data: {
              openid: that.data.all[i].openid
            },
            success: function (res) {
              let p = that.data.p;
              let n = that.data.n;

              p.push(res.data.userbyid.avatarUrl)
              n.push(res.data.userbyid.nickName)

              that.setData({
                p,
                n
              })
              console.log(that.data.p)

            }

          })


        }
        // console.log(that.data.p)
        that.setData({
          stus: that.data.stu
        })



      },
    })*/


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

    wx.request({
      url: '',
      method: 'POST',
      header: { "Content-Type": 'application/json' },

      success: function (res) {

        that.setData({
          all: res.data.circleall,
        })
        console.log(that.data.all.length)
        that.setData({
          p:[],
          n:[]
        })

        

        for (var i = 0; i < that.data.all.length; i++) {
          that.data.stu[i] = that.data.all[i];
          console.log(that.data.stu[i].openid)
          wx.request({
            url: '',
            header: { "Content-Type": "application/x-www-form-urlencoded" },
            method: 'POST',
            data: {
              openid: that.data.all[i].openid
            },
            success: function (res) {


           let p = that.data.p;
              let n = that.data.n;

              p.push(res.data.userbyid.avatarUrl)
              n.push(res.data.userbyid.nickName)

              that.setData({
                p,
                n
              })
              console.log(that.data.p)

            }

          })


        }
         console.log(that.data.p)
        that.setData({
          stus: that.data.stu
        })



      },
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
  likereact: function (e) {
   
    var that=this;
    console.log('try')
    console.log(e.target.dataset.id)
    var id = e.target.dataset.id-1
   
    console.log(that.data.stus[id].like)
    that.data.stus[id].like = that.data.stus[id].like ? 0 : 1;
    var l = "stus[" +id + "].like";
  that.setData({
    [l]: that.data.stus[id].like
  })
  },
  /*
  控制评论区
  */
  show: function () {
    this.setData({ flag: false })

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
  },
  liuyan:function(e){
    var that = this;
 
    that.setData({
      content:e.detail.value,
      circleid:e.target.id
    })
    console.log(that.data.circleid)
    var t
    that.setData({
      t: that.data.content,
      textdata: ' '
    })
    that.data.comment[that.data.circleid] = that.data.t
    wx.request({
      url: '',
      method: 'POST',
      header: { "Content-Type": 'application/json' },
      success: function () {
        that.setData({
          circleid: that.data.circleid,
          openid: that.data.openid,
          comment: that.data.comment,
        })
        console.log("成功！")
      },

    })

  },
  ly_btn:function(){
    var that=this
    var t
    that.setData({
      t:that.data.content,
      textdata:' '
    })
    that.data.comment[that.data.circleid]=that.data.t
    wx.request({
      url: 'https://www.lieyanwenhua.com/circominsert',
      method: 'POST',
      header: { "Content-Type": 'application/json' },
      success: function () {
        that.setData({
          circleid: that.data.circleid,
          openid: that.data.openid,
          comment: that.data.comment,
        })
        console.log("成功！")
      },

    })
    wx.showToast({
      title: '留言成功',
    })


  }
})