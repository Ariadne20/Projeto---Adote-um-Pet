import { Component, ViewChild } from '@angular/core';

type TipoPet = 'Gato'|'Cachorro';
type Genero = 'Fêmea' | 'Macho';

interface Feedback{
  Id: number;
  Nome: string;
  Estado: String
  Foto:String;
  Feedback:String;
}

interface Pet{
  id: Number;
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
  Descricao: String;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public pets: Pet[]=[
    {
      id: 1,
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
      id: 2,
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
      Descricao:'Romeu é um doguinho super carinhoso e bonzinho, ama caminhar e brincar.',
    },
    {
      id:3,
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
      Descricao:'A Ana Clara ama dar um volta pela rua, brincar bastante com seus brinquedos e ficar do ladinho de quem ama.',
    },

    {
      id:42,
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
      Descricao:'Didi é um gatinho mega esperto, adora seu cantinho de aconchego e uma boa companhia.',
    },
  ]
  @ViewChild('mySlider') mySlider: any;
   public feedbacks:Feedback[]=[
    {
      Id: 1,
      Nome: 'Mônica Pereira',
      Estado:'RJ',
      Foto: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      Feedback: '"Estava me sentindo muito só, foi então com a Adote um Pet que encontrei Amêndoa, a gatinha mais carinhosa que já vi"',
    },
    {
      Id: 2,
      Nome:'Renan Paulo Souza',
      Estado:'MG',
      Foto: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      Feedback: '"Me mudei de estado e queria um companheiro, pois, não conhecia ninguém aqui, descobri a Adote um Pet e escolhi Billy, meu melhor amigo"',
    }
  ]

  constructor() {}
  slideNext(){
    this.mySlider.slideNext();
  }
  slidePrev(){
    this.mySlider.slidePrev();
  }
}