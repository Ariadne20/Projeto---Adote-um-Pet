import { Component, OnInit } from '@angular/core';
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
}

@Component({
  selector: 'app-teste-geolocalizacao',
  templateUrl: './teste-geolocalizacao.page.html',
  styleUrls: ['./teste-geolocalizacao.page.scss'],
})

export class TesteGeolocalizacaoPage implements OnInit {

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
    }
  ]

  petLatitude: -20.3135958;
  petLongitude:-40.2893737;
  mylatitude: -20.3480338;
  mylongitude: -40.2975204;  
  distance;
  latitude: number;
  longitude: number;
  lat1: number;
  lon1: number;
  lat2 = -23.6734204;
  lon2 = -46.5322179;

  constructor() { }

  ngOnInit() {
  }


  public async calcCrow(lat1, lon1, lat2, lon2) 
  {
    const position = await Geolocation.getCurrentPosition();
    this.lat1 = position.coords.latitude;
    this.lon1 = position.coords.longitude;
    

    lat1 = this.lat1;
    lon1 = this.lon1;
    lat2 = this.lat2;
    lon2 = this.lon2;
    var R = 6371; // km
    var dLat = this.toRad(lat2-lat1);
    var dLon = this.toRad(lon2-lon1);
    lat1 = this.toRad(lat1);
    lat2 = this.toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    console.log(d);
  }

  // Converts numeric degrees to radians
  public toRad(Value) 
  {
      return Value * Math.PI / 180;
  }
}
