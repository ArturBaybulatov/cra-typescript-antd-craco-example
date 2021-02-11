const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              '@font-size-base': '16px',
              '@link-hover-color': '#7389ff',
              '@primary-color': '#1d1ba4',
            },
          },
        },
      },
    },
  ],
};
