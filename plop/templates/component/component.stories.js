import { storiesOf } from '@storybook/html';

let btns = {
    'template-component': '<template-component><vn-header size="1">TemplateComponent</vn-header></template-component>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/TemplateComponent', module)
    .add(
        'All Items',
        () => arr.join('<br /><br />')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}