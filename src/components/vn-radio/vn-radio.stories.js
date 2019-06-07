import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

let btns = {
    'Default': '<vn-radio></vn-radio> ',
    'Grey': '<vn-radio color="grey"></vn-radio>',
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/VnRadio', module)
    .addParameters(params)
    .add(
        'All Items',
        () => arr.join('<br /><br />')
    );

for (let key in btns) {
    stories.add(key, () => btns[key]);
}