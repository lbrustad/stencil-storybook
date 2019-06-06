       import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-icons',
  styleUrl: 'vn-icons.styl',
})
export class VnIcons {
 
  @Prop() vnType: string = "-";

  render() {
    var path;
    switch (this.vnType.toLowerCase()) {
      case 'x':
        path = "M 0.75 0 L8 7.25 L15.25 0 L16 0.75 L8.75 8 L16 15.25 L15.25 16 L8 8.75 L0.75 16 L0 15.25 L7.25 8 L0 0.75";
        break;
      case '+':
        path = "M0 7.5 L7.5 7.5 L7.5 0 L8.5 0 L8.5 7.5 L16 7.5 L16 8.5 L8.5 8.5 L8.5 16 L7.5 16 L7.5 8.5 L0 8.5";
        break;
      default: 
        path = "M 0 8 L0 9 L16 9 L16 8 L16 8";
    }
    return  (
      <svg width="16" viewBox="0 0 16 16">
        <path d={path}/>
      </svg>
    )
  }
}
