import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

const stories = storiesOf('Components/MyBuild', module).addParameters(params);

const importAll = r => r.keys();
const context = require.context('./html', true, /\.html$/i);

for (const file of importAll(context)) {
    console.log(file);
    const name = file.replace(/^\.\/|\.html$/ig, '');
    const content = require(`./html/${name}.html`);
    stories.add(name, () => content);
}