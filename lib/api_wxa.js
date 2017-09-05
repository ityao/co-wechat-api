'use strict';

const { postJSON } = require('./util');

/**
 * 发送模板消息
 * Examples:
 * {
  "touser": "OPENID",  
  "template_id": "TEMPLATE_ID", 
  "page": "index",          
  "form_id": "FORMID",         
  "data": {
      "keyword1": {
          "value": "339208499", 
          "color": "#173177"
      }, 
      "keyword2": {
          "value": "2015年01月05日 12:30", 
          "color": "#173177"
      }, 
      "keyword3": {
          "value": "粤海喜来登酒店", 
          "color": "#173177"
      } , 
      "keyword4": {
          "value": "广州市天河区天河路208号", 
          "color": "#173177"
      } 
  },
  "emphasis_keyword": "keyword1.DATA" 
}
 * ```
 * var templateId: '模板id';
 * ```
 * @param {String} openid 收消息用户的openid
 * @param {String} template_id 模板ID
 * @param {String} page 点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转。
 * @param {String} form_id 表单提交场景下，为 submit 事件带上的 formId；支付场景下，为本次支付的 prepay_id
 * @param {Object} data 渲染模板的数据
 * @param {String} color 文字颜色
 * @param {String} emphasis_keyword 模板需要放大的关键词，不填则默认无放大
 */
exports.sendWXATemplate = async function (openid, template_id, page, form_id, data, emphasis_keyword) {
  const { accessToken } = await this.ensureAccessToken();
  var apiUrl = this.prefix + 'message/wxopen/template/send?access_token=' + accessToken;
  var template = {touser: openid,template_id,page,form_id,data,emphasis_keyword};
  return this.request(apiUrl, postJSON(template));
};
