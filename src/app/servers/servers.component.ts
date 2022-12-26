import { Component } from '@angular/core';

@Component({
  // app.component.html için örnek selector ler.
  // ---
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // ---

  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverName = 'test';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
  }

  onButtonClick() {
    this.allowNewServer = false;
  }

  onChangeServerName(event : any){
    this.serverName=event.target.value;
  }

}
