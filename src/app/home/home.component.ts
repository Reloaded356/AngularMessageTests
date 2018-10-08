import { Component } from '@angular/core';

import { MessageService } from '../_services/index';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    constructor(private messageService: MessageService) { }

    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage('Trey says, "Get off the internet, I need to use the phone!!"');
    }

    clearMessage(): void {
        // clear message
        this.messageService.clearMessage();
    }
}