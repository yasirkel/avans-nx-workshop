import { Module } from '@nestjs/common';
import { MealController } from '../meals/meal.controller';
import { MealService } from '../meals/meal.service';

@Module({
  controllers: [MealController],
  providers: [MealService],
  exports: [MealService],
})
export class BackendFeaturesMealModule {}
