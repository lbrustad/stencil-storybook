import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-input',
  styleUrl: 'vn-input.styl',
})
export class VnInput {
  @Prop() label: string = "";
  @Prop() placeholder: string;
  
  render() {
    if (this.label.length >= 1) return (
      <div class="input">
        <label>{this.label}</label>
        <input placeholder={this.placeholder}>
        </input>
      </div>
    );
    else return (
      <input placeholder={this.placeholder} class="input"></input>
    )
  }
}
