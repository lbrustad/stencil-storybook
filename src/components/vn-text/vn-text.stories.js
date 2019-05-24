import { storiesOf } from '@storybook/html';

storiesOf('Components/Typografiskala/VnText', module)
  .add('Default', () => `<vn-text></vn-text>`)
  .add(
    'With Input',
    () => `<vn-text test="John"></vn-text>`,
  );
