# Webpack  

## Webpackとは  
- webpackはモジュールバンドラー  
　　**jsにはモジュール化の仕組みはない**  
　　Node.jsはモジュール化を`require`で実現。外部のjsを読み込めるように。  
　　　　→ node_modules  
　　jsだけでなく、image,cssもモジュール  
    cf) モジュールバンドラーについて  
　　　・ https://qiita.com/hashrock/items/f66da0f7f54e03493b31  
    ex) Browserify, RequireJS
- 様々なターゲットに使えるように変換する  
　　ex) electron, node, webworker  
  
## Concepts  
- Entry  
　　起点となるファイル  
- Output  
　　出力されるファイル  
- Loaders  
　　指定ファイルに任意の処理を加える。一つのタスク。  
- Plugins  
　　webpackの様々ないイベントをhookし、データを操作したり処理を実施する。ファイルを指定するloadersとは違う。  
- Mode  
　　none, development, productionがある。
　　modeに応じてパフォーマンス最適化や圧縮する。noneはそれらに関しては何もしない。
- Browser Compatibility
　　ブラウザの後方互換性

## Compiler and Compilation  
- Compiler  
　　run, watchと言った、ファイルの監視などを担う。  
- Compilation
　　ビルド、最適化を担うもの
## setup

```
# install webpack  
$ npm i -D webpack webpack-cli  
# install babel  
$ npm i -D @babel/core @babel/cli @babel/plugin-transform-arrow-functions
```  

**参考**  
https://youtu.be/gWzf-BEhTWk  
