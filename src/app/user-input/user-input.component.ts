import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  userDetails: any[] = [
    { username: 'Ameer Mohammed', adId: 'gssamoha' },
    { username: 'Kishorekumar Selvaraj', adId: 'gsskisel' },
    { username: 'Sabarish R', adId: 'gssrsaba' },
    { username: 'Sathish K', adId: 'gssiiikh' },
    { username: 'Mukesh R', adId: 'gssmuker' }
  ];

  attendance: any[] = [
    'Log In-WFH',
    'Log In-Remote Connectivity',
    'Log Out-WFH',
    'Log Out-Remote Connectivity',
    'PTO-On Leave',
    'Not Connected-User'
  ];

  gssid: string = 'None';

  currentTime:any = 'None';

  constructor() {}

  ngOnInit(): void {}

  updateInfo(index) {
    let indexVal = index.target.value;

    this.gssid = this.userDetails[indexVal].adId;
  }

  setTime()
  {
    let time = new Date();
    
    let timeValue= time.toLocaleString('en-IN',{hour:'numeric',minute:'numeric',hour12:true})

    this.currentTime = timeValue;
    
    
  }
}
