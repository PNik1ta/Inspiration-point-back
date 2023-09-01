import { Injectable } from "@nestjs/common";
import { CompetitionResultRepository } from "./repositories/competitionResult.repository";
import { CreateCompetitionResultDto } from "./dto/create-competition-result.dto";
import { CompetitionResultEntity } from "./entities/competitionResult.entity";
import { COMPETITION_RESULT_CREATE_ERROR, COMPETITION_RESULT_FIND_ERROR, COMPETITION_RESULT_UPDATE_ERROR } from "../shared/errors/competition-result-errors";
import { BaseResponse } from "../shared/classes/base-response";
import { CompetitionResult } from "./models/competitionResult.model";
import { COMPETITION_RESULT_CREATE, COMPETITION_RESULT_DELETED, COMPETITION_RESULT_FIND_ALL, COMPETITION_RESULT_FIND_ONE, COMPETITION_RESULT_UPDATED } from "../shared/messages/competition-result-messages";
import { UpdateCompetitionResultDto } from "./dto/update-competition-result.dto";

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

	async findByCompetitionId(compId: string): Promise<BaseResponse<CompetitionResult>> {
		const competitionResult = await this.competitionResultRepository.findByCompetitionId(compId);

		if (!competitionResult) {
			return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_FIND_ERROR, null);
		}

		return new BaseResponse<CompetitionResult>(COMPETITION_RESULT_FIND_ONE, competitionResult);
	}

	async delete(id: string): Promise<BaseResponse<CompetitionResult>> {
		await this.competitionResultRepository.delete(id);	
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