import { storiesOf } from '@storybook/html';

storiesOf('Components/VnIcons', module)
  .add('Default', () => `<vn-icons></vn-icons>`)
  .add(
    'With Input',
    () => `<vn-icons test="John"></vn-icons>`,
  );
