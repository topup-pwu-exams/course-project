export const getBlogs = () => {
    const query = `*[_type == "blog"]{
        _id,
        title,
        slug, 
        mainImage,
        description,
        author -> {
          firstName,
          lastName,
          avatar,
       },
    }`
    return query
}