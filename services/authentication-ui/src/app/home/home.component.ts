import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public form: FormGroup;
  public submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;

    this.http.post('/api/user/login', this.form.getRawValue()).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken.token);
      window.location.href = '/research/';
    });
  }
}
