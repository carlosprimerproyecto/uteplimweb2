import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaPrincipalComponent } from './bandeja-principal.component';

describe('BandejaPrincipalComponent', () => {
  let component: BandejaPrincipalComponent;
  let fixture: ComponentFixture<BandejaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandejaPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BandejaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
