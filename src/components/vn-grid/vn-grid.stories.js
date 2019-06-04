import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

let btns = {
    'Grid test': '<vn-grid><vn-content grid-start-4 grid-end-5 grid-end-span><h1>Overskrift</h1></vn-content></vn-grid>'
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