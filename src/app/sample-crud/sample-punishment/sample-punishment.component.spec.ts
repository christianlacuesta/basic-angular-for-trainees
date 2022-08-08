import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePunishmentComponent } from './sample-punishment.component';

describe('SamplePunishmentComponent', () => {
  let component: SamplePunishmentComponent;
  let fixture: ComponentFixture<SamplePunishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePunishmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePunishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
