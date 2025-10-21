import {inject, Injectable} from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private ionicStorageInstance = inject(Storage);

  constructor() {
    this.init();
  }

  async init() {
    // Se o storage ainda não foi criado, cria e define a instância
    const storage = await this.ionicStorageInstance.create();
    this._storage = storage;
  }

  // CREATE - Salvar dados
  public async set(key: string, value: any): Promise<any> {
    await this.ensureStorageReady();
    return this._storage?.set(key, value);
  }

  // READ - Ler dados
  public async get(key: string): Promise<any> {
    await this.ensureStorageReady();
    return this._storage?.get(key);
  }

  // UPDATE - Atualizar (mesmo método que set)
  public async update(key: string, value: any): Promise<any> {
    return this.set(key, value);
  }

  // DELETE - Remover um item específico
  public async remove(key: string): Promise<any> {
    await this.ensureStorageReady();
    return this._storage?.remove(key);
  }

  // CLEAR - Limpar todo o storage
  public async clear(): Promise<void> {
    await this.ensureStorageReady();
    return this._storage?.clear();
  }

  // KEYS - Listar todas as chaves
  public async keys(): Promise<string[]> {
    await this.ensureStorageReady();
    return this._storage?.keys() || [];
  }

  // LENGTH - Contar itens
  public async length(): Promise<number> {
    await this.ensureStorageReady();
    return this._storage?.length() || 0;
  }

  // Garantir que o storage está pronto
  private async ensureStorageReady(): Promise<void> {
    if (!this._storage) {
      await this.init();
    }
  }
}
