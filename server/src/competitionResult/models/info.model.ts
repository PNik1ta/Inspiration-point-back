import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IInfo } from "../../shared/interfaces/info.interface";

@Schema()
export class Info extends Document implements IInfo {
	@Prop()
	fightId?: number;

	@Prop()
	startTime?: string;

	@Prop()
	piste?: string;

	@Prop()
	compe?: string;

	@Prop()
	phase?: number;

	@Prop()
	poulTab?: string;

	@Prop()
	match?: number;

	@Prop()
	round?: number;

	@Prop()
	referees?: string[];

	@Prop()
	stopwatch?: string;

	@Prop()
	priority?: string;

	@Prop()
	state?: string;

	@Prop()
	nicknameRight?: number;

	@Prop()
	scoreRight?: number;

	@Prop()
	yCardRight?: number;

	@Prop()
	rCardRight?: number;

	@Prop()
	medicalRight?: number;

	@Prop()
	pCardRight?: number;

	@Prop()
	currentFightScoreRight?: number;

	@Prop()
	videoRight?: number;

	@Prop()
	nicknameLeft?: number;

	@Prop()
	scoreLeft?: number;

	@Prop()
	yCardLeft?: number;

	@Prop()
	rCardLeft?: number;

	@Prop()
	medicalLeft?: number;

	@Prop()
	pCardLeft?: number;

	@Prop()
	currentFightScoreLeft?: number;
	
	@Prop()
	videoLeft?: number;
}

export const InfoSchema = SchemaFactory.createForClass(Info);