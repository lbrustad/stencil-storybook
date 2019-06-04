import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

let btns = {
    'H1 / Apercu Light': '<h1>H1 / Apercu Light</h1>',
    'H2 / Apercu Regular': '<h2>H2 / Apercu Regular</h2>',
    'H3 / Apercu Regular': '<h3>H3 / Apercu Regular</h3>',
    'H4 / Apercu Regular': '<h4>H4 / Apercu Regular</h4>',
    'H5 / Apercu Regular': '<h5>H5 / Apercu Regular</h5>',
    'H6 / Apercu Medium': '<h6>H6 / Apercu Medium</h6>',
    'Body 1 / Apercu regular': '<span class="body-en">Body 1 / Apercu regular</span>',
    'Body 2 / Apercu Regular': '<span class="body-to">Body 2 / Apercu Regular</span>',
    'Subtitle 1 / Apercu Regular': '<span class="subtitle-en">Subtitle 1 / Apercu Regular</span>',
    'Subtitle 2 / Apercu Medium': '<span class="subtitle-to">Subtitle 2 / Apercu Medium</span>',
    'Button / Apercu Medium': '<span class="button">Button / Apercu Medium</span>',
    'Caption / Apercu Regular': '<span class="caption">Caption / Apercu Regular</span>',
    'Overline / Apercu Medium': '<span class="overline">Overline / Apercu Medium</span>',
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/Typografiskala/VnContent', module)
    .addParameters(params)
    .add(
        'All Items',
        () => `<vn-content>${arr.join('<hr />')}</vn-content>`
    );

for (let key in btns) {
    stories.add(key, () => `<vn-content>${btns[key]}</vn-content>`);
}