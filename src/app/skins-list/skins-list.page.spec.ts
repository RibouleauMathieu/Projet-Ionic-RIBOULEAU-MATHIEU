import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkinsListPage } from './skins-list.page';

describe('SkinsListPage', () => {
  let component: SkinsListPage;
  let fixture: ComponentFixture<SkinsListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SkinsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
