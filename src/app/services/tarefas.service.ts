import { Injectable } from '@angular/core';
import { TarefaModel } from '../models/tarefa-model';
@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  tarefas: TarefaModel[] = [];
  proximoID = 0;

  salvarTarefa(tarefa : TarefaModel){
    tarefa.id = this.proximoID;
    this.tarefas.push(tarefa);
    this.proximoID++;
  }

  listarTarefas(){
    return this.tarefas;
  }
}
