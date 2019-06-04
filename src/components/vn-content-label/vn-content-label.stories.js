import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

let btns = {
    'Large label': '<vn-content-label box-size="small">Dette er en kjerneside</vn-content-label>',
    'Small label': '<vn-content-label box-size="small">KJ</vn-content-label>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/Ikoner, knapper & labels/VnContentLabel', module)
    .addParameters(params)
    .add(
        'All Items',
        () => arr.join('<br /><br /><br />')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}