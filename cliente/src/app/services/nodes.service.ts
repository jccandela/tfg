import { Injectable } from '@angular/core';
import { Node } from 'src/models/node';
import { Payload } from 'src/models/payload';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  private sensors: Node[] = [];

  constructor(private http: HttpClient) { }

  getNodes(): Observable<Node[]> {
    //https://angular.io/tutorial/toh-pt6
    return this.http.get<Node[]>('http://localhost:3000/api/nodes')
      .pipe(
        tap(_ => this.log('fetched nodes')),
        catchError(this.handleError<Node[]>('getNodes', []))
      );
   }

  getNodesLastPayload(dev_id: string): Observable<Payload> {
    return this.http.get<Payload>(`http://localhost:3000/api/payload/${dev_id}/last`)
      .pipe(
        tap(_ => this.log('fetched nodes')),
        catchError(this.handleError<Payload>('getNodesLastPayload', null))
      );
   }

   getNodePayloads(dev_id: string): Observable<Payload[]> {
    return this.http.get<Payload[]>(`http://localhost:3000/api/payloads/${dev_id}`)
      .pipe(
        tap(_ => this.log('fetched nodes')),
        catchError(this.handleError<Payload[]>('getNodesLastPayload', null))
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
