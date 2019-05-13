import { storiesOf } from '@storybook/html';

storiesOf('Components/TestButton', module)
  .add('Default', () => `<test-button></test-button>`)
  .add(
    'With Input',
    () => `<test-button test="John"></test-button>`,
  );
