import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IBracketResult } from "../../shared/interfaces/bracketResult.interface";

@Schema()
export class BracketResult extends Document implements IBracketResult {
	@Prop()
	nickname?: number;

	@Prop()
	rankAfterBrackets?: number;

	@Prop()
	status?: string;
}

export const BracketResultSchema = SchemaFactory.createForClass(BracketResult);