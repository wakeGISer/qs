function Share() {
    this.config = Object.assign({
        // 分享配置
        shareSetting: {
            // 标题
            title: '郑媛, ',
            // 描述
            desc: '',
            // 链接
            link: '',
            // 图片
            imgUrl: ''
        },
        // 分享成功回调
        success: null,
        // 取消分享回调
        cancel: null
    }, config);

    this.setConfig({

    });
}

Share.prototype.setConfig = function (configData) {
    window.wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数。
        appId: configData.appId, // 必填，公众号的唯一标识
        timestamp: configData.timestamp, // 必填，生成签名的时间戳
        nonceStr: configData.nonceStr, // 必填，生成签名的随机串
        signature: configData.signature, // 必填，签名，见附录1
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone'
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });

    var setting = {
        title: this.config.shareSetting.title,
        desc: this.config.shareSetting.desc,
        link: this.config.shareSetting.link,
        imgUrl: this.config.shareSetting.imgUrl,
        success: function() {
        },
        cancel: function() {

        }
    };
    window.wx.ready(() => {
        window.wx.onMenuShareTimeline(setting);
        window.wx.onMenuShareAppMessage(setting);
        window.wx.onMenuShareQQ(setting);
        window.wx.onMenuShareWeibo(setting);
        window.wx.onMenuShareQZone(setting);
    });
}