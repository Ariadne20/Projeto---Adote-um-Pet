import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular'
import { Geolocation } from '@capacitor/geolocation';


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
  petLatitude: number;
  petLongitude: number;
}

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent implements OnInit {

  @Input() public id:number;

  public Pet: Pet;

  lat1: number;
  lon1: number;
  lat2 = 0;
  lon2 = 0;
  distance: number;
   
  constructor(private storage:Storage) {

  }
  
  async ngOnInit() {
    await this.storage.create();
    this.Pet = this.pets.find(pet=>pet.id==this.id);
    this.lat2 = this.Pet.petLatitude;
    this.lon2 = this.Pet.petLongitude;
    this.calcCrow();
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
      DescricaoInstituicao:'Desde de 2007 ajudando animas a econtrar lares amorosos.',
      FotoInstituicao:'https://cdn.abcdoabc.com.br/Clinica-Castracao-Sao-Fransisco-de-Assis_1b82f472.jpg',
      petLatitude: -23.6734204,
      petLongitude: -46.5322179,
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
      petLatitude: -20.3135958,
      petLongitude: -40.2893737,
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
      petLatitude: -20.3135958,
      petLongitude: -40.2893737,
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
      petLatitude: -20.3135958,
      petLongitude: -40.2893737,
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

  public async calcCrow() 
  {
    const position = await Geolocation.getCurrentPosition();
    this.lat1 = position.coords.latitude;
    this.lon1 = position.coords.longitude;
    

    let lat1 = this.lat1;
    let lon1 = this.lon1;
    let lat2 = this.lat2;
    let lon2 = this.lon2;
    let R = 6371; // km
    let dLat = this.toRad(lat2-lat1);
    let dLon = this.toRad(lon2-lon1);
    lat1 = this.toRad(lat1);
    lat2 = this.toRad(lat2);

    let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c;
    this.distance = d;
  }

  // Converts numeric degrees to radians
  public toRad(Value) 
  {
      return Value * Math.PI / 180;
  }


}
