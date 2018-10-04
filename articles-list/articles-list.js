// articles-list/articles-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articles: {
      type: Array,
      value: []
    },
    inLoading: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    lower: function(e) {
      this.triggerEvent("refresh", {}, {})
    },
    tap: function(e) {
      var articleId = e.currentTarget.dataset.articleid
      this.triggerEvent("showContent", {articleId: articleId}, {})
    }
  }
})
