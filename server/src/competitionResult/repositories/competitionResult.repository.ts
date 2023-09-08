import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CompetitionResult } from "../models/competitionResult.model";
import { Model } from "mongoose";
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
		return this.competitionResultModel.findOne({ 'newCompetitionForm.competitionName': name })
	}

	async findByCompetitionId(compId: string): Promise<CompetitionResult> {
		return this.competitionResultModel.findOne({ 'newCompetitionForm.competitionId': compId });
	}

	async delete(id: string): Promise<any> {
		return this.competitionResultModel.deleteOne({ _id: id }).exec();
	}

	async deleteAll(): Promise<any> {
		return this.competitionResultModel.deleteMany({}).exec();
	}

	async deleteByCompetitionName(name: string): Promise<any> {
		return this.competitionResultModel.deleteMany({ 'newCompetitionForm.competitionName': name });
	}

	async deleteByCompetitionId(id: string): Promise<any> {
		return this.competitionResultModel.deleteOne({ 'newCompetitionForm.competitionId': id })
	}

	async update({ _id, ...rest }: CompetitionResultEntity) {
		return this.competitionResultModel.updateOne({ _id }, { $set: { ...rest } });
	}
}