import { CurrencyPipe } from './currency-pipe';
import { TestBed } from '@angular/core/testing';

describe('CurrencyPipe', () => {
  let pipe: CurrencyPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyPipe]
    });
    pipe = TestBed.inject(CurrencyPipe);
  })
  it('should format a number to currency', () => {
    const pipe = new CurrencyPipe();
    expect(pipe.transform(123456789)).toEqual('1,234,567,890 ���');
  });
});
