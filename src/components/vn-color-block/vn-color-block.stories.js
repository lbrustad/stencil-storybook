import { storiesOf } from '@storybook/html';

let btns = {
    'Primary 1': '<vn-color-block>p1</vn-color-block>',
    'Primary 2': '<vn-color-block bg="2">p2</vn-color-block>',
    'Primary 3': '<vn-color-block bg="3">p3</vn-color-block>',
    'Grayscale 1': '<vn-color-block type="g">g1</vn-color-block>',
    'Grayscale 2': '<vn-color-block type="g" bg="2">g2</vn-color-block>',
    'Grayscale 3': '<vn-color-block type="g" bg="3">g3</vn-color-block>',
    'Grayscale 4': '<vn-color-block type="g" bg="4">g4</vn-color-block>',
    'Grayscale 5': '<vn-color-block type="g" bg="5">g5</vn-color-block>',
    'Grayscale 6': '<vn-color-block type="g" bg="6">g6</vn-color-block>',
    'Grayscale 7': '<vn-color-block type="g" bg="7">g7</vn-color-block>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/VnColorBlock', module)
    .add(
        'All Items',
        () => arr.join('<br />')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}