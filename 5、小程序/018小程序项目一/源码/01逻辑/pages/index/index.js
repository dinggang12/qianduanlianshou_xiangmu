// pages/index/index.js
//引入外部的js文件  语法：var fun=require('js相对路径');
var fun=require('../../utils/demo.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[
      { 
        id:11,
        imgUrl:'',
        title:'产品信息111'
      }, {
        id: 12,
        imgUrl: '',
        title: '产品信息12222'
      },
      {
        id: 13,
        imgUrl: '',
        title: '产品信息333'
      },
      {
        id: 14,
        imgUrl: '',
        title: '产品信息4444'
      },
      {
        id: 15,
        imgUrl: '',
        title: '产品信息5555'
      },
      {
        id: 16,
        imgUrl: '',
        title: '产品信息66666'
      }
    ]
  },
  demo:function(e){
    console.log('事件触发了',e)
    console.log(e.currentTarget.dataset);
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(fun);//fun=demo函数
    // fun();

    //2.fun={aa:function}
    // fun.aa();

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

  }
})