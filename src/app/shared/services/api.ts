import { Response, Http, Headers } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import * as _ from 'lodash'

@Injectable()
export class ApiService {
  api_url: string = 'http://localhost:3500';
  headers: Headers = new Headers( {
    'Accept': 'application/json'
  } );

  constructor( private http: Http ) {
  }

  private getJson( response: Response ) {
    return response.json()
  }

  private checkError( response: Response ): Response {
    if ( response.status >= 200 && response.status < 400 ) {
      return response
    } else {
      let err = new Error( response.statusText );
      throw err
    }
  }

  get( path: string ): Observable<any> {
    return this.http.get( `${this.api_url}${path}`, {
      headers: this.headers
    } )
      .map( this.checkError )
      .catch( err => Observable.throw( err ) )
      .map( this.getJson )
  }

  post( path: string, body ): Observable<any> {
    return this.http.post( `${this.api_url}${path}`, body, {
      headers: this.headers
    } )
      .map( this.checkError )
      .catch( err => Observable.throw( err ) )
      .map( this.getJson )
  }

  delete( path: string ): Observable<any> {
    return this.http.delete( `${this.api_url}${path}`, {
      headers: this.headers
    } )
      .map( this.checkError )
      .catch( err => Observable.throw( err ) )
      .map( this.getJson )
  }

  setHeaders( headers: { [key: string]: string } ): void {
    _.toPairs( headers ).forEach( ( [key, value] ) => this.headers.set( key, value ) )
  }
}
