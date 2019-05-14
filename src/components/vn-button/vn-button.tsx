import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-button',
  styleUrl: 'vn-button.css',
  shadow: true,
})
export class VnButton {
  /**
   * A test prop
   */
  @Prop() value: string = 'Hello, World';
  @Prop() color: string = 'black';

  hostData() {
    let colors = ['black', 'grey', 'red'];
    if (!colors.includes(this.color)) this.color = 'black';
    return {};
  }
  render() {
    return <div>
      <input type="button" class={`vn-button vn-color-` + this.color} value={this.value}></input>
      <br></br>
    </div>;
  }
}
