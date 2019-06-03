import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

storiesOf('Components/MyArticle', module)
    .addParameters(params)
    .add('Default', () => `<my-article></my-article>`)
    .add(
        'With Input',
        () => `<my-article test="John"></my-article>`,
    );