import { TestBed, async } from '@angular/core/testing';
import { getEndString, getStartString } from './utilities';

describe('Utilities', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({}).compileComponents();
  }));

  describe('getEndString', () => {
    it('should throw, invalid input', () => {
      expect(() => getEndString(null)).toThrow(new Error('Please provide a valid date'))
    });

    it('should finishes today', () => {
      const date = new Date();

      expect(getEndString(date)).toEqual(`Finishes: today at ${date.toLocaleTimeString('nl')}`)
    });

    it('should finishes in the future', () => {
      const date = new Date();
      date.setDate(date.getDate() + 1);

      expect(getEndString(date)).toEqual(`Finishes: ${date.toLocaleDateString('nl')}`)
    })

    it('should finished in the past', () => {
      const date = new Date();
      date.setDate(date.getDate() - 1);

      expect(getEndString(date)).toEqual(`Finished: ${date.toLocaleDateString('nl')}`)
    })
  })

  describe('getStartString', () => {
    it('should throw, invalid input', () => {
      expect(() => getStartString(null)).toThrow(new Error('Please provide a valid date'))
    });

    it('should starts today', () => {
      const date = new Date();

      expect(getStartString(date)).toEqual(`Starts: today at ${date.toLocaleTimeString('nl')}`)
    });

    it('should start in the future', () => {
      const date = new Date();
      date.setDate(date.getDate() + 1);

      expect(getStartString(date)).toEqual(`Starts: ${date.toLocaleDateString('nl')}`)
    })

    it('should finished in the past', () => {
      const date = new Date();
      date.setDate(date.getDate() - 1);

      expect(getStartString(date)).toEqual(`Started: ${date.toLocaleDateString('nl')}`)
    })
  })
});
