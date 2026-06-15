export class CareerPageModel {
    mainSection: MainSectionGetModel | null;
    coreValueSection: CoreValueSectionModel| null;
    listCoreValue: CoreValueModel[] | null;
    getInvolvedSection: GetInvolvedSectionModel| null;
}

export class MainSectionGetModel {
    mainSectionTitle: string | null;
    mainSectionDescription: string| null;
    mainSectionImg: string| null;
}

export class CoreValueSectionModel {
    coreValueSectionId: number| null;
    coreValueTitle: string| null;
    coreValueDescription: string| null;
}

export class CoreValueModel {
    coreValueTitle: string| null;
    coreValueDescription: string| null;
}

export class GetInvolvedSectionModel {
    getInvolvedSectionId: number| null;
    getInvolvedSectionTitle: string| null;
    getInvolvedSectionDescription: string| null
    getInvolvedSectionImagePath: string| null;
}
