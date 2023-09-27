import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IGroupResult } from "../../shared/interfaces/groupResult.interface";
import { GroupResultStatus } from "../../shared/enums/group-result-status.enum";

@Schema()
export class GroupResult extends Document implements IGroupResult {
	@Prop()
	nickname?: number;

	@Prop()
	coefficient?: number;

	@Prop()
	indicator?: number;

	@Prop({ enum: GroupResultStatus })
	status?: GroupResultStatus;

	@Prop()
	rankAfterPools?: number;

	@Prop()
	bouts?: number;

	@Prop()
	wins?: number;

	@Prop()
	td?: number;

	@Prop()
	tr?: number;

	@Prop()
	placeInPool?: number;
}

export const GroupResultSchema = SchemaFactory.createForClass(GroupResult);