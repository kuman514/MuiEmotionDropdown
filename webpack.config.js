module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
