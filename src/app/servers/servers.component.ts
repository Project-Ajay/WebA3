import { Component } from '@angular/core';
import  {Server} from "../server";
import {FormsModule, NgForm} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  servers: Server[] = [];
  serverName: string = " "; // Property to hold the server name from the form
  serverId: string = " "; // Property to hold the server ID from the form
  serverStatus: string = " "; // Property to hold the server status from the form

  addServer(form: NgForm) {
    const newServer = new Server(this.serverName,this.serverStatus,this.serverId);
    this.servers.push(newServer);
    form.resetForm();
  }
}
