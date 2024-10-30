import { Post } from "@prisma/client";
import { UserEntity } from "src/users/entities/user.entity";

export class PostEntity implements Post {
    id: number;

    title: string;

    content: string;

    published: boolean;

    createdAt: Date;

    updatedAt: Date;

    authorId: number|null;

    author?: UserEntity;

    constructor({ author, ...data }: Partial<PostEntity>) {
        Object.assign(this, data);

        if (author) {
            this.author = new UserEntity(author)
        }
    }
}
