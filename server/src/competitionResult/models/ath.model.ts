import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IAth } from "../../shared/interfaces/ath.interface";
import { Document } from "mongoose";

@Schema()
export class Ath extends Document implements IAth {
	@Prop()
	nickname?: number;

	@Prop()
	startRanking?: number;

	@Prop()
	startPoints?: number;

	@Prop()
	athleteStatus?: string;
}

export const AthSchema = SchemaFactory.createForClass(Ath);