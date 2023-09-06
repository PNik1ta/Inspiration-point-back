import { Module } from "@nestjs/common";
import { CompetitionResultController } from "./competitionResult.controller";
import { CompetitionResultRepository } from "./repositories/competitionResult.repository";
import { CompetitionResultService } from "./competitionResult.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CompetitionResult, CompetitionResultSchema } from "./models/competitionResult.model";
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

@Module({
	controllers: [CompetitionResultController],
	providers: [CompetitionResultRepository, CompetitionResultService],
	imports: [MongooseModule.forFeature([
		{ name: CompetitionResult.name, schema: CompetitionResultSchema },
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
		{ name: Group.name, schema: GroupSchema }
	])],
})
export class CompetitionResultModule {}