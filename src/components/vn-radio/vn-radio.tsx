import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-radio',
  styleUrl: 'vn-radio.css',
})
export class VnRadio {
  @Prop() props: string;
  @Prop() name: string = "radio";

  render() {
    return (
      <label class="radio">
        <input type="radio" name={this.name} />
        <span><slot /></span>
      </label>
    );
  }
}
