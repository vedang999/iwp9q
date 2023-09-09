import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Import the data service
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  qaList: any[] = []; // Initialize the variable

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getJsonData().subscribe(
      (data: any) => {
        this.qaList = data;
        console.log('Fetched data:', data); // Log the fetched data
      },
      (error) => {
        console.error('Error fetching data:', error); // Log any errors
      }
    );
  }
}
