import { TestBed } from '@angular/core/testing'

import { SignaturePadLibService } from './signature-pad-lib.service'

describe('SignaturePadLibService', () => {
  let service: SignaturePadLibService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SignaturePadLibService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
