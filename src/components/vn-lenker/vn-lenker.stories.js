import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

let btns = {
    'Lenke med hover': '<vn-lenker text="Dette er en lenke" has-hover="true"></vn-lenker>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/VnLenker', module)
    .addParameters(params)
    .add(
        'All Items',
        () => arr.join('<br /><br /><br />')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}