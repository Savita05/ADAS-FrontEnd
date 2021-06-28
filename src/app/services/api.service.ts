import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) {
    this.Login_user();
   }

  private user = new BehaviorSubject<any>(null);

  Currentuser = this.user.asObservable();

  Login_user() {
    this.user.next(JSON.parse(localStorage.getItem('users')));
}
Gettask_list(): Observable<any>{
return this._http.get("http://localhost:8000/getTaskFilesList");
}

login(user): Observable<any>{
  console.log(user);
  return this._http.post("http://127.0.0.1:8000/loginuser/", user);
  }
GetObjectLevels(): Observable<any>{
    return this._http.get("http://localhost:8000/getObjectlevel");
}
GetSceneLevels(): Observable<any>{
  return this._http.get("http://localhost:8000/getScenelevel");
}


}
