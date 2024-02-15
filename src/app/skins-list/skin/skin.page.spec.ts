import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkinPage } from './skin.page';

describe('SkinPage', () => {
  let component: SkinPage;
  let fixture: ComponentFixture<SkinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SkinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
