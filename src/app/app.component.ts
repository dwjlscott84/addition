import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addition';
  sum: number = 0;
  firstNumber: number = 0;
  secondNumber: number = 0;

  sumNumbers() {
    this.sum = this.firstNumber + this.secondNumber;
  }

  resetNumbers() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.sumNumbers();
  }
}
