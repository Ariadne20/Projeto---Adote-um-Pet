import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OlhandoSeuPetPage } from './olhando-seu-pet.page';

describe('OlhandoSeuPetPage', () => {
  let component: OlhandoSeuPetPage;
  let fixture: ComponentFixture<OlhandoSeuPetPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OlhandoSeuPetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OlhandoSeuPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
