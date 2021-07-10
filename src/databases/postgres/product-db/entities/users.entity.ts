import {
    Column,
    CreateDateColumn,
    Entity,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';
import { UUIDEntity } from '../../shared/uuid.entity';

@Entity({ name: 'users' })
export class UsersEntity extends UUIDEntity {
    @Column({
        nullable: false,
    })
    name: string;

    @Column({
        nullable: false,
        unique: true,
    })
    username: string;

    @Column({
        nullable: false,
        unique: true,
    })
    email: string;

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt: Date;

    @UpdateDateColumn({
        nullable: true,
    })
    updatedAt: Date;

    @VersionColumn({
        type: 'number',
        default: 0,
    })
    versions: number;
}
