import { storiesOf } from '@storybook/html';

storiesOf('Components/Typografiskala/VnHeader', module)
    .add('Default', () => `<vn-header></vn-header>`)
    .add(
        'With Input',
        () => `<vn-header size="1">Header 1</vn-header>`,
    );