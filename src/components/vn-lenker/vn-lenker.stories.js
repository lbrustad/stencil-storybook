import { storiesOf } from '@storybook/html';

let btns = {
  'Lenke med hover': '<vn-lenker text="Dette er en lenke" has-hover="true"></vn-lenker>'
};

let arr = [];
for (let key in btns) {
  arr.push(btns[key]);
}

const stories = storiesOf('Components/VnLenker', module)
  .add(
      'All Items',
      () => arr.join('<br /><br /><br />')
  );
for (let key in btns) {
  stories.add(key, () => btns[key]);
}
