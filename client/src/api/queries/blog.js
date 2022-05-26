export const getBlogs = () => {
    const query = `*[_type == "blog"][0...4]{
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

export const getBlogCategories = () => {
    const query = `*[_type == "blogCategory"]{
        _id,
        blogcategory->{
            title,
            slug
        },
    }`
    return query
}