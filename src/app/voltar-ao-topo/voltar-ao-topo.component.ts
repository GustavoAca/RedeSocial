import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voltar-ao-topo',
  templateUrl: './voltar-ao-topo.component.html',
  styleUrls: ['./voltar-ao-topo.component.css']
})
export class VoltarAoTopoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  voltarAoTopo() {
    window.scroll(0, 0)
  }

}
