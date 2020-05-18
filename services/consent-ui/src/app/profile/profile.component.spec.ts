import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { UserProvider } from '../providers/user.provider';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  let userProviderStub: any;

  beforeEach(async(() => {
    userProviderStub = {
      getUserById: () => true
    }

    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [{provide: UserProvider, useValue: userProviderStub}]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
