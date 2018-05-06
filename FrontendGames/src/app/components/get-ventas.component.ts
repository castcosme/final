import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBALMYSQL } from '../services/globalmysql';
import { UserService } from '../services/user.service';
import { ConsolaService } from '../services/consola.service';
import { AccesorioService } from '../services/accesorio.service';
import { CartService } from '../services/cart.service';
import { Venta } from '../models/venta';

@Component({
  selector: 'ver-ventas',
  templateUrl: '../views/ver-ventas.html',
  providers: [UserService, ConsolaService, CartService, AccesorioService]
})

export class VentasComponent implements OnInit{
	public titulo: string;
  	public venta: Venta[]=[];
	public identity;
	public token;
	public url: string;
	public alertMessage;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _consolaService: ConsolaService,
		private _cartService: CartService,
		private _accesorioService: AccesorioService
	){
		this.titulo = 'Ventas realizadas';
		this.identity = this._userService.getIdentity();
  		this.token = this._userService.getToken();
  		this.url = GLOBALMYSQL.url;
	}

	ngOnInit(){
		console.log('get-ventas.component cargado');
    	this.venta=[];
		this.conseguirVentas();
	}

	conseguirVentas(){

			if(this.identity.role == 'ROLE_ADMIN'){
				this._consolaService.getVentas(this.token).subscribe(
					response => {

						//console.log(response);
	 					for (var i in response) {
	 						//console.log(response[i]);
	 						let aux = new Venta(response[i].id, response[i].idusuario, response[i].cliente, response[i].totalventa, response[i].createdAt);
							this.venta.push(aux);
	 					}

					},
					error => {
						var errorMessage = <any>error;

			  			if(errorMessage != null){
			  				var body = JSON.parse(error._body);
                
			  				this.alertMessage = body.message;

			  				console.log(error);
			  			}
					}
				);

				this._accesorioService.getVentas(this.token).subscribe(
					response => {

						//console.log(response);
	 					for (var i in response) {
	 						//console.log(response[i]);
	 						let aux = new Venta(response[i].id, response[i].idusuario, response[i].cliente, response[i].totalventa, response[i].createdAt);
							this.venta.push(aux);
	 					}

					},
					error => {
						var errorMessage = <any>error;

			  			if(errorMessage != null){
			  				var body = JSON.parse(error._body);
                
			  				this.alertMessage = body.message;

			  				console.log(error);
			  			}
					}
				);
			}else{
			  	this.alertMessage = 'Token no valido';
			}

	}

	eliminarVenta(idVenta){
		/*this._consolaService.deleteConsola(this.token, idCons).subscribe(
			response => {
				if(!response){
					this._router.navigate(['/']);
				}else{
					this.consola = [];
					this.conseguirConsolas();
				}
			},
			error => {
				var errorMessage = <any>error;

	  			if(errorMessage != null){
	  				var body = JSON.parse(error._body);
	  				this.alertMessage = body.message;

	  				console.log(error);
	  			}
			}
		);*/
	}
}
