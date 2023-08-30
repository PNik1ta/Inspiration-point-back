import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IGroupResult } from "../../shared/interfaces/groupResult.interface";

@Schema()
export class GroupResult extends Document implements IGroupResult {
	@Prop()
	nickname?: number;

	@Prop()
	poolNumber?: number;

	@Prop()
	athleteRankPool?: number;

	@Prop()
	coefficient?: number;

	@Prop()
	indicator?: number;

	@Prop()
	status?: string;

	@Prop()
	rankAfterPools?: number;
}

export const GroupResultSchema = SchemaFactory.createForClass(GroupResult);