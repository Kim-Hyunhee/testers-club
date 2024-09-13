import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { Review } from ".";

export enum gender {
  woman = "woman",
  man = "man",
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  birthday: string;

  @Column({ type: "enum", enum: gender })
  gender: string;

  @Column({ default: 0 })
  isAdmin: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Review, (review) => review.user)
  review: Review[];
}
