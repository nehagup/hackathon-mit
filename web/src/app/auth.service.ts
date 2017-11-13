import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { log } from 'util';

@Injectable()
export class AuthService {

  private _actionUrl = 'http://190.81.160.212:3000/api/';

  private _citizen = {
    dni: '',
    nombres: '',
    apellidos: '',
    imgUrl: '',
    $class: null
  }
  private _citizenExist = false;
  private _hasVoted: boolean;

  constructor(private http: Http) { }

  setLocalCitizen (citizen) {
    this._citizen.dni = citizen.dni;
    this._citizen.nombres = citizen.nombres;
    this._citizen.apellidos = citizen.apellidos;
    this._citizen.imgUrl = citizen.imgUrl;
    this._citizen.$class = citizen.$class;
  }

  getLocalCitizen() {
    return this._citizen;
  }

  setCitizenExits (exist: boolean) {
    this._citizenExist = exist;
  }

  setHasvoted (hasVoted: boolean) {
    this._hasVoted = hasVoted;
  }

  canLogIn(): boolean {
    return (this._citizenExist && !this._hasVoted);
  }
  getCitizen() {
    const url = this._actionUrl + 'Ciudadano';
    return this.http.get(url).map((res: Response) => res.json());
  }
  getLedgerCiudadano() {
    const url = this._actionUrl + 'LedgerCiudadano';
    return this.http.get(url).map((res: Response) => res.json());
  }
}
