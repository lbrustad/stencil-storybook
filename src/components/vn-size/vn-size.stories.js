import { storiesOf } from '@storybook/html';

storiesOf('Components/Typografiskala/VnSize', module)
  .add('Default', () => `<vn-size></vn-size>`)
  .add(
    'With Input',
    () => `<vn-size size="1">Header 1</vn-size>`,
  );
