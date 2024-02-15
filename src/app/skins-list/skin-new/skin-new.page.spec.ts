import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkinNewPage } from './skin-new.page';

describe('SkinNewPage', () => {
  let component: SkinNewPage;
  let fixture: ComponentFixture<SkinNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SkinNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
