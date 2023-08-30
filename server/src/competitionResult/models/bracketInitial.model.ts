import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IBracketInitial } from "../../shared/interfaces/bracketInitial.interface";

@Schema()
export class BracketInitial extends Document implements IBracketInitial {
	@Prop()
	nickname?: number;

	@Prop()
	bracketsRankNumber?: number;
}

export const BracketInitialSchema = SchemaFactory.createForClass(BracketInitial);