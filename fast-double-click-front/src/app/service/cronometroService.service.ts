import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RegistroTempo } from "../model/regostroTempo";


@Injectable({
  providedIn: 'root'
})
export class CronometroService {

  private apiUrl = 'http://localhost:8080/cronometro';

  constructor(private http: HttpClient) { }

  listarTempos(): Observable<RegistroTempo[]> {
    return this.http.get<RegistroTempo[]>(this.apiUrl);
  }

  salvarTempo(registro: RegistroTempo): Observable<void> {
    return this.http.post<void>(this.apiUrl, registro);
  }


}