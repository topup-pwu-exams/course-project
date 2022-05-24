export const getCourse = (slug) => {
    const query = `*[_type == "course" && slug.current == "${slug}" ]{
        _id,
        title,
        price,
        slug, 
        mainImage,
        description,
        _updatedAt,
        _createdAt,
        courseDuration,
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
        },
    }`
    return query
}

export const getCourses = () => {
    const query = `*[_type == "course"][0...5]{
        _id,
        title,
        price,
        slug, 
        mainImage,
        courseDuration,
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
    return query
}

export const getCoursesByCategory = (slug) => {
    const query = `*[_type == "course" && "${slug}" == category->slug.current]{
        _id,
        title,
        price,
        slug, 
        mainImage,
        courseDuration,
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
            slug,
            description
        }
    }`
    return query;
}