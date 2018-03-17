import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { Feedback } from '../shared/feedback';


@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular,
    private processHttpmsgService: ProcessHttpmsgService) { }

    submitFeedback(feedback: Feedback): Observable<Feedback> {
      return this.restangular.all('feedback').post(feedback);
    }
}
