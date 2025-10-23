import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TarefaModel } from 'src/app/models/tarefa-model';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.page.html',
  styleUrls: ['./nova-tarefa.page.scss'],
  standalone: false
})
export class NovaTarefaPage implements OnInit {
  form : FormGroup;
  private formBuilder : FormBuilder = inject(FormBuilder);
  private tarefasService: TarefasService = inject(TarefasService);
  private router : Router = inject(Router);
  constructor() {
    this.form = this.formBuilder.group({
      id : [''],
      titulo : ['', Validators.required],
      descricao : ['', Validators.required],
      concluido: [false],
    })
  }

  ngOnInit() {
    
  }

  salvarTarefa(){
    const tarefa : TarefaModel = this.form.getRawValue();
    this.tarefasService.salvarTarefa(tarefa);
    this.router.navigate(['tarefas']);
  }

  cancelarTarefa(){
    this.form.reset();
    this.router.navigate(['tarefas']);
  }
}
