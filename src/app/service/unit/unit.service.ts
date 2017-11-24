import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UnitService {
 UrlConfig:string = "http://localhost:3000";
 constructor(private http:Http,){
    console.log('Task Service Initialize');
}
//get all tasks
getUnits(){
  console.log("get all tasks");
    return this.http.get(this.UrlConfig+'/api/units').map(res =>res.json());
}
addUnit(newUnit) {
var headers = new Headers();
headers.append('Content-Type', 'application/json');
return this.http.post(this.UrlConfig + '/api/unit', JSON.stringify(newUnit), {headers: headers})
  .map(res => res.json());
}

deleteUnit(id){
return this.http.delete(this.UrlConfig + '/api/unit/'+id)
  .map(res => res.json())
}

updateStatus(unit){
var headers = new Headers();
headers.append('Content-Type', 'application/json');
return this.http.put(this.UrlConfig + '/api/unit/' + unit._id, JSON.stringify(unit), {headers: headers})
  .map(res => res.json());
}

}
