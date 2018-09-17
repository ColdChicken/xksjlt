const util = require("../utils/util.js")

class ArticleMgr {
  constructor() {

  }

  getArticles(currentPos, pageLimit, tags, callback) {
    console.log(`开始获取文章，当前位置 ${currentPos}， 获取数目 ${pageLimit}， tags: ${tags}`)
    util.request("/v1/api/article/listbyfilter", // URL
                 "POST", // METHOD
                 {
                   tags: tags,
                   currentPos: currentPos,
                   requestCnt: pageLimit,
                 }, // DATA
                 false, // AUTH
                 function(res) {
                   callback(res)
                 }) // SUCCESS
  }
}

module.exports.ArticleMgr = ArticleMgr

