import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import { Button } from './button';

storiesOf('ui/atoms', module)
  .addDecorator(centered)
  .add('Button', () => (
    <Button onClick={action('default')}></Button>
  ))