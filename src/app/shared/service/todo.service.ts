import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseService} from './base_service/base.service';


@Injectable({
    providedIn: 'root'
})
export class TodoService extends BaseService {

    constructor(public http: HttpClient) {
        super(http);
    }


    getListCategory(perpage?: string | number, userName?: string, params?: {
        [param: string]: any | ReadonlyArray<string>;
    }): Observable<any> {
        return super.get('/categories', {
            params,
            needToken: false,
        });
    }

    getPageService(perpage?: string | number, userName?: string, params?: {
        [param: string]: any | ReadonlyArray<string>;
    }): Observable<any> {
        return super.get('/videoByUser/username/' + userName + '/perpage/' + perpage + '', {
            params,
            needToken: false,
        });
    }

    getPageServiceByCategory(perpage?: string | number, categoryText?: string, params?: {
        [param: string]: any | ReadonlyArray<string>;
    }): Observable<any> {
        return super.get('/categoryVideos/cat/' + categoryText + '/perpage/' + perpage + '', {
            params,
            needToken: false,
        });
    }

    getCommentByVideos(perpage?: string | number, videohash?: string, params?: {
        [param: string]: any | ReadonlyArray<string>;
    }): Observable<any> {
        return super.get('/commentByVideos/videohash/' + videohash + '/perpage/' + perpage + '', {
            params,
            needToken: false,
        });
    }

    getPageServiceByTerm(perpage?: string | number, text?: string, params?: {
        [param: string]: any | ReadonlyArray<string>;
    }): Observable<any> {
        return super.get('/videoBySearch/text/' + text + '/perpage/' + perpage + '', {
            params,
            needToken: false,
        });
    }

    getOneService(id, params?: {
        [param: string]: string | ReadonlyArray<string>;
    }): Observable<any> {
        return super.get('/todos/' + id, {
            params,
            needToken: false,

        });
    }


}

