import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule, Platform } from '@ionic/angular';
import { Position, Geolocation } from '@capacitor/geolocation';
import { CommonModule } from '@angular/common';
import { SpeedometerAnalogComponent } from '../speedometer-analog/speedometer-analog.component';
import { App } from '@capacitor/app';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, SpeedometerAnalogComponent],
})
export class HomePage implements OnInit {
  speed: number = 190;
  longitude: number = 0;
  latitude: number = 0;
  constructor(private platform:Platform, private alertController:AlertController) { }

  ngOnInit() {
    this.updateSpeed();
  }

  updateSpeed() {
    setInterval(async () => {
      const position: Position = await Geolocation.getCurrentPosition();
      this.speed = position.coords.speed || 0; // Speed in meters per second
      this.speed = this.speed / 1000 * 60 * 60;
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    }, 500); // Update speed every 1 second
  }

  ionViewDidEnter() {
    this.platform.backButton.subscribeWithPriority(9999, async () => {
      const alert =  await this.alertController.create({
        header: 'Confirmation',
        message: 'Do you really want to exit the app?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            },
          },
          {
            text: 'Exit',
            handler: () => {
              App.exitApp(); // Close the app
            },
          },
        ],
      });
  
       alert.present();
    });
  }
}
