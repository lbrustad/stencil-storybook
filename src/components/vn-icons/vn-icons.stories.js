import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

let btns = {
    'Kryss': '<vn-icons vn-type="x"></vn-icons>',
    'Plus': '<vn-icons vn-type="+"></vn-icons>',
    'Minus': '<vn-icons></vn-icons>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/VnIcons', module)
    .addParameters(params)
    .add(
        'All Items',
        () => arr.join('<br /><br /><br />')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}