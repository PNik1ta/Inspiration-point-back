import { IAth } from "../../shared/interfaces/ath.interface";
import { IBracketInitial } from "../../shared/interfaces/bracketInitial.interface";
import { IBracketResult } from "../../shared/interfaces/bracketResult.interface";
import { ICompetition } from "../../shared/interfaces/competition-result.interface";
import { ICompetitionResult } from "../../shared/interfaces/competitionResults.interface";
import { IFormulae } from "../../shared/interfaces/formular.interface";
import { IGroup } from "../../shared/interfaces/group.interface";
import { IGroupInitial } from "../../shared/interfaces/groupInitial.interface";
import { IGroupResult } from "../../shared/interfaces/groupResult.interface";
import { IInfo } from "../../shared/interfaces/info.interface";
import { INewCompetitionForm } from "../../shared/interfaces/newCompetitionForm.interface";
import { IParticipantForm } from "../../shared/interfaces/participantForm.interface";
import { IRef } from "../../shared/interfaces/ref.interface";

export class CompetitionEntity implements ICompetition {
	_id?: string;
	newCompetitionForm: INewCompetitionForm;
	participantFormList: IParticipantForm[];
	athList: IAth[];
	refList: IRef[];
	formulae: IFormulae;
	groups: IGroup[];
	groupsInitial: IGroupInitial[];
	groupsResults: IGroupResult[];
	bracketsInitial: IBracketInitial[];
	bracketsResults: IBracketResult[];
	info: IInfo[];
	competitionResults: ICompetitionResult[];

	constructor(competitionResult: ICompetition) {
		this._id = competitionResult._id;
		this.newCompetitionForm = competitionResult.newCompetitionForm;
		this.participantFormList = competitionResult.participantFormList;
		this.athList = competitionResult.athList;
		this.refList = competitionResult.refList;
		this.formulae = competitionResult.formulae;
		this.groups = competitionResult.groups;
		this.groupsInitial = competitionResult.groupsInitial;
		this.groupsResults = competitionResult.groupsResults;
		this.bracketsInitial = competitionResult.bracketsInitial;
		this.bracketsResults = competitionResult.bracketsResults;
		this.info = competitionResult.info;
		this.competitionResults = competitionResult.competitionResults;
	}

}