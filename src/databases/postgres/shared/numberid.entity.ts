import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NumberIdEntity {
    @PrimaryGeneratedColumn({ type: 'number' })
    id: number;
}
