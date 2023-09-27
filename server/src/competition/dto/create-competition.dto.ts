import { ApiProperty } from "@nestjs/swagger";
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
import { IGroup } from "../../shared/interfaces/group.interface";
import { ICompetitionResult } from "../../shared/interfaces/competitionResults.interface";

export class CreateCompetitionDto {
	@ApiProperty({
		description: 'New competition form'
	})
	newCompetitionForm: INewCompetitionForm;

	@ApiProperty({
		description: 'Participant form list'
	})
	participantFormList: IParticipantForm[];

	@ApiProperty({
		description: 'Athlette list'
	})
	athList: IAth[];

	@ApiProperty({
		description: 'Referees list'
	})
	refList: IRef[];

	@ApiProperty({
		description: 'Competition formulae'
	})
	formulae: IFormulae;

	@ApiProperty({
		description: 'Groups'
	})
	groups: IGroup[];

	@ApiProperty({
		description: 'Initial groups'
	})
	groupsInitial: IGroupInitial[];

	@ApiProperty({
		description: 'Groups results'
	})
	groupsResults: IGroupResult[];

	@ApiProperty({
		description: 'Initial brackets'
	})
	bracketsInitial: IBracketInitial[];

	@ApiProperty({
		description: 'Brackets results'
	})
	bracketsResults: IBracketResult[];

	@ApiProperty({
		description: 'Information about competition'
	})
	info: IInfo[];

	@ApiProperty({
		description: 'Competition result'
	})
	competitionResults: ICompetitionResult[];
}