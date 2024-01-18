import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChatRoomComponent } from './add-chat-room.component';

describe('AddChatRoomComponent', () => {
  let component: AddChatRoomComponent;
  let fixture: ComponentFixture<AddChatRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChatRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
