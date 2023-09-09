import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Assignment1Component } from './assignment1.component';
import { DataService } from '../data.service';

describe('Assignment1Component', () => {
  let component: Assignment1Component;
  let fixture: ComponentFixture<Assignment1Component>;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(() => {
    dataService = jasmine.createSpyObj('DataService', ['getJsonData']);

    TestBed.configureTestingModule({
      declarations: [Assignment1Component],
      providers: [{ provide: DataService, useValue: dataService }],
    });

    fixture = TestBed.createComponent(Assignment1Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data from DataService', () => {
    const testData = [{ question: 'Q1', answer: 'A1' }, { question: 'Q2', answer: 'A2' }];
    dataService.getJsonData.and.returnValue(of(testData));

    fixture.detectChanges();

    expect(component.qaList).toEqual(testData);
  });
});
