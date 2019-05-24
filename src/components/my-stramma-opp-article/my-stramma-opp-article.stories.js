import { storiesOf } from '@storybook/html';

storiesOf('Components/MyStrammaOppArticle', module)
  .add('Default', () => `<my-stramma-opp-article></my-stramma-opp-article>`)
  .add(
    'With Input',
    () => `<my-stramma-opp-article test="John"></my-stramma-opp-article>`,
  );
