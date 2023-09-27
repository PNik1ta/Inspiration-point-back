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

	constructor(competition: ICompetition) {
		this._id = competition._id;
		this.newCompetitionForm = competition.newCompetitionForm;
		this.participantFormList = competition.participantFormList;
		this.athList = competition.athList;
		this.refList = competition.refList;
		this.formulae = competition.formulae;
		this.groups = competition.groups;
		this.groupsInitial = competition.groupsInitial;
		this.groupsResults = competition.groupsResults;
		this.bracketsInitial = competition.bracketsInitial;
		this.bracketsResults = competition.bracketsResults;
		this.info = competition.info;
		this.competitionResults = competition.competitionResults;
	}

}