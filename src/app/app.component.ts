import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('form') submitForm: NgForm;
  defaultStatus = 'stable'

  signUpForm: FormGroup;

  bannedProjectNames = ['test', 'Test'];

  project = {
    projectname: '',
    email: '',
    status: ''
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.signUpForm = new FormGroup({
      'projectname': new FormControl(null, [Validators.required, this.bannedNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('stable', Validators.required),


    })
  }
  onSubmit() {

    this.project.projectname = this.signUpForm.value.projectname;
    this.project.email = this.signUpForm.value.email;
    this.project.status = this.signUpForm.value.status;

  }
  bannedNames(control: FormControl): { [s: string]: boolean } {

    if (!this.bannedProjectNames.indexOf(control.value)) {
      return { 'nameIsBanned': true };

    } else { return null; }

  }

}

