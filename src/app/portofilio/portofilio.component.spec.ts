import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofilioComponent } from './portofilio.component';

describe('PortofilioComponent', () => {
  let component: PortofilioComponent;
  let fixture: ComponentFixture<PortofilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofilioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortofilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
