import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  check() {
    return {
      ok: true,
      service: 'api',
      timestamp: new Date().toISOString()
    };
  }
}
