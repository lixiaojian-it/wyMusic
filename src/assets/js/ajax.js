export function ajax(api,method,data=''){
  let promise = new Promise((resolve, reject) => {
    wx.request({
      url: 'http://47.100.49.193:3000/search',
      data: data,
      method: method,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: res => {
        if (res.data.code == 200) {
          resolve(res)
        }
        else {
          wx.showModal({
            title: '提示',
            showCancel: false,
            content: res.data.msg,
          })
        }
      },
      fail: err => {
        reject(err)
      }
　　})
　})   
return promise
}
