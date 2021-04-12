import { Component, OnInit } from '@angular/core';

type TipoPet = 'Gato'|'Cachorro'| '';
type Genero = 'Fêmea' | 'Macho';

interface Pet{
  Nome: string;
  Tipo:TipoPet;
  Genero:Genero;
  Idade: String;
  CorDoPelo: String;
  CorDosOlhos:String;
  Estado:String;
  Cidade:String;
  Vacinado:Boolean;
  Foto:String;
  Descricao:String,
}

@Component({
  selector: 'app-encontrando-seu-pet',
  templateUrl: './encontrando-seu-pet.page.html',
  styleUrls: ['./encontrando-seu-pet.page.scss'],
})
export class EncontrandoSeuPetPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pets: Pet[]=[
    {
      Nome:'Romeu',
      Tipo:'Cachorro',
      Genero: 'Macho',
      Idade:'4 meses',
      CorDoPelo:'Caramelo',
      CorDosOlhos:'Castanho',
      Estado:'SP',
      Cidade:'Mauá',
      Vacinado:true,
      Foto:'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg.',
      Descricao:'Romeu é um doguinho super carinhoso e bonzinho, ama caminhar e brincar.',
    },
    {
      Nome:'Jujuba',
      Tipo:'Gato',
      Genero: 'Fêmea',
      Idade:'1 ano',
      CorDoPelo:'Cinza',
      CorDosOlhos:'Azul',
      Estado:'PE',
      Cidade:'Olinda',
      Vacinado:false,
      Foto:'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      Descricao:'Jujuba passou por muitas dificuldades e está em busca de um lar amoroso para recomeçar.',
    },
    {
      Nome:'Ana Clara',
      Tipo:'Cachorro',
      Genero:'Fêmea',
      Idade:'2 anos',
      CorDoPelo:'Marrom',
      CorDosOlhos:'Castanho',
      Estado:'SP',
      Cidade:'Pirituba',
      Vacinado:true,
      Foto:'https://images.pexels.com/photos/3427343/pexels-photo-3427343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      Descricao:'Romeu é um doguinho super carinhoso e bonzinho, ama caminhar e brincar.',

    },
    {
      Nome:'Didi',
      Tipo:'Gato',
      Genero: 'Macho',
      Idade:'4 anos',
      CorDoPelo:'Dourado',
      CorDosOlhos:'Mel',
      Estado:'MG',
      Cidade:'Ouro Preto',
      Vacinado:false,
      Foto:'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      Descricao:'Romeu é um doguinho super carinhoso e bonzinho, ama caminhar e brincar.',
    }
  ]

  public inputType:TipoPet;
  public petFiltrados: Pet[] = this.pets;
  public listaGatos: Pet[] = this.pets.filter(pet=> pet.Tipo=='Gato');
  public listaCachorros: Pet[] = this.pets.filter(pet=> pet.Tipo=='Cachorro');

  public FiltroPet(){
    let petFiltrado: Pet[];
    if(this.inputType==''||'Tudo'){
      petFiltrado = this.pets;
    }else if(this.inputType=='Cachorro'){
      petFiltrado=this.listaCachorros;
    }else{
      petFiltrado=this.listaGatos;
    }
  }
}
