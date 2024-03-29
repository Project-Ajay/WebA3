import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  componentType:string = "Header";
  project:string = "Assignment 3";
  currentData : Date = new Date();


}
