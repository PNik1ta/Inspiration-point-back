import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CompetitionController } from "./competition.controller";
import { CompetitionRepository } from "./repositories/competition.repository";
import { CompetitionService } from "./competition.service";

import { Competition, CompetitionSchema } from "./models/competition.model";
import { Ath, AthSchema } from "./models/ath.model";
import { BracketInitial, BracketInitialSchema } from "./models/bracketInitial.model";
import { BracketResult, BracketResultSchema } from "./models/bracketResult.model";
import { Formulae, FormulaeSchema } from "./models/formulae.model";
import { GroupInitial, GroupInitialSchema } from "./models/groupInitial.model";
import { GroupResult, GroupResultSchema } from "./models/groupResult.model";
import { Info, InfoSchema } from "./models/info.model";
import { NewCompetitionForm, NewCompetitionFormSchema } from "./models/newCompetitionForm.model";
import { ParticipantForm, ParticipantFormSchema } from "./models/participantForm.model";
import { Ref, RefSchema } from "./models/ref.model";
import { Group, GroupSchema } from "./models/group.model";
import { CompetitionResult, CompetitionResultSchema } from "./models/competitionResults.model";

@Module({
	controllers: [CompetitionController],
	providers: [CompetitionRepository, CompetitionService],
	imports: [MongooseModule.forFeature([
		{ name: Competition.name, schema: CompetitionSchema },
		{ name: Ath.name, schema: AthSchema },
		{ name: BracketInitial.name, schema: BracketInitialSchema },
		{ name: BracketResult.name, schema: BracketResultSchema },
		{ name: Formulae.name, schema: FormulaeSchema },
		{ name: GroupInitial.name, schema: GroupInitialSchema },
		{ name: GroupResult.name, schema: GroupResultSchema },
		{ name: Info.name, schema: InfoSchema },
		{ name: NewCompetitionForm.name, schema: NewCompetitionFormSchema },
		{ name: ParticipantForm.name, schema: ParticipantFormSchema },
		{ name: Ref.name, schema: RefSchema },
		{ name: Group.name, schema: GroupSchema },
		{ name: CompetitionResult.name, schema: CompetitionResultSchema }
	])],
})
export class CompetitionModule { }