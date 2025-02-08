import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { FluidModule } from 'primeng/fluid';
import { SelectModule } from 'primeng/select';

@Component({
    selector: 'app-upload-transfers',
    imports: [SelectModule, FileUploadModule, DatePickerModule, FormsModule, ButtonModule, FluidModule, ReactiveFormsModule],
    standalone: true,
    templateUrl: './upload-transfers.component.html',
    styleUrl: './upload-transfers.component.scss'
})
export class UploadTransfersComponent {
    formGroup: FormGroup;

    constructor() {
        this.formGroup = new FormGroup({
            date: new FormControl(),
            file: new FormControl(null)
        });
    }

    uploadFile(event: any){
      console.log(event);
    
      // this.formGroup.patchValue({ file: event.files[0] });
    }

    onSelect(event: any){
      console.log(event);
      
    }

    onSubmit() {
      if (this.formGroup.valid) {
        console.log('Form Submitted', this.formGroup.value);
        // Add your form submission logic here
      }
      console.log(this.formGroup.valid);
      
    }
  
    onClear(fileUpload: FileUpload) {
      this.formGroup.reset();
      fileUpload.clear()
    }
}
