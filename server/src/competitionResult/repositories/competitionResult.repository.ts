import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CompetitionResult } from "../models/competitionResult.model";
import { Model } from "mongoose";
import { CompetitionResultEntity } from "../entities/competitionResult.entity";

@Injectable()
export class CompetitionResultRepository {
	constructor(
		@InjectModel(CompetitionResult.name) private readonly competitionResultModel: Model<CompetitionResult>
	) {}

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

	async delete(id: string): Promise<any> {
		return this.competitionResultModel.deleteOne({ _id: id }).exec();
	}

	async update({ _id, ...rest }: CompetitionResultEntity) {
		return this.competitionResultModel.updateOne({ _id }, { $set: { ...rest }});
	}
}