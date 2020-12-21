export interface Location {
    id: string;

    name: string;

    locationPhotoUrl?: string;

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
