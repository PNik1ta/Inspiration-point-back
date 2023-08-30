import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IGroupInitial } from "../../shared/interfaces/groupInitial.interface";

@Schema()
export class GroupInitial extends Document implements IGroupInitial {
	@Prop()
	nickname?: number;

	@Prop()
	poolNumber?: number;

	@Prop()
	athleteRankPool?: number;
}

export const GroupInitialSchema = SchemaFactory.createForClass(GroupInitial);