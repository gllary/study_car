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
      /*  var uploadImgCount = 0;
        for (var i = 0, h = that.data.imgs.length; i <= h; i++) {
          wx.uploadFile({
            url: 'https://lieyan-1257158697.cos.ap-shanghai.myqcloud.com/circle/',
            filePath: that.data.imgs[i],
            name: that.data.circleid + 'image_' + i + '.png',
            success: function (res) {
              wx.showToast({
                title: '成功上传',

              })
              wx.switchTab({
                url: '../friend/friend',
              })

            }
          })
        }*/
 
        wx.showToast({
          title: '成功上传',
        })
      }
    })
     //传图片
    that.uploadimg({
      url: '',
      path: that.data.imgs
    })

    wx.switchTab({
      url: '../friend/friend',
    })

   
  },
  uploadimg:function(data){
    var that = this,
    i=data.i ? data.i : 0,//当前上传的哪张图片
    success=data.success ? data.success : 0,//上传成功的个数
    fail=data.fail ? data.fail : 0;//上传失败的个数
    wx.uploadFile({
      url: data.url,
      filePath: data.path[i],
      name: that.data.circleid + 'image_' + i + '.png',//这里根据自己的实际情况改
      formData: null,//这里是上传图片时一起上传的数据
      success: (resp) => {
        success++;//图片上传成功，图片上传成功的变量+1
        console.log(resp)
        console.log(i);
        //这里可能有BUG，失败也会执行这里,所以这里应该是后台返回过来的状态码为成功时，这里的success才+1
      },
      fail: (res) => {
        fail++;//图片上传失败，图片上传失败的变量+1
        console.log('fail:' + i + "fail:" + fail);
      },
      complete: () => {
        console.log(i);
        i++;//这个图片执行完上传后，开始上传下一张
        if (i == data.path.length) {   //当图片传完时，停止调用          
          console.log('执行完毕');
          console.log('成功：' + success + " 失败：" + fail);
        } else {//若图片还没有传完，则继续调用函数
          console.log(i);
          data.i = i;
          data.success = success;
          data.fail = fail;
          that.uploadimg(data);
        }

      }
    });
  },

})
