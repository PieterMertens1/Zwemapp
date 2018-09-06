import {Component, OnInit, Input} from '@angular/core';
import {Lesgever} from '../Lesgever';

@Component({
    selector: 'app-lesgever-detail',
    templateUrl: './lesgever-detail.component.html',
    styleUrls: ['./lesgever-detail.component.css']
})
export class LesgeverDetailComponent implements OnInit {


    @Input() lesgever: Lesgever;

    constructor() {
    }

    ngOnInit() {
    }

}
