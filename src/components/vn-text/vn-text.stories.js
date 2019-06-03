import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

storiesOf('Components/Typografiskala/VnText', module)
    .addParameters(params)
    .add('Default', () => `<vn-text>Test</vn-text>`);