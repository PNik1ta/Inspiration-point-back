import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { INewCompetitionForm } from "../../shared/interfaces/newCompetitionForm.interface";

@Schema()
export class NewCompetitionForm extends Document implements INewCompetitionForm {
	@Prop({ unique: true })
	competitionId: string;

	@Prop()
	competitionName?: string;

	@Prop()
	organizerCompany?: string;

	@Prop()
	organizerContact?: string;

	@Prop()
	competitionPlace?: string;

	@Prop()
	dateTimeCompetitionStart?: string;

	@Prop()
	dateTimeRegistrationClose?: string;

	@Prop()
	competitionType?: string;

	@Prop()
	weapon?: string;

	@Prop()
	gender?: string;

	@Prop()
	preliminaryFormulae?: string;

	@Prop()
	ageCategory?: string;

	@Prop()
	payment?: string;

	@Prop()
	description?: string;

	@Prop()
	imageLink?: string;
}

export const NewCompetitionFormSchema = SchemaFactory.createForClass(NewCompetitionForm);