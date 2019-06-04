import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

let btns = {
    'Grid test': '<vn-grid start="1, 4, 7"><vn-content><h1>Overskrift</h1></vn-content></vn-grid>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/VnGrid', module)
    .addParameters(params)
    .add(
        'All Items',
        () => arr.join('<br /><br /><br />')
    );

for (let key in btns) {
    stories.add(key, () => btns[key]);
}