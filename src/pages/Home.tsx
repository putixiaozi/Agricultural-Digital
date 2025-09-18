import React from 'react';
import { ArrowRight, Cpu, Users, BookOpen, Building2, TrendingUp, Award, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const heroSlides = [
    {
      title: "成都师范学院农业数字化转型促进中心",
      subtitle: "科技赋能，智慧兴农",
      description: "依托成都师范学院雄厚的教育资源和科研实力，致力于推动传统农业向智慧农业转型升级，为农业现代化发展提供全方位支持",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20smart%20agriculture%20with%20digital%20technology%20green%20fields%20and%20IoT%20sensors&image_size=landscape_16_9",
      cta: "了解更多"
    },
    {
      title: "专业技术服务",
      subtitle: "定制化解决方案",
      description: "提供农业物联网、大数据分析、人工智能等前沿技术服务，助力企业数字化转型",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=agricultural%20technology%20services%20with%20computers%20and%20farm%20equipment&image_size=landscape_16_9",
      cta: "查看服务"
    },
    {
      title: "人才培养体系",
      subtitle: "培育数字农业人才",
      description: "构建完善的培训认证体系，为行业培养更多专业的数字农业技术人才",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=agricultural%20education%20and%20training%20with%20students%20and%20modern%20technology&image_size=landscape_16_9",
      cta: "立即学习"
    }
  ];

  const coreServices = [
    {
      icon: <Cpu className="w-12 h-12 text-green-600" />,
      title: "技术服务",
      description: "提供智慧农业解决方案、系统集成、技术咨询等专业服务",
      features: ["物联网系统", "大数据平台", "AI应用", "区块链溯源"]
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "人才培养",
      description: "构建完善的培训认证体系，培育数字农业专业人才",
      features: ["在线课程", "实践培训", "认证考试", "专家指导"]
    },
    {
      icon: <Building2 className="w-12 h-12 text-orange-600" />,
      title: "产业对接",
      description: "搭建产业合作平台，促进技术转化和商业合作",
      features: ["需求发布", "项目匹配", "合作洽谈", "资源整合"]
    },
    {
      icon: <BookOpen className="w-12 h-12 text-purple-600" />,
      title: "资源共享",
      description: "提供丰富的技术文档、研究报告和工具软件资源",
      features: ["技术文档", "研究报告", "开发工具", "标准规范"]
    }
  ];

  const stats = [
    { number: "500+", label: "服务企业", icon: <Building2 className="w-8 h-8 text-green-600" /> },
    { number: "10000+", label: "培训学员", icon: <Users className="w-8 h-8 text-blue-600" /> },
    { number: "200+", label: "成功案例", icon: <Award className="w-8 h-8 text-orange-600" /> },
    { number: "95%", label: "客户满意度", icon: <TrendingUp className="w-8 h-8 text-purple-600" /> }
  ];

  const latestNews = [
    {
      title: "农业农村部发布数字农业发展规划",
      date: "2024-01-15",
      category: "政策解读",
      summary: "规划明确了未来七年数字农业发展的总体思路和重点任务"
    },
    {
      title: "AI技术在智慧农业中的最新突破",
      date: "2024-01-12",
      category: "技术前沿",
      summary: "深度学习算法在作物病虫害识别领域取得重大进展"
    },
    {
      title: "2024年数字农业产业发展报告发布",
      date: "2024-01-10",
      category: "行业动态",
      summary: "报告显示数字农业市场规模持续扩大，发展前景广阔"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroSlides[0].image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-4">
            <p className="text-lg md:text-xl font-medium opacity-90">成都师范学院</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            农业数字化转型促进中心
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium">
            {heroSlides[0].subtitle}
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            {heroSlides[0].description}
          </p>
          <div className="space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center mx-auto md:mx-0 md:inline-flex">
              {heroSlides[0].cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">核心服务</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              依托成都师范学院的学科优势和师资力量，为农业企业提供全方位的数字化转型服务，助力传统农业向智慧农业升级
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">最新资讯</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              关注农业数字化转型最新动态，掌握行业发展趋势
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <article key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                      {news.category}
                    </span>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 hover:text-green-600 cursor-pointer">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{news.summary}</p>
                  <button className="flex items-center text-green-600 hover:text-green-700 font-medium">
                    阅读更多
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              查看更多资讯
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">开启您的数字化转型之旅</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            联系我们的专家团队，获取个性化的农业数字化解决方案
          </p>
          <div className="space-x-4">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition duration-300">
              免费咨询
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-lg transition duration-300">
              了解服务
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;