import { IAth } from "../../shared/interfaces/ath.interface";
import { IBracketInitial } from "../../shared/interfaces/bracketInitial.interface";
import { IBracketResult } from "../../shared/interfaces/bracketResult.interface";
import { ICompetitionResult } from "../../shared/interfaces/competition-result.interface";
import { IFormulae } from "../../shared/interfaces/formular.interface";
import { IGroup } from "../../shared/interfaces/group.interface";
import { IGroupInitial } from "../../shared/interfaces/groupInitial.interface";
import { IGroupResult } from "../../shared/interfaces/groupResult.interface";
import { IInfo } from "../../shared/interfaces/info.interface";
import { INewCompetitionForm } from "../../shared/interfaces/newCompetitionForm.interface";
import { IParticipantForm } from "../../shared/interfaces/participantForm.interface";
import { IRef } from "../../shared/interfaces/ref.interface";

export class CompetitionResultEntity implements ICompetitionResult {
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
	
	constructor(competitionResult: ICompetitionResult) {
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
	}

}