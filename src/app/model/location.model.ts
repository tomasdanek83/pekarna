export interface Location {
    id: string;

    index: number;

    name: string;

    locationPhotoFilename?: string;

    coordinates?: string;

    showWelcomeMessage?: boolean;

    question?: string;

    hint1?: string;

    hint2?: string;

    answer?: string[] | number;

    answerTolerance?: number;

    task?: string;

    taskLinkTitle?: string;

    taskLinkUrl?: string;

    taskOutcome?: string;

    nextLocationId?: string;
}
