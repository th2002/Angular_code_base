import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSubscribeComponent } from './banner-subscribe.component';

describe('BannerSubscribeComponent', () => {
  let component: BannerSubscribeComponent;
  let fixture: ComponentFixture<BannerSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerSubscribeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BannerSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
