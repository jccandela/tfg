import { Injectable } from '@angular/core';
import { Sensor } from 'src/models/sensor';
import { Payload } from 'src/models/payload';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  private sensors: Sensor[] = [];

  constructor(private http: HttpClient) { }

  getSensors(): Observable<Sensor[]> {
    //https://angular.io/tutorial/toh-pt6
    return this.http.get<Sensor[]>('http://localhost:3000/api/sensors')
      .pipe(
        tap(_ => this.log('fetched sensors')),
        catchError(this.handleError<Sensor[]>('getSensors', []))
      );
   }

  getSensorsLastPayload(dev_id: string): Observable<Payload> {
    return this.http.get<Payload>(`http://localhost:3000/api/payload/${dev_id}/last`)
      .pipe(
        tap(_ => this.log('fetched sensors')),
        catchError(this.handleError<Payload>('getSensorsLastPayload', null))
      );
   }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
    console.log(`HeroService: ${message}`);
  }
}
