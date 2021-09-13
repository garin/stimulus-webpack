module.exports = {
  mode: 'development',

  // メインとなる JavaScript ファイル（エントリーポイント）
  entry: './src/application.js',
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/public`,
    // 出力ファイル名
    filename: 'bundle.js'
  },
  devServer: {
  }
};
