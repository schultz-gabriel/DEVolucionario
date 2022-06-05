export interface IPost {
    post: {
      title: string,
      type: string,
      date: string,
      preview: string,
      slug: string,
      tags: string[],
      html: string,
    }
  }