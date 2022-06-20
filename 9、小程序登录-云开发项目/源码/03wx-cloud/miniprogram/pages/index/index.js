//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  //获取云开发上面的一个图===================
  downFile(){
    //从云存储空间下载文件
    wx.cloud.downloadFile({
      fileID:"cloud://test-mcil7.7465-test-mcil7-1302236139/11.jpg",
      success:res=>{
        console.log(res.tempFilePath);

      },
      fail: err => {
        // handle error
        console.log(err,'请求错误')
      }
    })
  },


 
})
