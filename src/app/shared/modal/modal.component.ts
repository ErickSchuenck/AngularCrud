import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Clinica } from 'src/app/views/home/home.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  element!: Clinica;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Clinica,
    public dialogRef: MatDialogRef<ModalComponent>
  ) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
