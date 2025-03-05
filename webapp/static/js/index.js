function getDownloadLink() {
  // const params = GetRequest();
  let downloadUrl = `https://redirect.appmetrica.yandex.com/serve/533579022085433503`;
  // if (params.campaignName) {
  //   downloadUrl += `?campaign=${params.campaignName}(${params.campaignId})`;
  // }
  // if (params.adsetName) {
  //   downloadUrl += `&adgroup=${params.adsetName}(${params.adsetId})`;
  // }
  // if (params.adName) {
  //   downloadUrl += `&creative=${params.adName}(${params.adId})`;
  // }
  // if (params['fbclid']) downloadUrl += `&fbclid=${params['fbclid']}`;
  // if (params['fbpid']) downloadUrl += `&fbpid=${params['fbpid']}`;
  // if (params['fb_pixel_id']) downloadUrl += `&fb_pixel_id=${params['fb_pixel_id']}`;
  // if (params['fb_access_token']) downloadUrl += `&fb_access_token=${params['fb_access_token']}`;
  // 将所有参数最后再拼接到url中
  // downloadUrl += `&urlParams=${encodeURIComponent(location.search)}`;
  return downloadUrl;
}

function download() {
  const downloadUrl = getDownloadLink();
  window.location.href = downloadUrl
  var timer = setInterval(function() {
    if (window.location.href === downloadUrl) {
      clearInterval(timer);
    }
    if (window.location.href !== downloadUrl) {
      clearInterval(timer);
      let newWindow = window.open(downloadUrl);
      if (!newWindow || newWindow.closed || typeof newWindow.closed=='undefined') {
        window.addEventListener('load', () => {
          const downloadBtn = document.querySelector('.downloadBtn'); // 获取下载按钮元素
          downloadBtn.href = downloadUrl
          if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) { // 判断是否为 iOS 设备
            const event = new Event('click', { bubbles: true });
            downloadBtn.dispatchEvent(event);
            location.href = downloadUrl
          } else {
            downloadBtn.click(); // 非 iOS 设备自动触发点击事件
            window.location.href = downloadUrl
          }
        })
      }
    }
  }, 1000);
}

/**
 * 获取地址参数方法
 */
function GetRequest(str) {
    var url = str ? str : decodeURI(location.search); //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf('?') != -1) {
        url = url.substr(1);
    }
    if (url) {
        var strs = url.split('&');
        for (var i = 0; i < strs.length; i++) {
            var srtArry = strs[i].split('=');
            var y = srtArry.shift();
            theRequest[y] = unescape(srtArry.join('='));
        }
    }
    return theRequest;
}