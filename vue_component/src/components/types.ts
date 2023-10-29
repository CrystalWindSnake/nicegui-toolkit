export type TSelectorConfig = {
    selectors: string
    idAttr: string
    elementTypeAttr: string
}


export type TSelectedChangeEventArgs = {
    id: number | null;
    parentBoxId: number | null;
    flexInfo: {
        isFlex: boolean;
        direction: string | null;
    };
}