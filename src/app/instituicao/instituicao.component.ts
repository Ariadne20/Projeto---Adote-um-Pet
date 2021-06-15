import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular'
import { AlertController, IonButtons} from '@ionic/angular'
import { Button } from 'protractor';


type TipoPet = 'Gato'|'Cachorro'| '' | 'Tudo';
type Genero = 'Fêmea' | 'Macho';

interface Pet{
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
  NomeInstituicao: String;
  EstadoInstituicao: String;
  DescricaoInstituicao:String;
  FotoInstituicao: String;
  NumeroInstituicao:String;
}

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.scss'],
})


export class InstituicaoComponent implements OnInit {
  @Input() public id:number;
  public filtroRotaDinamica: Pet[];
  public pet:Pet;
   
 
  constructor(public AlertController : AlertController) {}
  

     async abrirAlert(){
     
        const alert = await this.AlertController.create({
          cssClass: 'my-custom-class',
          header: 'ATENÇÃO!',
          subHeader: 'Importante',
          message: 'Abandonar, soltar, deixar fugir, não alimentar, acorrentar, bater, amedrontar e deixar acasalar indiscriminadamente são formas de maus tratos com pena prevista na lei. O Adote um Pet atuará conforme artigo 164 do Código Penal, artigo 32 da Lei Federal 9.605, de 12 de fevereiro de 1998 (Lei de Crimes Ambientais), e da Lei Municipal 13.131, de 18 de maio de 2001 (Lei de Posse Responsável), contra qualquer um que descumpra as determinações previstas, sejam estes adotantes ou não..',
          buttons: ['OK']

        }). then(a=> a.present());
    
    
  }
  
  ngOnInit() {
    this.pet = this.pets.find(pet=>pet.id==this.id);
    console.log(this.filtroRotaDinamica);

    
  }

  public pets: Pet[]=[
    {
      id:1,
      Nome:'Romeu',
      Tipo:'Cachorro',
      Genero: 'Macho',
      Idade:'4 meses',
      CorDoPelo:'Caramelo',
      Pelagem: 'Curta',
      CorDosOlhos:'Castanho',
      Estado:'SP',
      Cidade:'Mauá',
      Vacinado:true,
      Foto:'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-helena-lopes-2253275.jpg&fm=jpg.',
      Descricao:'Romeu é um doguinho super carinhoso e bonzinho, ama caminhar e brincar.',
      NomeInstituicao: 'Mauro Alberto',
      EstadoInstituicao: 'SP',
      DescricaoInstituicao:'Desde de 2007 ajudando animais a econtrar lares amorosos.',
      FotoInstituicao:'https://cdn.abcdoabc.com.br/Clinica-Castracao-Sao-Fransisco-de-Assis_1b82f472.jpg',
      NumeroInstituicao:'+5511948092919',
    },
    {
      id: 2,
      Nome:'Jujuba',
      Tipo:'Gato',
      Genero: 'Fêmea',
      Idade:'1 ano',
      CorDoPelo:'Cinza',
      CorDosOlhos:'Azul',
      Pelagem: 'Longa',
      Estado:'PE',
      Cidade:'Olinda',
      Vacinado:false,
      Foto:'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      Descricao:'Jujuba passou por muitas dificuldades e está em busca de um lar amoroso para recomeçar.',
      NomeInstituicao: 'Insituição LarPet',
      EstadoInstituicao: 'RJ',
      DescricaoInstituicao:'Ajudando animais em estado de vulnerabilidade a encontrar um lar',
      FotoInstituicao:'https://ogimg.infoglobo.com.br/in/22492408-5f5-27a/FT1086A/x75547960_SRPetrApolis-Rio-de-Janeiro08-03-2018DogAs-Heavenprojeto-social-que-cuida-de.jpg.pagespeed.ic.DoLq9bDaaN.jpg',
      NumeroInstituicao:'+5511948092919',
    },
    {
      id: 3,
      Nome:'Ana Clara',
      Tipo:'Cachorro',
      Genero:'Fêmea',
      Idade:'2 anos',
      CorDoPelo:'Marrom',
      Pelagem: 'Curta',
      CorDosOlhos:'Castanho',
      Estado:'SP',
      Cidade:'Pirituba',
      Vacinado:true,
      Foto:'https://images.pexels.com/photos/3427343/pexels-photo-3427343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      Descricao:'Romeu é um doguinho super carinhoso e bonzinho, ama caminhar e brincar.',
      NomeInstituicao: 'Insituição PetsTitans',
      EstadoInstituicao: 'PE',
      DescricaoInstituicao:'Atuamos desde de 2012 no combate de maus tratos aos animais',
      FotoInstituicao:'https://emais.estadao.com.br/blogs/comportamento-animal/wp-content/uploads/sites/205/2020/04/unnamed-2_170420204133.jpg',
      NumeroInstituicao:'+5511948092919',
    },
    {
      id: 42,
      Nome:'Didi',
      Tipo:'Gato',
      Genero: 'Macho',
      Idade:'4 anos',
      CorDoPelo:'Dourado',
      Pelagem: 'Longa',
      CorDosOlhos:'Mel',
      Estado:'MG',
      Cidade:'Ouro Preto',
      Vacinado:false,
      Foto:'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      Descricao:'Romeu é um doguinho super carinhoso e bonzinho, ama caminhar e brincar.',
      NomeInstituicao: 'Alessandra Gomes',
      EstadoInstituicao: 'SP',
      DescricaoInstituicao:'Meu propósito de vida é ajudar animais a encontrar um lar amoroso.',
      FotoInstituicao:'https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/sWcuxCfry5FhOzkPoB07SjkI0egy_5dk9pD0PnFQ7dA/1583442322/public/styles/600x400/public/media/1024768.jpg?h=aebfa19c&itok=6Vqv4dz-',
      NumeroInstituicao:'+5511948092919',
    }
  ]

  public inputType:TipoPet;
  public petFiltrados: Pet[] = this.pets;
  public listaGatos: Pet[] = this.pets.filter(pet=> pet.Tipo=='Gato');
  public listaCachorros: Pet[] = this.pets.filter(pet=> pet.Tipo=='Cachorro');

  public FiltroPet(){
    if(this.inputType==''||this.inputType=='Tudo'){
      this.petFiltrados = this.pets;
    }else if(this.inputType=='Cachorro'){
      this.petFiltrados=this.listaCachorros;
      console.log(this.listaCachorros)
    }else{
      this.petFiltrados=this.listaGatos;
    }
  }
}




  