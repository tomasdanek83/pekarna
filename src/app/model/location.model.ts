export interface Location {
    id: string;

    name: string;

    locationPhotoFilename?: string;

    coordinates?: string;

    showWelcomeMessage?: boolean;

    question?: string;

    hint1?: string;

    hint2?: string;

    answer?: string | number;

    answerTolerance?: number;

    task?: string;

    taskLinkUrl?: string;

    nextLocationId?: string;
}
