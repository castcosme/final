import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBALMYSQL } from '../services/globalmysql';
import { UserService } from '../services/user.service';
import { ConsolaService } from '../services/consola.service';
import { Consola } from '../models/consola';

@Component({
  selector: 'ver-consolas',
  templateUrl: '../views/ver-consolas.html',
  providers: [UserService, ConsolaService]
})

export class ConsolaComponent implements OnInit{
	public titulo: string;
  public consola: Consola[]=[];
	public identity;
	public token;
	public url: string;
	public alertMessage;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _consolaService: ConsolaService
	){
		this.titulo = 'Consolas disponibles';
		this.identity = this._userService.getIdentity();
  		this.token = this._userService.getToken();
  		this.url = GLOBALMYSQL.url;
	}

	ngOnInit(){
		console.log('ver-consolas.component cargado');
    this.consola=[];
		this.conseguirConsolas();
	}

	conseguirConsolas(){

			if(this.identity.role == 'ROLE_ADMIN'){
				this._consolaService.getConsolas(this.token).subscribe(
					response => {

						//console.log(response);
	 					for (var i in response) {
	 						//console.log(response[i]);
							this.consola.push(response[i]);
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

	eliminarConsola(idCons){
		this._consolaService.deleteConsola(this.token, idCons).subscribe(
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
		);
	}
}
