import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { Assignment1Component } from './assignment1/assignment1.component';

const routes: Routes = [
  { path: 'assignment1', component: Assignment1Component },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use RouterModule.forRoot() to configure your routes
  exports: [RouterModule], // Export RouterModule for use in other parts of your application
})
export class AppRoutingModule { }
