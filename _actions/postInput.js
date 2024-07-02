'use server'

import PostModel from "@/models/postModel";

export async function postInsert(ime, email, tip, poruka) {
    const post = new PostModel({ ime, email, tip, poruka });
  
    try {
      const savedPost = await post.save();
      console.log('Post saved successfully:', savedPost);
    } catch (err) {
      console.error('Error saving post:', err);
    }
}
  