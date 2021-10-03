module.exports = {
  root: true,
  extends: [
    'prettier',
    'react-app',
    'plugin:import/typescript',
    'plugin:import/warnings',
  ],
  env: {
    jest: true,
  },
};
