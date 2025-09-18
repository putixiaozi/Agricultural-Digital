import React, { useState } from 'react';
import { Calendar, User, Tag, Search, Filter, ArrowRight, TrendingUp } from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'all', label: '全部', color: 'bg-gray-100 text-gray-700' },
    { value: 'policy', label: '政策解读', color: 'bg-blue-100 text-blue-700' },
    { value: 'technology', label: '技术前沿', color: 'bg-green-100 text-green-700' },
    { value: 'industry', label: '行业动态', color: 'bg-orange-100 text-orange-700' },
    { value: 'activity', label: '活动公告', color: 'bg-purple-100 text-purple-700' }
  ];

  const news = [
    {
      id: 1,
      title: "农业农村部发布《数字农业农村发展规划（2024-2030年）》",
      summary: "规划明确了未来七年数字农业农村发展的总体思路、发展目标、重点任务和保障措施，为推进农业农村现代化提供了重要指导。",
      content: "近日，农业农村部正式发布《数字农业农村发展规划（2024-2030年）》，这是指导未来七年数字农业农村发展的纲领性文件。规划提出，到2030年，数字农业农村发展要取得重要进展，农业数字化转型取得明显成效。",
      category: "policy",
      author: "政策研究部",
      publishDate: "2024-01-15",
      readCount: 2580,
      isHot: true,
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=government%20policy%20document%20about%20digital%20agriculture%20with%20official%20seal%20and%20charts&image_size=landscape_4_3"
    },
    {
      id: 2,
      title: "人工智能在智慧农业中的最新应用突破",
      summary: "深度学习算法在作物病虫害识别、产量预测等领域取得重大突破，准确率达到95%以上，为精准农业提供强有力的技术支撑。",
      content: "最新研究表明，基于深度学习的人工智能技术在农业领域的应用正在快速发展。通过计算机视觉和机器学习算法，AI系统能够准确识别作物病虫害，预测产量变化。",
      category: "technology",
      author: "技术专家",
      publishDate: "2024-01-12",
      readCount: 1890,
      isHot: true,
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=artificial%20intelligence%20analyzing%20crop%20diseases%20with%20computer%20vision%20technology&image_size=landscape_4_3"
    },
    {
      id: 3,
      title: "2024年数字农业产业发展报告发布",
      summary: "报告显示，我国数字农业市场规模持续扩大，预计2024年将达到8000亿元，同比增长15.2%，产业发展前景广阔。",
      content: "中国数字农业产业联盟发布的最新报告显示，数字农业正成为推动农业现代化的重要引擎。物联网、大数据、人工智能等技术在农业生产中的应用日益广泛。",
      category: "industry",
      author: "产业分析师",
      publishDate: "2024-01-10",
      readCount: 1650,
      isHot: false,
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=digital%20agriculture%20industry%20report%20with%20growth%20charts%20and%20statistics&image_size=landscape_4_3"
    },
    {
      id: 4,
      title: "第三届智慧农业创新大会即将召开",
      summary: "大会将于3月15-17日在北京举行，汇聚国内外专家学者，共同探讨智慧农业发展趋势和创新应用，欢迎业界人士参与。",
      content: "由中国农业科学院主办的第三届智慧农业创新大会将于2024年3月15-17日在北京国际会议中心举行。本届大会以'数字赋能·智慧兴农'为主题。",
      category: "activity",
      author: "活动组委会",
      publishDate: "2024-01-08",
      readCount: 980,
      isHot: false,
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20agriculture%20conference%20with%20speakers%20and%20technology%20displays&image_size=landscape_4_3"
    },
    {
      id: 5,
      title: "区块链技术在农产品溯源中的创新实践",
      summary: "多家农业企业开始采用区块链技术建立农产品溯源体系，实现从田间到餐桌的全程可追溯，提升消费者信任度。",
      content: "区块链技术以其不可篡改、去中心化的特点，为农产品质量安全追溯提供了新的解决方案。通过建立分布式账本，记录农产品生产、加工、流通的全过程信息。",
      category: "technology",
      author: "区块链专家",
      publishDate: "2024-01-05",
      readCount: 1420,
      isHot: false,
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=blockchain%20technology%20for%20agricultural%20product%20traceability%20with%20QR%20codes&image_size=landscape_4_3"
    },
    {
      id: 6,
      title: "智能农机装备市场迎来快速发展期",
      summary: "随着农业现代化进程加快，智能农机装备需求激增，预计未来五年市场规模将翻一番，成为农业投资新热点。",
      content: "智能农机装备作为现代农业的重要组成部分，正迎来前所未有的发展机遇。GPS导航、自动驾驶、精准作业等技术的应用，大大提高了农业生产效率。",
      category: "industry",
      author: "市场研究员",
      publishDate: "2024-01-03",
      readCount: 1180,
      isHot: false,
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20agricultural%20machinery%20with%20GPS%20and%20automation%20technology&image_size=landscape_4_3"
    }
  ];

  const getCategoryInfo = (category: string) => {
    const categoryInfo = categories.find(cat => cat.value === category);
    return categoryInfo || { label: category, color: 'bg-gray-100 text-gray-700' };
  };

  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const hotNews = news.filter(item => item.isHot).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">新闻资讯</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            关注农业数字化转型最新动态，掌握行业发展趋势
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* 主要内容区域 */}
          <div className="lg:col-span-3">
            {/* 搜索和筛选 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="搜索新闻标题或内容..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 新闻列表 */}
            <div className="space-y-6">
              {filteredNews.map((item) => {
                const categoryInfo = getCategoryInfo(item.category);
                return (
                  <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryInfo.color}`}>
                            {categoryInfo.label}
                          </span>
                          {item.isHot && (
                            <div className="flex items-center text-red-500 text-sm">
                              <TrendingUp className="w-4 h-4 mr-1" />
                              热门
                            </div>
                          )}
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3 hover:text-green-600 cursor-pointer">
                          {item.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-2">{item.summary}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {item.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {item.publishDate}
                            </div>
                            <div>
                              阅读 {item.readCount}
                            </div>
                          </div>
                          <button className="flex items-center text-green-600 hover:text-green-700">
                            阅读全文
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* 分页 */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">上一页</button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">下一页</button>
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="lg:col-span-1">
            {/* 热门新闻 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-red-500" />
                热门新闻
              </h3>
              <div className="space-y-4">
                {hotNews.map((item, index) => {
                  const categoryInfo = getCategoryInfo(item.category);
                  return (
                    <div key={item.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2 hover:text-green-600 cursor-pointer">
                          {item.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className={`px-2 py-1 rounded-full ${categoryInfo.color}`}>
                            {categoryInfo.label}
                          </span>
                          <span>{item.readCount}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 分类标签 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-blue-500" />
                新闻分类
              </h3>
              <div className="space-y-2">
                {categories.filter(cat => cat.value !== 'all').map(category => {
                  const count = news.filter(item => item.category === category.value).length;
                  return (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                        selectedCategory === category.value
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className="font-medium">{category.label}</span>
                      <span className="text-sm text-gray-500">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 订阅通知 */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">订阅资讯</h3>
              <p className="text-sm mb-4 opacity-90">
                订阅我们的新闻通讯，第一时间获取最新资讯
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="请输入邮箱地址"
                  className="w-full px-3 py-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full px-4 py-2 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  立即订阅
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;