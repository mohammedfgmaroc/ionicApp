import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  popularCities: any[] = [];

  constructor(
    private cityService: CityService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController // Inject ToastController
  ) {}

  ngOnInit() {
    this.cityService.getPopularCities().subscribe((cities) => {
      this.popularCities = cities;
    });
  }

  goToCityDetails(cityId: number) {
    this.router.navigate(['/tabs/tab2', cityId]);
  }

  // Function to navigate to the city-form page for editing
  editCity(cityId: number) {
    this.router.navigate(['/tabs/city-form', cityId]);
  }

  // Function to delete a city with confirmation toast
  async deleteCity(cityId: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this city?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete canceled');
          }
        },
        {
          text: 'Delete',
          handler: async () => {
            await this.cityService.deleteCity(cityId);
            this.presentToast('City deleted successfully');
          }
        }
      ]
    });

    await alert.present();
  }

  // Function to present a toast notification
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // 2 seconds
      position: 'bottom'
    });
    toast.present();
  }

  // Function to navigate to the city-form page for creating a new city
  goToCityForm() {
    this.router.navigate(['/tabs/city-form']);
  }
}
