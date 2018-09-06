import {Component, OnInit} from '@angular/core';
import {Lesgever} from '../Lesgever';
import {LesgeverService} from '../lesgever.service';


@Component({
    selector: 'app-lesgever',
    templateUrl: './lesgever.component.html',
    styleUrls: ['./lesgever.component.css']
})
export class LesgeverComponent implements OnInit {

    lesgevers: Lesgever[];

    selectedLesgever: Lesgever;

    constructor(private lesgeverService: LesgeverService) {
    }

    ngOnInit() {
        this.getLesgevers();
    }


    onSelect(lesgever: Lesgever): void {
        this.selectedLesgever = lesgever;
    }

    getLesgevers(): void {
        this.lesgeverService.getLesgevers()
            .subscribe(lesgevers => this.lesgevers = lesgevers);
    }
}
