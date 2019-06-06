import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

let btns = {
    'vn-checkbox': '<vn-checkbox><vn-header size="1">VnCheckbox</vn-header></vn-checkbox>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/VnCheckbox', module)
    .addParameters(params)
    .add(
        'All Items',
        () => arr.join('<br /><br />')
    );

for (let key in btns) {
    stories.add(key, () => btns[key]);
}