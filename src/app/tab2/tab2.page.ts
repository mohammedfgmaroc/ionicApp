import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../services/city.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  cityId: string;
  cityDetails: any;

  constructor(private route: ActivatedRoute, private cityService: CityService, private navCtrl: NavController) {}

  ngOnInit() {
    this.cityId = this.route.snapshot.paramMap.get('id');
    if(this.cityId){
      this.cityService.getCityDetails(this.cityId).subscribe((details) => {
        this.cityDetails = details;
      });
    }
    else{
      this.cityService.getCityDetails('1').subscribe((details) => {
        this.cityDetails = details;
      });
    }
    
  }

  showOnMap() {
    this.navCtrl.navigateForward(['/tabs/tab3', this.cityId]);
  }
}
