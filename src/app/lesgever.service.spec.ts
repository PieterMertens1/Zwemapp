import {TestBed, inject} from '@angular/core/testing';

import {LesgeverService} from './lesgever.service';

describe('LesgeverService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LesgeverService]
        });
    });

    it('should be created', inject([LesgeverService], (service: LesgeverService) => {
        expect(service).toBeTruthy();
    }));
});
