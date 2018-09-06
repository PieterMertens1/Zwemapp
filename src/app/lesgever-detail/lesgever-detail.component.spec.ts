import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LesgeverDetailComponent} from './lesgever-detail.component';

describe('LesgeverDetailComponent', () => {
    let component: LesgeverDetailComponent;
    let fixture: ComponentFixture<LesgeverDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LesgeverDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LesgeverDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
