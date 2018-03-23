var postsData = require("../../data/post-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    // this.data.currentPostId = postId;
    this.setData({
      currentPostId: postId
    })
    var postData = postsData.postList[postId];
    this.setData({
      postData: postData
    });
    // var postCollected = {
    //   1:"true",
    //   2:"false",
    //   3:"true",
    //   ...
    // }
    var postCollected = wx.getStorageSync('post_Collected')
    if (postCollected){
      var postCollected = postCollected[postId];
      this.setData({
        collected : postCollected
      })
    }
    else{
      var postCollected = {};
      postCollected[postId] = false;
      wx.setStorageSync('post_Collected', postCollected)
    }
    
  },
  onCollectedTap: function(event){
    var postCollected = wx.getStorageSync('post_Collected');
    var postCollected = postCollected[this.data.currentPostId];
    postCollected = !postCollected;
    postCollected[this.data.currentPostId] = postCollected;
    wx.setStorageSync('post_Collected', postCollected);
    this.setData({
      collected: postCollected
    })
    
  }
  
})