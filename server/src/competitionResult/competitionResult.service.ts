import { Injectable } from "@nestjs/common";

import { BaseResponse } from "../shared/classes/base-response";
import { CompetitionResultEntity } from "./entities/competitionResult.entity";
import { CompetitionResultRepository } from "./repositories/competitionResult.repository";
import { CompetitionResult } from "./models/competitionResult.model";

import { CreateCompetitionResultDto } from "./dto/create-competition-result.dto";
import { UpdateCompetitionResultDto } from "./dto/update-competition-result.dto";

import { COMPETITION_RESULT_CREATE_ERROR, COMPETITION_RESULT_FIND_ERROR, COMPETITION_RESULT_UPDATE_ERROR } from "../shared/errors/competition-result-errors";
import { COMPETITION_RESULT_CREATE, COMPETITION_RESULT_DELETED, COMPETITION_RESULT_FIND_ALL, COMPETITION_RESULT_FIND_ONE, COMPETITION_RESULT_UPDATED } from "../shared/messages/competition-result-messages";

import { IAth } from "../shared/interfaces/ath.interface";
import { IBracketInitial } from "../shared/interfaces/bracketInitial.interface";
import { IBracketResult } from "../shared/interfaces/bracketResult.interface";
import { IFormulae } from "../shared/interfaces/formular.interface";
import { IGroup } from "../shared/interfaces/group.interface";
import { IGroupInitial } from "../shared/interfaces/groupInitial.interface";
import { IGroupResult } from "../shared/interfaces/groupResult.interface";
import { IInfo } from "../shared/interfaces/info.interface";
import { INewCompetitionForm } from "../shared/interfaces/newCompetitionForm.interface";
import { IParticipantForm } from "../shared/interfaces/participantForm.interface";
import { IRef } from "../shared/interfaces/ref.interface";

@Injectable()
export class CompetitionResultService {
	constructor(
		private readonly competitionResultRepository: CompetitionResultRepository
	) {}

