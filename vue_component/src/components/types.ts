export type TSelectorConfig = {
    selectors: string
    idAttr: string
    elementTypeAttr: string
}

type TFlexInfo = {
    isFlex: boolean
    direction: string | null
}

export type TSelectedChangeEventArgs = {
    id: number | null
    parentBoxId: number | null
    flexInfo: TFlexInfo
    parentFlexInfo: TFlexInfo
}