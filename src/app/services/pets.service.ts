import { Injectable } from '@angular/core';

type TipoPet = 'Gato'|'Cachorro'| '' | 'Tudo';
type Genero = 'Fêmea' | 'Macho';

export interface Pet{
  id: number;
  Nome: string;
  Tipo:TipoPet;
  Genero:Genero;
  Idade: String;
  CorDoPelo: String;
  Pelagem: String;
  CorDosOlhos:String;
  Estado:String;
  Cidade:String;
  Vacinado:Boolean;
  Foto:String;
  Descricao:String,
}

@Injectable({
  providedIn: 'root'
})
export class PetsService{

  constructor(private storage:Storage) {
    this.loadFromStorage();
  }

  private async loadFromStorage(){
    const pets = await this.storage.get('pets') as Pet[];
    if (pets){
      this.petsFavoritos.push(...pets);
    }
  }
  
  public todosOsPets: Pet[]=[
    {
      id:1,
      Nome:'Romeu',
      Tipo:'Cachorro',
      Genero: 'Macho',
      Idade:'4 meses',
      CorDoPelo:'Caramelo',
      Pelagem:'Curta',
      CorDosOlhos:'Castanho',
      Estado:'SP',
      Cidade:'Mauá',
      Vacinado:true,
      Foto:'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg.',
      Descricao:'Romeu é um doguinho super carinhoso e bonzinho, ama caminhar e brincar.',
    },
    {
      id: 2,
      Nome:'Jujuba',
      Tipo:'Gato',
      Genero: 'Fêmea',
      Idade:'1 ano',
      CorDoPelo:'Cinza',
      Pelagem:'Curta',
      CorDosOlhos:'Azul',
      Estado:'PE',
      Cidade:'Olinda',
      Vacinado:false,
      Foto:'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      Descricao:'Jujuba passou por muitas dificuldades e está em busca de um lar amoroso para recomeçar.',
    },
    {
      id: 3,
      Nome:'Ana Clara',
      Tipo:'Cachorro',
      Genero:'Fêmea',
      Idade:'2 anos',
      CorDoPelo:'Marrom',
      Pelagem:'Curta',
      CorDosOlhos:'Castanho',
      Estado:'SP',
      Cidade:'Pirituba',
      Vacinado:true,
      Foto:'https://images.pexels.com/photos/3427343/pexels-photo-3427343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      Descricao:'Romeu é um doguinho super carinhoso e bonzinho, ama caminhar e brincar.',

    },
    {
      id: 42,
      Nome:'Didi',
      Tipo:'Gato',
      Genero: 'Macho',
      Idade:'4 anos',
      CorDoPelo:'Dourado',
      Pelagem:'Curta',
      CorDosOlhos:'Mel',
      Estado:'MG',
      Cidade:'Ouro Preto',
      Vacinado:false,
      Foto:'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      Descricao:'Romeu é um doguinho super carinhoso e bonzinho, ama caminhar e brincar.',
    }
  ];

  public inputType:TipoPet;
  public petFiltrados: Pet[] = this.todosOsPets;
  public listaGatos: Pet[] = this.todosOsPets.filter(pet=> pet.Tipo=='Gato');
  public listaCachorros: Pet[] = this.todosOsPets.filter(pet=> pet.Tipo=='Cachorro');

  public petsFavoritos: Pet[]=[];

  public FiltroPet(){
    if(this.inputType==''||this.inputType=='Tudo'){
      this.petFiltrados = this.todosOsPets;
    }else if(this.inputType=='Cachorro'){
      this.petFiltrados=this.listaCachorros;
      console.log(this.listaCachorros)
    }else{
      this.petFiltrados=this.listaGatos;
    }
  }
  


  public addPet(newPet: Pet){
    this.petsFavoritos.push(newPet);
    this.storage.set('pets', this.petsFavoritos);
  }

  public removePet(){
    this.petsFavoritos.pop();
    this.storage.set('pets', this.petsFavoritos);
  }
}
