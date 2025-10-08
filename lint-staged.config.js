module.exports = {
  '**/*.(ts|tsx)': () => 'yarn tsc',

  '**/src/**/*.{js,ts,tsx}': filenames => [
    `yarn run eslint ${filenames.join(' ')}`,
    `yarn run prettier ${filenames.join(' ')}`,
  ],

  '**/src/**/*.{css,scss}': filenames => [
    `yarn run stylelint ${filenames.join(' ')}`,
    `yarn run prettier ${filenames.join(' ')}`,
  ],

  '**/*.(md|json)': filenames =>
    `yarn run prettier ${filenames.join(' ')}`,
};