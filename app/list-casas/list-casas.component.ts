import { Component, OnInit } from '@angular/core';
import { CasaServiceService } from 'src/app/service/casa-service.service';

@Component({
  selector: 'app-list-casas',
  templateUrl: './list-casas.component.html',
  styleUrls: ['./list-casas.component.scss']
})
export class ListCasasComponent implements OnInit {


  constructor(private casaServiceService: CasaServiceService) { }

  casas: any

  ngOnInit(): void {

    this.loadProducts()

  }



  loadProducts(){
    this.casas = this.casaServiceService.getCasasFire()
  }
}
