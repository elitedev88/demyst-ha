import { Test, TestingModule } from '@nestjs/testing';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { HttpStatus } from '@nestjs/common';

describe('ReportsController', () => {
  let reportsController: ReportsController;
  let reportsService: ReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportsController],
      providers: [
        {
          provide: ReportsService,
          useValue: {
            fetchBalanceSheet: jest.fn(),
          },
        },
      ],
    }).compile();

    reportsController = module.get<ReportsController>(ReportsController);
    reportsService = module.get<ReportsService>(ReportsService);
  });

  describe('getBalanceSheet', () => {
    it('should return balance sheet data', async () => {
      const mockData = { report: 'data' };
      jest.spyOn(reportsService, 'fetchBalanceSheet').mockResolvedValue(mockData);

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await reportsController.getBalanceSheet(res as any);

      expect(res.status).toHaveBeenCalledWith(HttpStatus.OK);
      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle errors and return 500 status', async () => {
      jest.spyOn(reportsService, 'fetchBalanceSheet').mockRejectedValue(new Error('Error'));

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await reportsController.getBalanceSheet(res as any);

      expect(res.status).toHaveBeenCalledWith(HttpStatus.INTERNAL_SERVER_ERROR);
      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to fetch balance sheet' });
    });
  });
});
