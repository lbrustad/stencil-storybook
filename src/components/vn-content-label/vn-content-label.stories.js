import { storiesOf } from '@storybook/html';

let btns = {
    'Large label': '<vn-content-label box-size="small">Dette er en kjerneside</vn-content-label>',
    'Small label': '<vn-content-label box-size="small">KJ</vn-content-label>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/VnContentLabel', module)
    .add(
        'All Items',
        () => arr.join('<br /><br /><br />')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}