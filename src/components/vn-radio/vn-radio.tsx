import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-radio',
  styleUrl: 'vn-radio.css',
})
export class VnRadio {
  @Prop() color: string;
  @Prop() name: string = "radio";

  render() {
    return (
      <label class={"radio" + (this.color == 'grey' ? ' grey' : '')}>
        <input type="radio" name={this.name} />
        <span><slot /></span>
      </label>
    );
  }
}
