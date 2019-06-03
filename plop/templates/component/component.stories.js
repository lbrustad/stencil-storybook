import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

let btns = {
    'template-component': '<template-component><vn-header size="1">TemplateComponent</vn-header></template-component>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/TemplateComponent', module)
    .addParameters(params)
    .add(
        'All Items',
        () => arr.join('<br /><br />')
    );

for (let key in btns) {
    stories.add(key, () => btns[key]);
}