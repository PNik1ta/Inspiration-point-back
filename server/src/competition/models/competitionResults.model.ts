import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ICompetitionResult } from "../../shared/interfaces/competitionResults.interface";

@Schema()
export class CompetitionResult extends Document implements ICompetitionResult {
	@Prop()
	nickname?: number;

	@Prop()
	finalRank?: number;
}

export const CompetitionResultSchema = SchemaFactory.createForClass(CompetitionResult);