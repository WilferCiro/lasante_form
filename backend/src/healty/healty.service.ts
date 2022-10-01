import { Injectable } from '@nestjs/common';

@Injectable()
export class HealtyService {

    public getOk() {
        return {
            "status": "ok",
            "time": new Date()
        }
    }
}
