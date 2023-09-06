import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IGroupInitial } from "../../shared/interfaces/groupInitial.interface";
import { IGroup } from "../../shared/interfaces/group.interface";

@Schema()
export class Group extends Document implements IGroup {
	@Prop()
	startTime?: string;
	@Prop()
	referees: number[];
	@Prop()
	strip?: string;
}

export const GroupSchema = SchemaFactory.createForClass(Group);