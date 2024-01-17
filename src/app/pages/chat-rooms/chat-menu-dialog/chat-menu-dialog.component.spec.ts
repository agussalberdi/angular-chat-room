import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMenuDialogComponent } from './chat-menu-dialog.component';

describe('ChatMenuDialogComponent', () => {
  let component: ChatMenuDialogComponent;
  let fixture: ComponentFixture<ChatMenuDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMenuDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatMenuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
