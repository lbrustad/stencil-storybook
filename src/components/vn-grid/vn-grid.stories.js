import { storiesOf } from '@storybook/html';

let btns = {
    'Grid test': '<vn-grid><vn-content><h1>Overskrift</h1></vn-content></vn-grid>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/VnGrid', module)
    .add(
        'All Items',
        () => arr.join('<br /><br /><br />')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}
