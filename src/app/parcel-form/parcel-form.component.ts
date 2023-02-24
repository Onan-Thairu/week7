import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParcelService } from '../parcel.service';

@Component({
  selector: 'app-parcel-form',
  templateUrl: './parcel-form.component.html',
  styleUrls: ['./parcel-form.component.css']
})
export class ParcelFormComponent implements OnInit {

  parcelForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private parcelService: ParcelService) { }

  ngOnInit(): void {
    this.parcelForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^\\w+@travel\\.com$')]],
      destination: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.parcelForm.value);
    this.parcelService.addParcel(this.parcelForm.value)
  }

}