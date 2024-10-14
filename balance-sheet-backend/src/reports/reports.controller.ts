import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('balance-sheet')
  async getBalanceSheet(@Res() response): Promise<any> {
    try {
      const data = await this.reportsService.fetchBalanceSheet();
      return response.status(HttpStatus.OK).json(data);
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: 'Failed to fetch balance sheet',
      });
    }
  }
}
