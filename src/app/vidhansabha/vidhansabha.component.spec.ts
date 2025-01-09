import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidhansabhaComponent } from './vidhansabha.component';

describe('VidhansabhaComponent', () => {
  let component: VidhansabhaComponent;
  let fixture: ComponentFixture<VidhansabhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VidhansabhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VidhansabhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
