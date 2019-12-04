import {async, ComponentFixture, TestBed} from '@angular/core/testing';

describe('ModelOverlayPowerChainComponent', () => {
  let component: ModelOverlayQuorumComponent;
  let fixture: ComponentFixture<ModelOverlayQuorumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelOverlayQuorumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelOverlayQuorumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
