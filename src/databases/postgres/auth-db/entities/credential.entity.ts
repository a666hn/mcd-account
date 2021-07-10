import {
    BeforeUpdate,
    Column,
    CreateDateColumn,
    Entity,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';
import { UUIDEntity } from '../../shared/uuid.entity';
import * as bcrypt from 'bcrypt';

@Entity('basicauth_credentials')
export class BasicAuthCredentialEntity extends UUIDEntity {
    @Column({
        name: 'username',
        nullable: false,
    })
    username: string;

    @Column({
        name: 'email',
        nullable: false,
    })
    email: string;

    @Column({
        name: 'login_type',
        nullable: false,
    })
    loginType: string;

    @Column({
        nullable: false,
    })
    password: string;

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

    @BeforeUpdate()
    async udpatePasswordAfterInsert() {
        const SALT = await bcrypt.genSalt();
        const hashPassowrd = await bcrypt.hash(this.password, SALT);

        this.password = hashPassowrd;
    }
}
