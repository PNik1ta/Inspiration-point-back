import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IFormulae } from "../../shared/interfaces/formular.interface";

@Schema()
export class Formulae extends Document implements IFormulae {
	@Prop()
	roundNumber?: number;

	@Prop()
	roundTypes?: string;

	@Prop()
	poolsQuantity?: number;

	@Prop()
	pointsInPools?: number;

	@Prop()
	pointsInBrackets?: number;

	@Prop()
	athletesQuantityBrackets?: number;

	@Prop()
	allPlacesFence?: string;

	@Prop()
	consolation?: number;
}

export const FormulaeSchema = SchemaFactory.createForClass(Formulae);