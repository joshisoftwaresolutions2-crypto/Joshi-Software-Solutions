export const articleFields = `
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  category,
  tags,
  author,
  publishedAt,
  updatedAt,
  seoTitle,
  seoDescription,
  socialImage,
  featured,
  published,
  body,
  _createdAt,
  _updatedAt
`;

export const articleQuery = `
  *[_type == "article" && published == true && slug.current == $slug][0] {
    ${articleFields}
  }
`;

export const articlesQuery = `
  *[_type == "article" && published == true] | order(publishedAt desc) {
    ${articleFields}
  }
`;

export const featuredArticleQuery = `
  *[_type == "article" && published == true && featured == true] | order(publishedAt desc)[0] {
    ${articleFields}
  }
`;

export const articlesByCategoryQuery = `
  *[_type == "article" && published == true && category == $category] | order(publishedAt desc) {
    ${articleFields}
  }
`;

export const articleSlugsQuery = `
  *[_type == "article" && published == true && defined(slug.current) && defined(publishedAt)] {
    "slug": slug.current
  }
`;

export const articleCategoriesQuery = `
  array::unique(*[_type == "article" && published == true && defined(category)].category)
`;

export const relatedArticlesQuery = `
  *[_type == "article" && published == true && _id != $id && category == $category] | order(publishedAt desc)[0...$limit] {
    ${articleFields}
  }
`;
