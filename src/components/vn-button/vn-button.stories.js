import { storiesOf } from '@storybook/html';

let btns = {
    'Input 1': '<vn-button box-size="small">Dette er en kjerneside </vn-button>',
    'Input 2': '<vn-button box-size="small">KJ</vn-button>',
    'Input 3': '<vn-button color="p4" box-size="large">Sitemap</vn-button>',
    'Input 4': '<vn-button color="p3" href="http://google.com" box-size="large">Vis formål</vn-button>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/VnButton', module)
    .add(
        'Default',
        () => arr.join('<br />')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}