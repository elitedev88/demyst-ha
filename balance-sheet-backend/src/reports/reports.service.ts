import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ReportsService {
  private readonly API_BASE_URL = 'http://xero-api-mock:3000/api.xro/2.0/Reports/BalanceSheet';

  async fetchBalanceSheet(): Promise<any> {
    try {
      const response = await axios.get(this.API_BASE_URL);
      return response.data;
    } catch (error) {
      throw new HttpException('Error fetching balance sheet from Xero API', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
