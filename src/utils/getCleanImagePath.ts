const PROJECT_ID = import.meta.env.VITE_SUPABASE_URL.split('//')[1].split('.')[0];
const BUCKET_NAME = 'images';

export const getCleanImagePath = (path: string) => {
  const cleanPath = path.replace('img/', '');
  const BASE_URL = `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET_NAME}/`;

  return `${BASE_URL}${cleanPath}`;
};
