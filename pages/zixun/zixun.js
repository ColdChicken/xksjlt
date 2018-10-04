const article = require("../../article/article.js")

// pages/zixun/zixun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 当前位置
    currentPos: 0,
    // 每页的加载文章数
    pageLimit: 10,
    // 过滤标签
    tags: [],
    // 文章列表
    articles: [],
    // 是否处在加载中
    inLoading: false,
  },

  /**
   * 初始化 data
   */
  initData: function () {
    this.setData({
      currentPos: 0,
      pageLimit: 10,
      tags: [],
      articles: [],
      inLoading: false,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.articleMgr = new article.ArticleMgr()
    this.initData()
    this.getArticles()
  },

  /**
   * 拉取文章
   */
  getArticles: function() {
    var that = this
    that.setData({
      inLoading: true
    })
    this.articleMgr.getArticles(this.data.currentPos, this.data.pageLimit, this.data.tags, function(articles) {
      var newArticles = that.data.articles
      for (var article of articles) {
        newArticles.push(article)
      }
      that.setData({
        currentPos: that.data.currentPos + articles.length,
        articles: newArticles,
        inLoading: false,
      })
    })
  },

  /**
   * 跳转到文章详情页面
   */
  showArticlePage: function(e) {
    var articleId = e.detail.articleId
    wx.navigateTo({
      url: `/pages/content/content?id=${articleId}`
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