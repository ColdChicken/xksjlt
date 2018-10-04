// pages/content/content.js
const article = require("../../article/article.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleId: -1,
    article: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.articleMgr = new article.ArticleMgr()
    this.setData({
      articleId: parseInt(options.id),
    })
    this.initContent()
  },

  /**
   * 加载文章数据
   */
  initContent: function () {
    var that = this
    this.articleMgr.getArticle(this.data.articleId, function(article) {
      console.log(article)
      // 转JSON
      article.content = JSON.parse(article.content)
      // 处理content
      for (var content of article.content.contents) {
        if (content.type == 'section') {
          content.section_level = content.section_id.split('.').length
        }
      }

      that.setData({
        article: article,
      })
    })
  },

  /**
   * 点击了ref类型的block
   */
  tapBlockRef: function(e) {
    var link = e.currentTarget.dataset.link
    wx.showModal({
      title: '来源',
      content: link,
      showCancel: false,
    })
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