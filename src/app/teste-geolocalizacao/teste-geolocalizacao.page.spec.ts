import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TesteGeolocalizacaoPage } from './teste-geolocalizacao.page';

describe('TesteGeolocalizacaoPage', () => {
  let component: TesteGeolocalizacaoPage;
  let fixture: ComponentFixture<TesteGeolocalizacaoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteGeolocalizacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TesteGeolocalizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
