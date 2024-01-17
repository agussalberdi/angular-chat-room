import { TestBed } from '@angular/core/testing';

import { ChatRoomManagementService } from './chat-room-management.service';

describe('ChatRoomManagementService', () => {
  let service: ChatRoomManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatRoomManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
