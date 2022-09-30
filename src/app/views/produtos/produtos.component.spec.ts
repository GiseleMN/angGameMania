import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovosProdutosComponent } from './produtos.component';

describe('NovosProdutosComponent', () => {
  let component: NovosProdutosComponent;
  let fixture: ComponentFixture<NovosProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovosProdutosComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NovosProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
