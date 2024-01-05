/// <reference types="@types/google.maps" />
import { Component, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChild('map', { read: ElementRef, static: false }) mapElement: ElementRef;
  map: any;
  cityId: string;
  cityDetails: any;
  backUrl: string;

  constructor(private route: ActivatedRoute, private cityService: CityService, private zone: NgZone, private router: Router) {}

  ngOnInit() {
    this.cityId = this.route.snapshot.paramMap.get('id');
    if(this.cityId){
      this.cityService.getCityDetails(this.cityId).subscribe((details) => {
        this.cityDetails = details;
        this.loadMap();
      });
    }
    else{
      this.cityId = '1'
      this.cityService.getCityDetails(this.cityId).subscribe((details) => {
        this.cityDetails = details;
        this.loadMap();
      });
    }
    this.backUrl = `/tabs/tab2/${this.cityId}`;
  }

  loadMap() {
    const latLng = new google.maps.LatLng(this.cityDetails.lat, this.cityDetails.lng);

    const mapOptions = {
      center: latLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // Add a marker for the city
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: this.cityDetails.name,
    });
  }
  goBack() {
    // Navigate back to the previous page
    this.router.navigateByUrl(this.backUrl);
  }
}
