import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LootCrateComponent } from './loot-crate.component';

describe('LootCrateComponent', () => {
  let component: LootCrateComponent;
  let fixture: ComponentFixture<LootCrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LootCrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootCrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
