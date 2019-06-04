import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

storiesOf('Components/MyStrammaOppArticle', module)
    .addParameters(params)
    .add('Default', () => `<my-stramma-opp-article></my-stramma-opp-article>`)
    .add(
        'With Input',
        () => `<my-stramma-opp-article test="John"></my-stramma-opp-article>`,
    );