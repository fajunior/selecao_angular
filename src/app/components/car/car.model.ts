import { User } from "../user/user.module"

export interface Car {
    id?: number
    year: number
    licensePlate: string
    model: string
    color: string
    user?: User
}
