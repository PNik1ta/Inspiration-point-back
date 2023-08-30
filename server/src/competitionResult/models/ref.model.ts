import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IRef } from "../../shared/interfaces/ref.interface";

@Schema()
export class Ref extends Document implements IRef {
	@Prop()
	nickname?: number;

	@Prop()
	refereeStatus?: string;
}

export const RefSchema = SchemaFactory.createForClass(Ref);