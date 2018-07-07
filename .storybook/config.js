import { configure, addDecorator } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';

import '!style-loader!css-loader!normalize.css';

addDecorator(backgrounds([
  { name: 'White', value: '#ffffff', default: true },
  { name: 'Dark', value: '#333333', },
]));

function loadStories() {
  const req = require.context('../src/', true, /\.story\.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
