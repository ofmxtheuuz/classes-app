import "reflect-metadata"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { WeekDayEnum } from "../../WeekDayEnum"

@Entity()
export class Week  {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
      type: "enum",
      enum: WeekDayEnum
    })
    day: WeekDayEnum

    @Column('json')
    classes: string[]
}