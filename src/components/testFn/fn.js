const axios = require('axios');

const fns = {
    requestApi() {
        config = {
            method: "POST",
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJK",
            },            
            baseURL: "https://release-test1.opview.com.tw/insight/",
            url: "standard",
            timeout: 1200000,
            data: {
                module: { moduleName: "readKeywordSetting" },
                parameter: {}
            },
        }
        return axios(config)
            .then(res => ({ success: true, data: res.data }))
            .catch(err => ({ success: false, data: err }));
    },
    postApi(url, params) {
        return axios
            .post(url, params)
            .then(res => ({ success: res.data.success, data: res.data }))
            .catch(err => ({ success: false, data: err }));
    },
}

module.exports = fns; // 將函式給予匯出