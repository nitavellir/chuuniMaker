//const nomlish = require("nomlish");
exports.handler = async (event, context) => {

    /*const response = {

        foo: 'Hello, world',
        bar: 'Goodbye, world',
        event: event, // 呼び出し元からの情報を見たいので出力に含める
        //context: context, // コンテキスト情報を見たいので出力に含める

        // Amazon API Gateway を利用して Lambda 関数を WebAPI 化するときは
        // 必要に応じて isBase64Encoded, statusCode, headers, body をセットする。
        // 今回は不要だがサンプル的にセットしておく。
        statusCode: 200, // HTTP 200 OK
        headers: {
            'x-custom-header': 'my custom header value'
        },
        body: JSON.stringify({
            foo: 'Hello, world',
            bar: 'Goodbye, world',
        })
    };*/
    /*const beforeText = "私は東京都出身のエンジニアです。筋トレが趣味です。";
    const level = 1;*/
    const response = "";
    /*nomlish.translate(beforeText, level)
        .then((nomlishText) => {*/
            response = "nomlishText";
        //});

    return response;
};
