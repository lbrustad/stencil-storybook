import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

storiesOf('Components/Typografiskala/VnHeader', module)
    .addParameters(params)
    .add('Default', () => `<vn-header></vn-header>`)
    .add(
        'With Input',
        () => `<vn-header size="1">Header 1</vn-header>`,
    );