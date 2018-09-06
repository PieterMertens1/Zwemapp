import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LesgeverComponent} from './lesgever.component';

describe('LesgeverComponent', () => {
    let component: LesgeverComponent;
    let fixture: ComponentFixture<LesgeverComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LesgeverComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LesgeverComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
