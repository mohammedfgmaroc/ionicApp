import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityFormPage } from './city-form.page';

describe('CityFormPage', () => {
  let component: CityFormPage;
  let fixture: ComponentFixture<CityFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CityFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
