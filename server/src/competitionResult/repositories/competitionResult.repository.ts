import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CompetitionResult } from "../models/competitionResult.model";
import { CompetitionResultEntity } from "../entities/competitionResult.entity";

@Injectable()
export class CompetitionResultRepository {
	constructor(
		@InjectModel(CompetitionResult.name) private readonly competitionResultModel: Model<CompetitionResult>
	) { }

	async create(competitionResult: CompetitionResultEntity): Promise<CompetitionResult> {
		const newCompetitionResult = new this.competitionResultModel(competitionResult);
		return newCompetitionResult.save();
	}

	async findAll(): Promise<CompetitionResult[]> {
		return this.competitionResultModel.find().exec();
	}

	async findById(id: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findById(id).exec();
	}

	async findByCompetitionName(name: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findOne({ 'newCompetitionForm.competitionName': name }).exec();
	}

	async findByCompetitionId(compId: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findOne({ 'newCompetitionForm.competitionId': compId }).exec();
	}

	async findAthList(id: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findById(id).select('athList').exec();
	}

	async findBracketInitial(id: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findById(id).select('bracketsInitial').exec();
	}

	async findBracketResults(id: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findById(id).select('bracketsResults').exec();
	}

	async findFormulae(id: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findById(id).select('formulae').exec();
	}

	async findGroups(id: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findById(id).select('groups').exec();
	}

	async findGroupsInitial(id: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findById(id).select('groupsInitial').exec();
	}

	async findGroupsResult(id: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findById(id).select('groupsResults').exec();
	}

	async findInfos(id: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findById(id).select('info').exec();
	}

	async findNewCompetitionForm(id: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findById(id).select('newCompetitionForm').exec();
	}

	async findParticipantFormList(id: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findById(id).select('participantFormList').exec();
	}

	async findRefList(id: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findById(id).select('refList').exec();
	}

	async delete(id: string): Promise<any> {
		return this.competitionResultModel.deleteOne({ _id: id });
	}

	async deleteAll(): Promise<any> {
		return this.competitionResultModel.deleteMany({});
	}

	async deleteByCompetitionName(name: string): Promise<any> {
		return this.competitionResultModel.deleteMany({ 'newCompetitionForm.competitionName': name });
	}

	async deleteByCompetitionId(id: string): Promise<any> {
		return this.competitionResultModel.deleteOne({ 'newCompetitionForm.competitionId': id });
	}

	async update({ _id, ...rest }: CompetitionResultEntity) {
		return this.competitionResultModel.updateOne({ _id }, { $set: { ...rest } });
	}
}