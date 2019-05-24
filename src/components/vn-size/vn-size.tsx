import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-size',
  styleUrl: 'vn-size.styl',
  shadow: true,
})
export class VnSize {
  /**
   * A test prop
   */
  @Prop() size: string;

  render() {
    if (this.size==="1") {
      return <h1><slot /></h1>
    }
    else if (this.size==="2") {
      return <h2><slor /></h2>
    }
    else if (this.size==="3") {
      return <h3><slot /></h3>
    }
    else if (this.size==="4") {
      return <h4><slot /></h4>
    }
    else if (this.size==="5") {
      return <h5><slot /></h5>
    }
    else {
      return <h6><slot /></h6>
    }
  }
}
