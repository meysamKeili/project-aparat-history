import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ErrorService} from './error.service';

export class GeneralService extends ErrorService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getListService(params?: {
    [param: string]: any | ReadonlyArray<string>;
  }): Observable<any> {
    return super.getError('/get-list', {
      params,
      needToken: true,
    });
  }

  getPageService(params?: {
    [param: string]: any | ReadonlyArray<string>;
  }): Observable<any> {
    return super.getError('/get-page', {
      params,
      needToken: true,
    });
  }

  getOneService(params?: {
    [param: string]: string | ReadonlyArray<string>;
  }): Observable<any> {
    return super.getError('/get-one', {
      params,
      needToken: true,

    });
  }

  createService(body: any, params?: {
    [param: string]: string | ReadonlyArray<string>;
  }): Observable<any> {
    return super.postError('/create', body, {
      params,
      needToken: true,
    });
  }

  updateService(body: any, params?: {
    [param: string]: string | ReadonlyArray<string>;
  }): Observable<any> {
    return super.putError('/update', body, {
      params,
      needToken: true,

    });
  }

  deleteService(params?: {
    [param: string]: string | ReadonlyArray<string>;
  }): Observable<any> {
    return super.deleteError('/delete', {
      params,
      needToken: true,

    });
  }
}

