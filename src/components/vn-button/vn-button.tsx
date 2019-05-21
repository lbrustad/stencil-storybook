import { Component, Prop } from "@stencil/core";

@Component({
  tag: "vn-button",
  styleUrl: "vn-button.styl",
  shadow: true
})
export class VnButton {
  /**
   * A test prop
   */
  @Prop() color: string = "p3";
  @Prop() boxSize: string = "medium";
  @Prop() href: string = "#";
  @Prop() bold: string = "false";

  render() {
    return [
      <a
        href={this.href}
        class={
          `btn color-` +
          this.color +
          ` size-` +
          this.boxSize +
          (this.bold == "true" ? " bold" : "")
        }
      >
        <slot />
      </a>
    ];
  }
}
