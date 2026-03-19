import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// تحديد المسارات الأساسية بشكل مطلق لضمان الوصول إليها في Windows
const postsDirectory = path.join(process.cwd(), 'content', 'blog');
const dataDirectory = path.join(process.cwd(), 'data');

// دالة لجلب قائمة الـ 100 مدينة من ملف الـ JSON
export function getAllCities() {
  const citiesPath = path.join(dataDirectory, 'cities.json');
  
  if (!fs.existsSync(citiesPath)) {
    console.error("CRITICAL ERROR: cities.json NOT FOUND AT: ", citiesPath);
    return [];
  }

  const fileContents = fs.readFileSync(citiesPath, 'utf8');
  try {
    const citiesData = JSON.parse(fileContents);
    return citiesData.map(city => city.toLowerCase().replace(/\s+/g, '-'));
  } catch (e) {
    console.error("JSON Parse Error: Check your cities.json format");
    return [];
  }
}

// دالة لجلب بيانات مدينة معينة بناءً على الـ Slug
export function getCityData(slug) {
  const citiesPath = path.join(dataDirectory, 'cities.json');
  if (!fs.existsSync(citiesPath)) return { cityName: "Florida" };

  const fileContents = fs.readFileSync(citiesPath, 'utf8');
  const citiesData = JSON.parse(fileContents);
  
  const cityName = citiesData.find(c => c.toLowerCase().replace(/\s+/g, '-') === slug);
  
  return {
    slug,
    cityName: cityName || "Florida",
    title: `Best Cheap Car Insurance in ${cityName || 'Florida'} (2026 Guide)`,
    description: `Compare the cheapest car insurance rates in ${cityName || 'Florida'}, FL. Save up to $500 today with instant quotes.`
  };
}

// ✅ إضافة الدالة المطلوبة لإصلاح تحذير الـ Build
export function getCityBySlug(slug) {
  return getCityData(slug);
}

// دالة جلب كل المقالات (Blog)
export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    console.warn("Blog directory not found at:", postsDirectory);
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames
    .filter(fn => fn.endsWith('.mdx')) // التأكد من قراءة ملفات MDX فقط
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return { slug, ...data };
    })
    .sort((a, b) => (new Date(b.date) - new Date(a.date)));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug, ...data, content };
}

export function getRelatedPosts(currentSlug) {
  return getAllPosts().filter(post => post.slug !== currentSlug).slice(0, 3);
}