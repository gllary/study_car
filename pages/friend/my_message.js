var app = getApp();
Page({
  
  data: {
    uploadedImages: [],
    imgBoolean: true,
    content: "不错",
    openid: '',
    circleid:' ',
    t:3,
    imgs: [],
    ss:[]

   
  },
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
    })

  },

  chooseImg() {

    let that = this;

    let len = this.data.imgs;

    if (len >= 3) {

      this.setData({

        lenMore: 1

      })





      return;

    }

    wx.chooseImage({

      success: (res) => {

        let tempFilePaths = res.tempFilePaths;

        console.log(tempFilePaths)

        let imgs = that.data.imgs;

        for (let i = 0; i < tempFilePaths.length; i++) {

          if (imgs.length <3 ) {

            imgs.push(tempFilePaths[i])

          } else {

            that.setData({

              imgs

            })

            wx.showModal({

              title: '提示',

              content: '最多只能有三张图片'

            })

            return;

          }

        }

        that.setData({

          imgs

        })

      }

    })

  },
  previewImg(e) {

    let index = e.currentTarget.dataset.index;

    let imgs = this.data.imgs;

    wx.previewImage({

      current: imgs[index],

      urls: imgs,

    })

  },

  deleteImg(e) {

    let _index = e.currentTarget.dataset.index;

    let imgs = this.data.imgs;

    imgs.splice(_index, 1);

    this.setData({

      imgs

    })

  },

  input: function (e) {
    var that=this;  
    that.setData({
      content:e.detail.value,  
    })
  },
  //发布按钮事件
  send: function () {
    var that = this;
    wx.showLoading({
      title: '上传中',

    })
    wx.request({
      url: '',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        openid: that.data.openid,
        mess: that.data.content
      },
      success: function (res) {
        var id;
        that.setData({
          id: res.data

        })
        that.data.circleid = that.data.id;

        app.globalData.flag = res.data
        console.log("成功")
        console.log(that.data.circleid)
      
        for (var i = 0, h = that.data.imgs.length; i <= h; i++) {
  /*** */
wx.uploadFile({
url: '/', //开发者服务器的 url
filePath: that.data.imgs[0], // 要上传文件资源的路径 String类型！！！
name: 'file', // 文件对应的 key ,(后台接口规定的关于图片的请求参数)
header: {
'content-type': 'multipart/form-data'
},
// 设置请求的 header
formData: {
'key': "circle/" + that.data.circleid + "image_" +i+ ".png"
},
// HTTP 请求中其他额外的参数
success: function (res) {
wx.showToast({
title: '成功上传！',
})
console.log("shang")
  wx.request({
          url: '',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        openid: that.data.openid,
        mess: that.data.content
      },
     success: function (res) {
          wx.switchTab({
                url: '../friend/friend',
              })    
     }
  })
},
fail: function (res) {
}
})
//**** */

      }
    })


    wx.switchTab({
      url: '../friend/friend',
    })

   
  },


})
