import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTransfersComponent } from './upload-transfers.component';

describe('UploadTransfersComponent', () => {
  let component: UploadTransfersComponent;
  let fixture: ComponentFixture<UploadTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadTransfersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
