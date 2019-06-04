import { storiesOf } from '@storybook/html';

let btns = {
    'Label uten title': '<vn-input placeholder="Placeholder text"></vn-input>',
    'Label med title': '<vn-input label="Input label" placeholder="Placeholder text"></vn-input>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/VnInput', module)
    .add(
        'All Items',
        () => arr.join('<br /><br />')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}