import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { farmCreate, parcelaCreate } from '../model/interfaces';
import { ServicesService } from './../services/services.service';

@Component({
  selector: 'app-create-farm',
  templateUrl: './create-farm.component.html',
  styleUrls: ['./create-farm.component.css'],
})
export class CreateFarmComponent implements OnInit {
  public farmCreate: farmCreate = {
    user_id: this.servicesService.obtenerTokenDecodificado().user_id,
    farm_name: '',
    latitude: undefined,
    longitude: undefined,
  };

  public farm_name: any;
  public latitude: any;
  public longitude: any;

  public parcelaCreate: parcelaCreate = {
    width: undefined,
    length: undefined,
    crop_modality: '',
  };

  public width: any;
  public length: any;
  public crop_modality: any;

  public visibleA: Boolean = false;
  public visibleB: Boolean = false;
  public user: any;
  constructor(
    private route: Router,
    private servicesService: ServicesService,
    private message: MessageService
  ) {}

  ngOnInit(): void {}

  createFarm() {
    console.log(this.farmCreate);
    this.servicesService.createFarm(this.farmCreate).subscribe({
      next: (data) => {
        this.message.add({
          severity: 'success',
          summary: 'Movimiento exitoso',
          detail: 'Has logrado crear tu granja ',
        });
      },
      error: (err) => {
        this.message.add({
          severity: 'error',
          summary: 'Hubo un error ',
          detail: 'No se ha logrado crear tu granja ',
        });
      },
    });
  }

  createParcela() {
    console.log(this.parcelaCreate);
    this.servicesService.createParcela(this.parcelaCreate).subscribe({
      next: (data) => {
        this.message.add({
          severity: 'success',
          summary: 'Movimiento exitoso',
          detail: 'Has logrado crear tu granja ',
        });
      },
      error: (err) => {
        this.message.add({
          severity: 'error',
          summary: 'Hubo un error ',
          detail: 'No se ha logrado crear tu granja ',
        });
      },
    });
  }

  showFarm() {
    this.visibleA = true;
  }

  showParcela() {
    this.visibleA = false;
    this.visibleB = true;
  }
}
