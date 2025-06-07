import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../env/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private baseurl= environment.apiUrl;
  private HttpClient = inject(HttpClient);
  
}
