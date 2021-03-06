import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],

})

export class GameComponent {
    constructor(private router: Router) {

    }

    logOut() {
        localStorage.removeItem('username');
        this.router.navigate(['/login']);
    }

    resetGame() {
        window.location.reload();
    }
}
