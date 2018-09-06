import {Injectable} from '@angular/core';
import {Lesgever} from './lesgever';
import {LESGEVERS} from './mock-lesgevers';
import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class LesgeverService {

    constructor(private messageService: MessageService) {
    }

    getLesgevers(): Observable<Lesgever[]> {
        // Todo: send the message _after_ fetching the heroes
        this.messageService.add('HeroService: fetched heroes');
        return of(LESGEVERS);
    }


}
