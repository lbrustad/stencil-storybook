import { storiesOf } from '@storybook/html';

storiesOf('Components/MyBuild', module)

.add('Default', () => `
  <my-build>
    <vn-content>
      <vn-header size="3">Test</vn-header>
      <hr />
      <vn-content-title>
        <vn-button color="p2" box-size="large" bold="true">
          <vn-text>HJELP</vn-text>
        </vn-button>
      </vn-content-title>
      <hr />
      <vn-button>
        <vn-content-label>
          <vn-content-title>
            <vn-header>
              <vn-secondary-header>
                <vn-text>TEST MED ALLLLLLLT</vn-text>
              </vn-secondary-header>
            </vn-header>
          </vn-content-title>
        </vn-content-label>
      </vn-button>
    </vn-content>
  </my-build>
`);