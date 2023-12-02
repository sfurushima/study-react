# 環境設定
## ブランチ構成
main...masterブランチ（派生ブランチの元となるブランチ）

└ feature/...勉強ごとにブランチ作成を行う。

## node-versionエラー
nodeインストール時に、package.jsonで指定が古いと脆弱性のため警告が出る
```
246 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```
解決方法は、脆弱性の指定バージョンを更新することで解決できる

[npm installlをすると出てくる警告の解消](https://qiita.com/Aiga/items/8947b9bbc595872c789b)

[npm パッケージのバージョンアップと脆弱性対応](https://rinoguchi.net/2021/11/npm-version-up-and-fix-audit.html)


## 使用するソフトウェア
- Chrome - ブラウザ
https://www.google.com/intl/ja/chrome/

- Node.js - JavaScriptの実行環境
https://nodejs.org/ja/

- VSCode - コードエディタ
https://code.visualstudio.com/


## おすすめの拡張機能
- Prettier - Code formatter ★  
  `esbenp.prettier-vscode`

  様々な言語の整形を行ってくれる  

- Live Server ★  
  `ritwickdey.LiveServer`  

  簡易的なサーバーを簡単に起動することができる

- Auto Rename Tag  
  `formulahendry.auto-rename-tag`  

  開始タグを編集すると、閉じタグを自動的に変更してくれる

- ES7+ React/Redux/React-Native    
  `dsznajder.es7-react-js-snippets`  

  Reactのスニペット(ショートカット)を使えるようにする

