import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

// List of valid categories and their valid slugs
const validData = {
  'tote-bags': ['tote-serena', 'tote-amelie', 'tote-siena', 'tote-enea', 'tote-amira'],
  bolsos: ['bolso-mila'],
  lazos: ['lazo-talia'],
  'fundas-libros': ['funda-celia'],
};

export const load: PageServerLoad = async ({ params, url }) => {
  const { category, slug } = params;

  // Check if the category is valid
  if (!Object.keys(validData).includes(category)) {
    // Redirect to the home page if the category is invalid
    throw redirect(302, '/');
  }

  // Check if the slug is valid for the given category
  if (!slug || !validData[category].includes(slug)) {
    // Redirect to the category page if the slug is invalid or missing
    throw redirect(302, `/${category}`);
  }

  // If everything is valid, continue loading the page
  return {
    category,
    slug,
  };
};
