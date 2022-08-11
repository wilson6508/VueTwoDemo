const fn = require("./fn");

test("API測試", async () => {
    const postBody = {
        moduleName: "stock_read_usa_price_log",
        parameter: "all;all",
    };
    const response = await fn.postApi("http://127.0.0.1:8087/databaseApi/normal", postBody);
    console.log(response.data.result[0]);
    // expect(response.data.result.length).toBe(352);
    // expect(response.success).toBeFalsy();
});

// test("promise測試", async () => {
//     const response = await fn.requestApi();
//     console.log(response.data.responseInfo);
//     console.log(response.data.result.topics.length);
//     expect(response.data.responseInfo.errorCode).toBeFalsy();
// });