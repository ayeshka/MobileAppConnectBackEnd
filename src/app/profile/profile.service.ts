import { Injectable } from '@angular/core';
import { UserDetails } from './profile.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';




@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _userDetails = new BehaviorSubject<UserDetails[]>([]);


  constructor(private http: HttpClient, private storage: NativeStorage) { }


  get UserDetails() {
    return this._userDetails.asObservable();
  }

  fatch(){

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhmNGJjZGU3OGMyZmVmMTMwZjQ3M2ZlZjM1MmM0Y2NlZTczMDEyYjI4ZWVhNjc3YzNhYjRlZjE2MzMxOTQ4MzNmZGRlMDVkOWZhODE4YTAwIn0.eyJhdWQiOiIyIiwianRpIjoiOGY0YmNkZTc4YzJmZWYxMzBmNDczZmVmMzUyYzRjY2VlNzMwMTJiMjhlZWE2NzdjM2FiNGVmMTYzMzE5NDgzM2ZkZGUwNWQ5ZmE4MThhMDAiLCJpYXQiOjE1NjkyMjE5NTgsIm5iZiI6MTU2OTIyMTk1OCwiZXhwIjoxNjAwODQ0MzU4LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.lqAiUWpkRFRtQ5gG0TMjc5iKhM_eB8KPMW4b9hPzv0nfnpg4SzAlUAH2OPbGEfcMn92xVTCOfvhvO-14WhiInazNhBTTEss2JgakLPjHaab6okSf7oJRTCwM9L6SY5LypY6tuXwcmmJH0E4CCPcrOhoc-WMYE9K4JzeVurEHNUzv41KNAzLA1cjzVHedeUdh_WgaJFQFd9vArzniQwBFu8MU5wsabPA2IKsYB-rzbnBZ93k1bk7hxgqPQbGrjPSBdj_0rhP0NthZyDpyEL_cAdtapZkB1jlJfs7vMTvgSpIVCaKNAPouyd--YMBo5xMgcLcztNAFHwSt5j76TSHybp7DCHrdZkOlWC-KRyAPasYXjL-Y0ghnh0-hyd-Xtku3NFTqACq1qwtHhb48vLOqaUU6-kmmWl-6T0eWAa-5TTfjV-ZOpVrdh2MOLMsnPovJBUMu2t2N23Cv3QGz6QzD26DLoqwIVYaq1_91cw6kt50_iF9CuLVvsLls10cUO0thQ6aGu-q4t0gBjWC8XzEC_LdBCEce4BVlzNXKT-k1e_Ag9Hz8H_lZj_0QJBylP3xQxQAKCGS0RhHlAfQUH5pDJnW3aFBB-W1axXubBc3yox5rTY8z7DhjDmEqb9UCDbwLKX7zYxI6dsuwP9Z8B4JBHiYAyG0GRQkXTgW9WZcEJ-w`
        
      })
    };

    return this.http.get<any>('http://localhost:8000/api/user_detail', httpOptions);
  }


}
