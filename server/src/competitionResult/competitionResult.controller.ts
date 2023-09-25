import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

import { CompetitionResultService } from "./competitionResult.service";
import { BaseResponse } from "../shared/classes/base-response";
import { CompetitionResult } from "./models/competitionResult.model";

import { CreateCompetitionResultDto } from "./dto/create-competition-result.dto";
import { UpdateCompetitionResultDto } from "./dto/update-competition-result.dto";

import { Ath } from "./models/ath.model";
import { IAth } from "../shared/interfaces/ath.interface";

import { IBracketInitial } from "../shared/interfaces/bracketInitial.interface";
import { BracketInitial } from "./models/bracketInitial.model";

import { BracketResult } from "./models/bracketResult.model";
import { IBracketResult } from "../shared/interfaces/bracketResult.interface";

import { Formulae } from "./models/formulae.model";
import { IFormulae } from "../shared/interfaces/formular.interface";

import { IGroup } from "../shared/interfaces/group.interface";
import { Group } from "./models/group.model";

import { GroupInitial } from "./models/groupInitial.model";
import { IGroupInitial } from "../shared/interfaces/groupInitial.interface";

import { GroupResult } from "./models/groupResult.model";
import { IGroupResult } from "../shared/interfaces/groupResult.interface";

import { Info } from "./models/info.model";
import { IInfo } from "../shared/interfaces/info.interface";

import { INewCompetitionForm } from "../shared/interfaces/newCompetitionForm.interface";
import { NewCompetitionForm } from "./models/newCompetitionForm.model";

import { IParticipantForm } from "../shared/interfaces/participantForm.interface";
import { ParticipantForm } from "./models/participantForm.model";

import { IRef } from "../shared/interfaces/ref.interface";
import { Ref } from "./models/ref.model";

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
		console.log(dto.groups);

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
		description: 'competition result by competition id',
		type: CompetitionResult,
	})
	@Get('find-by-competition-id/:compId')
	@HttpCode(200)
	findByCompetitionId(@Param('compId') compId: string): Promise<BaseResponse<CompetitionResult>> {
		return this.competitionResultService.findByCompetitionId(compId);
	}

	@ApiOkResponse({
		description: 'competition result by competition name',
		type: CompetitionResult,
	})
	@Get('find-by-competition-name/:name')
	@HttpCode(200)
	findByCompetitionName(@Param('name') name: string): Promise<BaseResponse<CompetitionResult>> {
		return this.competitionResultService.findByCompetitionName(name);
	}

	@ApiOkResponse({
		description: 'ath list by competition id',
		type: Ath,
		isArray: true
	})
	@Get('find-ath-list/:id')
	@HttpCode(200)
	findAthList(@Param('id') id: string): Promise<BaseResponse<IAth[]>> {
		return this.competitionResultService.findAthList(id);
	}

	@ApiOkResponse({
		description: 'brackets initial by competition id',
		type: BracketInitial,
		isArray: true
	})
	@Get('find-brackets-initial/:id')
	@HttpCode(200)
	findBracketsInitial(@Param('id') id: string): Promise<BaseResponse<IBracketInitial[]>> {
		return this.competitionResultService.findBracketsInitial(id);
	}

	@ApiOkResponse({
		description: 'brackets results by competition id',
		type: BracketResult,
		isArray: true
	})
	@Get('find-brackets-results/:id')
	@HttpCode(200)
	findBracketsResults(@Param('id') id: string): Promise<BaseResponse<IBracketResult[]>> {
		return this.competitionResultService.findBracketResults(id);
	}

	@ApiOkResponse({
		description: 'formulae by competition id',
		type: Formulae
	})
	@Get('find-formulae/:id')
	@HttpCode(200)
	findFormulae(@Param('id') id: string): Promise<BaseResponse<IFormulae>> {
		return this.competitionResultService.findFormulae(id);
	}

	@ApiOkResponse({
		description: 'groups by competition id',
		type: Group,
		isArray: true
	})
	@Get('find-groups/:id')
	@HttpCode(200)
	findGroups(@Param('id') id: string): Promise<BaseResponse<IGroup[]>> {
		return this.competitionResultService.findGroups(id);
	}

	@ApiOkResponse({
		description: 'groups initial by competition id',
		type: GroupInitial,
		isArray: true
	})
	@Get('find-groups-initial/:id')
	@HttpCode(200)
	findGroupsInitial(@Param('id') id: string): Promise<BaseResponse<IGroupInitial[]>> {
		return this.competitionResultService.findGroupsInitial(id);
	}

	@ApiOkResponse({
		description: 'groups results by competition id',
		type: GroupResult,
		isArray: true
	})
	@Get('find-groups-results/:id')
	@HttpCode(200)
	findGroupsResults(@Param('id') id: string): Promise<BaseResponse<IGroupResult[]>> {
		return this.competitionResultService.findGroupsResults(id);
	}

	@ApiOkResponse({
		description: 'infos by competition id',
		type: Info,
		isArray: true
	})
	@Get('find-infos/:id')
	@HttpCode(200)
	findInfos(@Param('id') id: string): Promise<BaseResponse<IInfo[]>> {
		return this.competitionResultService.findInfos(id);
	}

	@ApiOkResponse({
		description: 'new competition form by competition id',
		type: NewCompetitionForm
	})
	@Get('find-new-competition-form/:id')
	@HttpCode(200)
	findNewCompetitionForm(@Param('id') id: string): Promise<BaseResponse<INewCompetitionForm>> {
		return this.competitionResultService.findNewCompetitionForm(id);
	}

	@ApiOkResponse({
		description: 'participant form list by competition id',
		type: ParticipantForm,
		isArray: true
	})
	@Get('find-participant-form-list/:id')
	@HttpCode(200)
	findParticipantFormList(@Param('id') id: string): Promise<BaseResponse<IParticipantForm[]>> {
		return this.competitionResultService.findParticipantFormList(id);
	}

	@ApiOkResponse({
		description: 'ref list by competition id',
		type: Ref,
		isArray: true
	})
	@Get('find-ref-list/:id')
	@HttpCode(200)
	findRefList(@Param('id') id: string): Promise<BaseResponse<IRef[]>> {
		return this.competitionResultService.findRefList(id);
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
		description: 'Deleted competition result',
		type: CompetitionResult,
	})
	@Delete('delete-all')
	@HttpCode(200)
	deleteAll(): Promise<BaseResponse<CompetitionResult>> {
		return this.competitionResultService.deleteAll();
	}

	@ApiOkResponse({
		description: 'Deleted competition result',
		type: CompetitionResult,
	})
	@Delete('delete-by-competition-name/:name')
	@HttpCode(200)
	deleteByCompetitionName(@Param('name') name: string): Promise<BaseResponse<CompetitionResult>> {
		return this.competitionResultService.deleteByCompetitionName(name);
	}

	@ApiOkResponse({
		description: 'Deleted competition result',
		type: CompetitionResult,
	})
	@Delete('delete-by-competition-id/:id')
	@HttpCode(200)
	deleteByCompetitionId(@Param('id') id: string): Promise<BaseResponse<CompetitionResult>> {
		return this.competitionResultService.deleteByCompetitionId(id);
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