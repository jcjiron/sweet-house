import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



const TIME_OUT = 1000 * 60 * 2;

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {


  /** create http service*/
  constructor(private http: HttpClient) { }

  /** generate GET request
   * @param url url service
  */
  get(url: string, params?: any): Observable<any> {
    return this.http.get(url, params);
  }

  /**Http post request 
   * @param url url service
   * @param data data to post
   * 
  */
  post(url: string, data?: any, httOptions?: any): Observable<any> {
    return this.http.post(url, data, httOptions);
  }

  /**Http put request 
   * @param url url service
   * @param data data to post
   * @param id id object to modify
  */
  put(url: string, id: any, data: any): Observable<any> {
    return this.http.put(`${url}/${id}`, data);
  }

  /**Http patch request 
   * @param url url service
   * @param data attributes to modify
   * @param id id object to update
  */
  patch(url: string, id: any, data: any): Observable<any> {
    return this.http.patch(`${url}/${id}`, data);
  }

  /**Http delete request 
   * @param url url service
   * @param id id object to delete
  */
  delete(url: string, id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }

  /** generate GET request
   * @param imageUrl url service to get Image of geolocation
  */
  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

}
