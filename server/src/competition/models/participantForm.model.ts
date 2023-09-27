import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IParticipantForm } from "../../shared/interfaces/participantForm.interface";

@Schema()
export class ParticipantForm extends Document implements IParticipantForm {
	@Prop()
	nickname?: number;

	@Prop()
	surname?: string;

	@Prop()
	name?: string;

	@Prop()
	fatherName?: string;

	@Prop()
	region?: string;

	@Prop()
	yearOfBirthday?: string;

	@Prop()
	gender?: string;

	@Prop()
	country?: string;

	@Prop()
	club?: string;

	@Prop()
	coach?: string;

	@Prop()
	hand?: string;

	@Prop()
	degree?: string;

	@Prop()
	licence?: string;

	@Prop()
	refereeFoilCategory?: string;

	@Prop()
	refereeEpeeCategory?: string;

	@Prop()
	refereeSabreCategory?: string;

	@Prop()
	ranking?: number;
}

export const ParticipantFormSchema = SchemaFactory.createForClass(ParticipantForm);