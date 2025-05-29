import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {

    public year:any;
    constructor() {
        let currentDate = new Date();
        this.year = currentDate.getFullYear();
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }

}
