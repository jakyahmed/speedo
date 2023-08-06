import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speedometer-analog',
  templateUrl: './speedometer-analog.component.html',
  styleUrls: ['./speedometer-analog.component.scss'],
  standalone:true, 
  imports:[CommonModule]
})
export class SpeedometerAnalogComponent  {

  @Input() speed: number=0;
  rotation:number=0;

  // get lineX2() {
  //   const angle = (this.speed / 220) * 270 -135; // Adjust scale as needed
  //   return 50 + Math.sin(this.degreesToRadians(angle)) * 40; // Adjust length and center point
  // }

  // get lineY2() {
  //   const angle = (this.speed / 220) * 270 -135; // Adjust scale as needed
  //   return 50 - Math.cos(this.degreesToRadians(angle)) * 40; // Adjust length and center point
  // }

  // private degreesToRadians(degrees: number): number {
  //   return (degrees * Math.PI) / 180;
  // }
  get rotasi(){
    return this.speed / 190 * 255 - 128;
  }

}
