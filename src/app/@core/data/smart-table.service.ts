import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


//Importing required models
import { AnimalModel } from './animal-model';
import { PersonnelModel } from './personnel-model';
import { OwnerModel } from './owner-model';
import { ClinicModel } from './clinic-model';

@Injectable()
export class SmartTableService {

  constructor(private _http: Http) { }


  getAnimals(): Observable<AnimalModel[]> {
    return this._http
      .get('http://localhost:30000/api/animal')
      .map(result => {
        const animal = result.json()['data'];
        console.log(animal);
        return animal.map((animal) => new AnimalModel(animal));
      });
  }

  getAnimal(id: number): Observable<AnimalModel> {
    return this._http
    .get(`http://localhost:30000/api/animal/${id}`)
    .map(res => {
      return new AnimalModel(res.json()['data']);
    });
  }

  updateAnimal(animal: AnimalModel): Observable<AnimalModel> {
    return this._http
    .put(`http://localhost:30000/api/animal/${animal.animalno}`, animal)
    .map(response => null);
  }
  
  getPersonnel(): Observable<PersonnelModel[]> {
    return this._http
      .get('http://localhost:30000/api/allpersonnel')
      .map(result => {
        const personnel = result.json()['data'];
        console.log(personnel);
        return personnel.map((personnel) => new PersonnelModel(personnel));
      });
  }
  
  getOwners(): Observable<OwnerModel[]> {
    return this._http
      .get('http://localhost:30000/api/owner')
      .map(result => {
        const owner = result.json()['data'];
        console.log(owner);
        return owner.map((owner) => new OwnerModel(owner));
      });
  }
  
  getClinics(): Observable<ClinicModel[]> {
    return this._http
      .get('http://localhost:30000/api/clinics')
      .map(result => {
        const clinic = result.json()['data'];
        console.log(clinic);
        return clinic.map((clinic) => new ClinicModel(clinic));
      });
  }

}
