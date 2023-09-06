import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ICompetitionResult } from "../../shared/interfaces/competition-result.interface";
import { IAth } from "../../shared/interfaces/ath.interface";
import { IBracketInitial } from "../../shared/interfaces/bracketInitial.interface";
import { IBracketResult } from "../../shared/interfaces/bracketResult.interface";
import { IFormulae } from "../../shared/interfaces/formular.interface";
import { IGroupInitial } from "../../shared/interfaces/groupInitial.interface";
import { IGroupResult } from "../../shared/interfaces/groupResult.interface";
import { IInfo } from "../../shared/interfaces/info.interface";
import { INewCompetitionForm } from "../../shared/interfaces/newCompetitionForm.interface";
import { IParticipantForm } from "../../shared/interfaces/participantForm.interface";
import { IRef } from "../../shared/interfaces/ref.interface";
import { Document } from "mongoose";
import { NewCompetitionFormSchema } from "./newCompetitionForm.model";
import { ParticipantFormSchema } from "./participantForm.model";
import { AthSchema } from "./ath.model";
import { RefSchema } from "./ref.model";
import { FormulaeSchema } from "./formulae.model";
import { GroupInitialSchema } from "./groupInitial.model";
import { GroupResultSchema } from "./groupResult.model";
import { BracketInitialSchema } from "./bracketInitial.model";
import { BracketResultSchema } from "./bracketResult.model";
import { InfoSchema } from "./info.model";
import { IGroup } from "../../shared/interfaces/group.interface";
import { GroupSchema } from "./group.model";

@Schema()
export class CompetitionResult extends Document implements ICompetitionResult {
	@Prop({ required: false, type: NewCompetitionFormSchema })
	newCompetitionForm: INewCompetitionForm;

	@Prop({ required: false, type: [ParticipantFormSchema] })
	participantFormList: IParticipantForm[];

	@Prop({ required: false, type: [AthSchema] })
	athList: IAth[];

	@Prop({ required: false, type: [RefSchema] })
	refList: IRef[];

	@Prop({ required: false, type: FormulaeSchema })
	formulae: IFormulae;

	@Prop({ required: false, type: GroupSchema })
	groups: IGroup[];

	@Prop({ required: false, type: [GroupInitialSchema] })
	groupsInitial: IGroupInitial[];

	@Prop({ required: false, type: [GroupResultSchema] })
	groupsResults: IGroupResult[];

	@Prop({ required: false, type: [BracketInitialSchema] })
	bracketsInitial: IBracketInitial[];

	@Prop({ required: false, type: [BracketResultSchema] })
	bracketsResults: IBracketResult[];

	@Prop({ required: false, type: [InfoSchema] })
	info: IInfo[];
}

export const CompetitionResultSchema = SchemaFactory.createForClass(CompetitionResult);