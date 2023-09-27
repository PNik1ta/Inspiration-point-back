import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Competition } from "../models/competition.model";
import { CompetitionEntity } from "../entities/competition.entity";

@Injectable()
export class CompetitionRepository {
	constructor(
		@InjectModel(Competition.name) private readonly competitionModel: Model<Competition>
	) { }

	async create(competition: CompetitionEntity): Promise<Competition> {
		console.log('---------------------------------------------------------------------------');
		console.log(competition);
		console.log('--------------------------------------------------------------------------');
		
		const newCompetition = new this.competitionModel(competition);
		return newCompetition.save();
	}

	async findAll(): Promise<Competition[]> {
		return this.competitionModel.find().exec();
	}

	async findById(id: string): Promise<Competition> {
		return this.competitionModel.findById(id).exec();
	}

	async findByCompetitionName(name: string): Promise<Competition> {
		return this.competitionModel.findOne({ 'newCompetitionForm.competitionName': name }).exec();
	}

	async findByCompetitionId(compId: string): Promise<Competition> {
		return this.competitionModel.findOne({ 'newCompetitionForm.competitionId': compId }).exec();
	}

	async findAthList(id: string): Promise<Competition> {
		return this.competitionModel.findById(id).select('athList').exec();
	}

	async findBracketInitial(id: string): Promise<Competition> {
		return this.competitionModel.findById(id).select('bracketsInitial').exec();
	}

	async findBracketResults(id: string): Promise<Competition> {
		return this.competitionModel.findById(id).select('bracketsResults').exec();
	}

	async findFormulae(id: string): Promise<Competition> {
		return this.competitionModel.findById(id).select('formulae').exec();
	}

	async findGroups(id: string): Promise<Competition> {
		return this.competitionModel.findById(id).select('groups').exec();
	}

	async findGroupsInitial(id: string): Promise<Competition> {
		return this.competitionModel.findById(id).select('groupsInitial').exec();
	}

	async findGroupsResult(id: string): Promise<Competition> {
		return this.competitionModel.findById(id).select('groupsResults').exec();
	}

	async findInfos(id: string): Promise<Competition> {
		return this.competitionModel.findById(id).select('info').exec();
	}

	async findNewCompetitionForm(id: string): Promise<Competition> {
		return this.competitionModel.findById(id).select('newCompetitionForm').exec();
	}

	async findParticipantFormList(id: string): Promise<Competition> {
		return this.competitionModel.findById(id).select('participantFormList').exec();
	}

	async findRefList(id: string): Promise<Competition> {
		return this.competitionModel.findById(id).select('refList').exec();
	}

	async delete(id: string): Promise<any> {
		return this.competitionModel.deleteOne({ _id: id });
	}

	async deleteAll(): Promise<any> {
		return this.competitionModel.deleteMany({});
	}

	async deleteByCompetitionName(name: string): Promise<any> {
		return this.competitionModel.deleteMany({ 'newCompetitionForm.competitionName': name });
	}

	async deleteByCompetitionId(id: string): Promise<any> {
		return this.competitionModel.deleteOne({ 'newCompetitionForm.competitionId': id });
	}

	async update({ _id, ...rest }: CompetitionEntity) {
		console.log('---------------------------------------------------------------------------');
		console.log(rest);
		console.log('--------------------------------------------------------------------------');
		return this.competitionModel.updateOne({ _id }, { $set: { ...rest } });
	}
}