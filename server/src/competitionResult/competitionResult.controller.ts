import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { CompetitionResultService } from "./competitionResult.service";
import { BaseResponse } from "../shared/classes/base-response";
import { CompetitionResult } from "./models/competitionResult.model";
import { CreateCompetitionResultDto } from "./dto/create-competition-result.dto";
import { UpdateCompetitionResultDto } from "./dto/update-competition-result.dto";

@Controller('competitionResult')
@ApiTags('competitionResult')
export class CompetitionResultController {
	constructor(
		private readonly competitionResultService: CompetitionResultService
	) { }

	@ApiOkResponse({
		description: 'Created competition result',
		type: BaseResponse<CompetitionResult>
	})
	@Post()
	@HttpCode(201)
	create(@Body() dto: CreateCompetitionResultDto): Promise<BaseResponse<CompetitionResult>> {
		return this.competitionResultService.create(dto);
	}

	@ApiOkResponse({
		description: 'All competition results',
		type: CompetitionResult,
		isArray: true
	})
	@Get()
	@HttpCode(200)
	findAll(): Promise<BaseResponse<CompetitionResult[]>> {
		return this.competitionResultService.findAll();
	}

	@ApiOkResponse({
		description: 'competition result by id',
		type: CompetitionResult,
	})
	@Get(':id')
	@HttpCode(200)
	findById(@Param('id') id: string): Promise<BaseResponse<CompetitionResult>> {
		return this.competitionResultService.findById(id);
	}

	@ApiOkResponse({
		description: 'Deleted competition result',
		type: CompetitionResult,
	})
	@Delete(':id')
	@HttpCode(200)
	delete(@Param('id') id: string): Promise<BaseResponse<CompetitionResult>> {
		return this.competitionResultService.delete(id);
	}

	@ApiOkResponse({
		description: 'Updated competition result',
		type: CompetitionResult,
	})
	@Put(':id')
	@HttpCode(200)
	update(@Param('id') id: string, @Body() dto: UpdateCompetitionResultDto): Promise<BaseResponse<CompetitionResult>> {
		return this.competitionResultService.update(id, dto);
	}
}