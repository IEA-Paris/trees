export type form  = {
    [key: string]: {
        type: string
        label?: string
        default?: any
        description?: string
        hint?: string
        rules?: {
            required?: boolean
            min?: number
            max?: number
            url?: boolean
        }
        visibility?: {
            default?: boolean
            switchIf?: any[]
            disjonctive?: boolean
        }
        meta?: string
        showOnly?: {
            if?: any[]
            disjonctive?: boolean
        }
    }
}