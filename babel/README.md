# Babel
<br/>

## 構成  
  
- @babel/cli  
　　実行コマンドを用意する。内部的には@babel/coreに依存。  
- @babel/core  
　　@babel/parser, @babel/traverse, @babel/generatorなどを使用して、設定の読み込みやコードの変換、生成を行う  
- Babel Plugins  
　　コードに変更を加える。今回は@babel/plugins-transform-arrow-functionsを使用する。  
- Babel Presets  
　　Babel Pluginのセット、@babel/preset-envや@babel/preset-reactなどを指す。今回は使用しない  

<br/>

## コードをどのように変換するのか  

### 3つの段階  
  
- **Parsing (@babel/parser)**  
　ソースコードをAbstract Syntax Tree (AST)に変換する。  
  　AST:Objectみたいなデータ構造  
　　cf) [AST Explorer](https://astexplorer.net/)  
- **Transformation**  
  ASTを変換する。Babel Pluginの役割。  
- **Code Generate (@babel/generator)**  
  ASTをソースコードに変換  

### NOTE
  
- @babel/coreにはソースコードを変更する機能はない。  
- コードをASTに変換するだけ。  
- 変更したASTに対して変更を行うのはBabel Plugin  
- `.babelrc`はコメントアウトできないから`babel.config.js`の方が使いやすい  

## setup  

```  
# install packages  
$ npm i --save-dev @babel/core @babel/cli @babel/plugin-transform-arrow-functions

# compile code with Babel  
$ npx babel [filename].js --out-dir lib
```
  
**参考**  
https://youtu.be/gWzf-BEhTWk  
