import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-lenker',
  styleUrl: 'vn-lenker.css',
})
export class VnLenker {
  /**
   * A test prop
   */
  @Prop() text!: string;
  @Prop() href: string = "#";
  @Prop() hasHover: string = "false";

  render() {
    let halfLenght: number = Math.round(this.text.length/2);
    let halfString: string = this.text.substring(0, halfLenght);
    let restString: string = this.text.substring(halfLenght);
    return (
      <a class={'lenker' + (this.hasHover === "true" ? " hover" : "")}>
        {halfString}
        <span class="underline">{restString}</span>
      </a>
    )
  }
}
