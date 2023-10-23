import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  leaveType!: number;
  leaveDays!: number;
  leaveTypes: any[] = [];
  isLeaveDaysEnabled: boolean = false;

  constructor() {
    // Initialize leaveTypes with your data
    this.leaveTypes = [
      { id: 1, name: 'Sick Leave' },
      { id: 2, name: 'Vacation' },
      { id: 3, name: 'Maternity Leave' },
      { id: 4, name: 'Paternity Leave' }
    ]
  }

  changeInputValue() {
    if (this.leaveType === 3 || this.leaveType === 4 || this.leaveType === 2) {
      // Enable the input field
      this.isLeaveDaysEnabled = true;

      // Set the default value or any specific value
      this.leaveDays = 0;
    } else {
      // Disable the input field and reset the value
      this.isLeaveDaysEnabled = false;
      this.leaveDays = 0;
    }
  }
}