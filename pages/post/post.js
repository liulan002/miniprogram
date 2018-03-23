var postData = require("../data/post-data.js")

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
    // this.data.postList = postData.postList
    this.setData({ post_key: postData.postList});
   },
  onPosttap: function(event){
    var postId = event.currentTarget.dataset.postid;
     console.log("onPosttap"+postId);
     wx.navigateTo({
       url: 'post-detail/post-detail?id=' + postId
     })
   }

  
})