	async create(dto: CreateCompetitionResultDto): Promise<BaseResponse<CompetitionResult>> {
		const entity: CompetitionResultEntity = new CompetitionResultEntity({
			...dto
		});

		const createdCompetitionResult = await this.competitionResultRepository.create(entity);

		if (!createdCompetitionResult) {
			throw new Error(COMPETITION_RESULT_CREATE_ERROR);
		}

		return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_CREATE, createdCompetitionResult)
	}

	async findAll(): Promise<BaseResponse<CompetitionResult[]>> {
		const competitionResults = await this.competitionResultRepository.findAll();

		if (!competitionResults) {
			throw new Error(COMPETITION_RESULT_FIND_ERROR);
		}

		return new BaseResponse<CompetitionResult[]>(COMPETITION_RESULT_FIND_ALL, competitionResults);
	}

	async findById(id: string): Promise<BaseResponse<CompetitionResult>> {
		const competitionResult = await this.competitionResultRepository.findById(id);

		if (!competitionResult) {
			return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_FIND_ERROR, null);
		}

		return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_FIND_ONE, competitionResult);
	}

	async findByCompetitionName(name: string): Promise<BaseResponse<CompetitionResult>> {
		const competitionResult = await this.competitionResultRepository.findByCompetitionName(name);

		if (!competitionResult) {
			return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_FIND_ERROR, null);
		}

		return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_FIND_ONE, competitionResult);
	}

	async findByCompetitionId(compId: string): Promise<BaseResponse<CompetitionResult>> {
		const competitionResult = await this.competitionResultRepository.findByCompetitionId(compId);

		if (!competitionResult) {
			return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_FIND_ERROR, null);
		}

		return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_FIND_ONE, competitionResult);
	}

	async findAthList(id: string): Promise<BaseResponse<IAth[]>> {
		const result = await this.competitionResultRepository.findAthList(id);

		if (!result) {
			return new BaseResponse<IAth[]>(COMPETITION_RESULT_FIND_ERROR, []);
		}

		return new BaseResponse<IAth[]>(COMPETITION_RESULT_FIND_ONE, result.athList);
	}

	async findBracketsInitial(id: string): Promise<BaseResponse<IBracketInitial[]>> {
		const result = await this.competitionResultRepository.findBracketInitial(id);

		if (!result) {
			return new BaseResponse<IBracketInitial[]>(COMPETITION_RESULT_FIND_ERROR, []);
		}

		return new BaseResponse<IBracketInitial[]>(COMPETITION_RESULT_FIND_ONE, result.bracketsInitial);
	}

	async findBracketResults(id: string): Promise<BaseResponse<IBracketResult[]>> {
		const result = await this.competitionResultRepository.findBracketResults(id);

		if (!result) {
			return new BaseResponse<IBracketResult[]>(COMPETITION_RESULT_FIND_ERROR, []);
		}

		return new BaseResponse<IBracketResult[]>(COMPETITION_RESULT_FIND_ONE, result.bracketsResults);
	}

	async findFormulae(id: string): Promise<BaseResponse<IFormulae>> {
		const result = await this.competitionResultRepository.findFormulae(id);

		if (!result) {
			return new BaseResponse<IFormulae>(COMPETITION_RESULT_FIND_ERROR, null);
		}

		return new BaseResponse<IFormulae>(COMPETITION_RESULT_FIND_ONE, result.formulae);
	}

	async findGroups(id: string): Promise<BaseResponse<IGroup[]>> {
		const result = await this.competitionResultRepository.findGroups(id);

		if (!result) {
			return new BaseResponse<IGroup[]>(COMPETITION_RESULT_FIND_ERROR, []);
		}

		return new BaseResponse<IGroup[]>(COMPETITION_RESULT_FIND_ONE, result.groups);
	}

	async findGroupsInitial(id: string): Promise<BaseResponse<IGroupInitial[]>> {
		const result = await this.competitionResultRepository.findGroupsInitial(id);

		if (!result) {
			return new BaseResponse<IGroupInitial[]>(COMPETITION_RESULT_FIND_ERROR, []);
		}

		return new BaseResponse<IGroupInitial[]>(COMPETITION_RESULT_FIND_ONE, result.groupsInitial);
	}

	async findGroupsResults(id: string): Promise<BaseResponse<IGroupResult[]>> {
		const result = await this.competitionResultRepository.findGroupsResult(id);

		if (!result) {
			return new BaseResponse<IGroupResult[]>(COMPETITION_RESULT_FIND_ERROR, []);
		}

		return new BaseResponse<IGroupResult[]>(COMPETITION_RESULT_FIND_ONE, result.groupsResults);
	}

	async findInfos(id: string): Promise<BaseResponse<IInfo[]>> {
		const result = await this.competitionResultRepository.findInfos(id);

		if (!result) {
			return new BaseResponse<IInfo[]>(COMPETITION_RESULT_FIND_ERROR, []);
		}

		return new BaseResponse<IInfo[]>(COMPETITION_RESULT_FIND_ONE, result.info);
	}

	async findNewCompetitionForm(id: string): Promise<BaseResponse<INewCompetitionForm>> {
		const result = await this.competitionResultRepository.findNewCompetitionForm(id);

		if (!result) {
			return new BaseResponse<INewCompetitionForm>(COMPETITION_RESULT_FIND_ERROR, null);
		}

		return new BaseResponse<INewCompetitionForm>(COMPETITION_RESULT_FIND_ONE, result.newCompetitionForm);
	}

	async findParticipantFormList(id: string): Promise<BaseResponse<IParticipantForm[]>> {
		const result = await this.competitionResultRepository.findParticipantFormList(id);

		if (!result) {
			return new BaseResponse<IParticipantForm[]>(COMPETITION_RESULT_FIND_ERROR, []);
		}

		return new BaseResponse<IParticipantForm[]>(COMPETITION_RESULT_FIND_ONE, result.participantFormList);
	}

	async findRefList(id: string): Promise<BaseResponse<IRef[]>> {
		const result = await this.competitionResultRepository.findRefList(id);

		if (!result) {
			return new BaseResponse<IRef[]>(COMPETITION_RESULT_FIND_ERROR, []);
		}

		return new BaseResponse<IRef[]>(COMPETITION_RESULT_FIND_ONE, result.refList);
	}

	async delete(id: string): Promise<BaseResponse<CompetitionResult>> {
		await this.competitionResultRepository.delete(id);	
		return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_DELETED);
	}

	async deleteAll(): Promise<BaseResponse<CompetitionResult>> {
		await this.competitionResultRepository.deleteAll();	
		return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_DELETED);
	}

	async deleteByCompetitionName(name: string): Promise<BaseResponse<CompetitionResult>> {
		await this.competitionResultRepository.deleteByCompetitionName(name);	
		return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_DELETED);
	}

	async deleteByCompetitionId(id: string): Promise<BaseResponse<CompetitionResult>> {
		await this.competitionResultRepository.deleteByCompetitionId(id);	
		return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_DELETED);
	}

	async update(id: string, dto: UpdateCompetitionResultDto): Promise<BaseResponse<CompetitionResult>> {
		const competitionResult = await this.competitionResultRepository.findById(id);

		if (!competitionResult) {
			throw new Error(COMPETITION_RESULT_FIND_ERROR);
		}

		const competitionResultEntity = new CompetitionResultEntity(competitionResult);
		competitionResultEntity.athList = dto.athList;
		competitionResultEntity.bracketsInitial = dto.bracketsInitial;
		competitionResultEntity.bracketsResults = dto.bracketsResults;
		competitionResultEntity.formulae = dto.formulae;
		competitionResultEntity.groups = dto.groups;
		competitionResultEntity.groupsInitial = dto.groupsInitial;
		competitionResultEntity.groupsResults = dto.groupsResults;
		competitionResultEntity.info = dto.info;
		competitionResultEntity.newCompetitionForm = dto.newCompetitionForm;
		competitionResultEntity.participantFormList = dto.participantFormList;
		competitionResultEntity.refList = dto.refList;

		const updatedCompetitionResult = await this.competitionResultRepository.update(competitionResultEntity);

		if (!updatedCompetitionResult) {
			throw new Error(COMPETITION_RESULT_UPDATE_ERROR);
		}

		return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_UPDATED);
	}
}