import { storiesOf } from '@storybook/html';

storiesOf('Components/VnContent', module)
  .add('Default', () => `<vn-content></vn-content>`)
  .add(
    'With Input',
    () => `<vn-content test="John"></vn-content>`,
  );
