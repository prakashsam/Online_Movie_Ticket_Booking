import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modalexample',
  templateUrl: './modalexample.component.html',
  styleUrls: ['./modalexample.component.scss']
})
export class ModalexampleComponent implements OnInit {

  form: FormGroup;
  title: string;

  description: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalexampleComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.title = data.title;
  }

  send() {
    this.dialogRef.close(this.description);
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

}
