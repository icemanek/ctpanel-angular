import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveMeetingsComponent } from './archive-meetings.component';

describe('ArchiveMeetingsComponent', () => {
  let component: ArchiveMeetingsComponent;
  let fixture: ComponentFixture<ArchiveMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveMeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
