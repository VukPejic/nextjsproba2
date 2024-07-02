import { Schema, model, models } from 'mongoose'

const postSchema = new Schema({
    ime: String,
    email: String,
    tip: String,
    poruka: String
}, {timestamps: true})

const PostModel = models.post || model('post', postSchema)

export default PostModel;