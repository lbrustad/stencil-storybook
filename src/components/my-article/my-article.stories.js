import { storiesOf } from '@storybook/html';

storiesOf('Components/MyArticle', module)
  .add('Default', () => `<my-article></my-article>`)
  .add(
    'With Input',
    () => `<my-article test="John"></my-article>`,
  );
