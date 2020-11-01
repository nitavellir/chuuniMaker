# chuuniMaker

## 動作環境

* Slack → AWS API Gateway → AWS Lambda

## API Gateway設定

* POSTメソッド
* 統合リクエストのマッピングテンプレート
  * パススルー `テンプレートが定義されていない場合 (推奨)` に設定
  * Content-Typeを `application/x-www-form-urlencoded` に設定
  * テンプレートを `{"body":$input.json('$')}` に設定
* 統合レスポンスのマッピングテンプレート
  * Content-Typeを `application/json` に設定
  * テンプレートを `$input.path('$')` に設定
* メソッドレスポンス
  * 200のレスポンス本文のContent-Typeを `application/json` に設定
