import { Component, inject, OnInit } from '@angular/core';
import { TarefaModel } from 'src/app/models/tarefa-model';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
  standalone: false,
})
export class TarefasPage implements OnInit {
  tarefas : TarefaModel[] = []
  tarefasService: TarefasService = inject(TarefasService);
  
  dataHoje = new Date;
  
  constructor() {}

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.buscarTarefas();
  }

  buscarTarefas() : void{
    this.tarefas = this.tarefasService.listarTarefas();
  }


}
