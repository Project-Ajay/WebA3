import { Component } from '@angular/core';
import  {Server} from "../server";
import {FormsModule, NgForm} from "@angular/forms";
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgStyle
  ],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  servers: Server[] = [];
  serverName: string = " ";
  serverId: number = 0; // Property to hold the server ID from the form
  serverStatus: string = " "; // Property to hold the server status from the form

  addServer(form: NgForm) {
    const existingServer: Server | undefined = this.servers.find(server => server.serverId === this.serverId);

    if (existingServer) {
      alert("Server  already exists!");
    } else {
      const newServer = new Server(this.serverName, this.serverStatus, this.serverId);
      this.servers.push(newServer);
      form.resetForm();
    }
  }


  getNumberOfServer():any{
    return this.servers.length;
  }
  getNumberOfOnlineServer():number{
    let count = 0;
    for(const server of this.servers){
      if (server.serverStatus === 'online'){
        count++;
      }
    }
    return count;
  }

  getNumberOfOfflineServer():number{
    let count = 0;
    for(const server of this.servers){
      if (server.serverStatus === 'offline'){
        count++;
      }
    }
    return count;
  }

}
