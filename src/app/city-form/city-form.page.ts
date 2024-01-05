import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.page.html',
  styleUrls: ['./city-form.page.scss'],
})
export class CityFormPage implements OnInit {
  cityForm: FormGroup;
  cityId: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cityService: CityService,
    private toastController: ToastController 
  ) {}

  ngOnInit() {
    this.cityId = this.route.snapshot.paramMap.get('id');
    this.initializeForm();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }

  initializeForm() {
    this.cityForm = this.formBuilder.group({
      name: ['', Validators.required],
      province: ['', Validators.required],
      photo1: ['', Validators.required],
      photo2: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      description: ['', Validators.required],
    });

    if (this.cityId) {
      // If editing, fetch city details and update the form
      this.cityService.getCityDetails(this.cityId).subscribe((cityDetails) => {
        this.cityForm.patchValue(cityDetails);
      });
    }
  }
  generateUniqueId(): number {
    // Get the current timestamp
    const timestamp = new Date().getTime();
  
    // Generate a random number (between 1 and 1000)
    const random = Math.floor(Math.random() * 1000) + 1;
  
    // Combine timestamp and random number to create a unique ID
    const uniqueId = parseInt(`${timestamp}${random}`);
  
    return uniqueId;
  }
  
  onSubmit() {
    if (this.cityForm.valid) {
      if (this.cityId) {
        // Update existing city
        this.cityService.updateCity(this.cityId, this.cityForm.value).then(() => {
          this.presentToast('City updated successfully'); // Display toast
          this.router.navigate(['/tabs/tab1']);
        });
      } else {
        // Manually assign a numeric ID
        const numericId = this.generateUniqueId();
  
        // Add new city with the manually assigned numeric ID
        this.cityService.addCity({ ...this.cityForm.value, id: numericId }, numericId).then(() => {
          this.presentToast('City added successfully');
          this.router.navigate(['/tabs/tab1']);
        });
      }
    }
  }
  
  
}
