export const getCategories = () => {
    const query = `*[_type == "category"]{
        _id,
        title,
        slug
    }`
    return query;
}

export const getCategory = (slug) => {
    const query = `*[_type == "course" && "${slug}" == category->slug.current]{
        _id,
        title,
        price,
        slug, 
        mainImage,
        author -> {
          firstName,
          lastName,
          avatar,
       },
       tags[]->{
        _id,
        name
        },
        category->{
            title,
            slug
        }
    }`
    return query;
}