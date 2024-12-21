import { Component } from '@angular/core';
import { StrechingService } from '../services/streching.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Streching } from '../model/streching';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder,private service:StrechingService) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(8)],
      ],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
  adduser(): void {
    if (this.registrationForm.valid) {
      const formData: Streching = {
        id: undefined,
        src: '',
        alt: '',
        button: '',
        title: '',
        thumbnail: '',
        banner: '',
        headings: '',
        description: '',
        subdescription: '',
        price: 0,
        rating: 0,
        username: this.registrationForm.value.firstName,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
      };
  
      this.service.addUser(formData).subscribe({
        next: (response) => {
          alert('User added successfully!');
          console.log('Response:', response);
          this.registrationForm.reset();
        },
        error: (err) => {
          console.error('Error while adding user:', err);
          alert('Failed to add user. Please try again.');
        },
      });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
  
  
}
