export const getBlogs = () => {
    const query = `*[_type == "blog"]{
        _id,
        title,
        slug, 
        mainImage,
        description,
        blogcategory->{
            title,
            slug
        },
        author -> {
          firstName,
          lastName,
          avatar,
       },
    }`
    return query
}