/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // 1. تحويل Ezoic Ads.txt (تحويل دائم 301 كما تطلب Ezoic)
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/19390/autoinsurancecompaniesflorida.com',
        permanent: true, 
      },
      // 2. تحويلات روابط الأفيليت (التي أنشأناها سابقاً)
      {
        source: '/go/liberty-mutual',
        destination: 'https://afflat3c2.com/trk/lnk/8736DC01-8F47-40DD-8D3C-C2F814075491/?o=31202&c=918277&a=790327&k=B7A7682872F318AEFCB7CF473FC792A5&l=36289',
        permanent: false,
      },
      {
        source: '/go/progressive',
        destination: 'https://afflat3c2.com/trk/lnk/8736DC01-8F47-40DD-8D3C-C2F814075491/?o=29198&c=918277&a=790327&k=2475FC62D5DAB90ECA12D1AFBA3D443C&l=33019',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;