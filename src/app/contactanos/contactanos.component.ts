import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
}
