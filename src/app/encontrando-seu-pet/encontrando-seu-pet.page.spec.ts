import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncontrandoSeuPetPage } from './encontrando-seu-pet.page';

describe('EncontrandoSeuPetPage', () => {
  let component: EncontrandoSeuPetPage;
  let fixture: ComponentFixture<EncontrandoSeuPetPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EncontrandoSeuPetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncontrandoSeuPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
