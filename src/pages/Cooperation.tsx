import React, { useState } from 'react';
import { Search, Filter, Building2, MapPin, Calendar, ArrowRight, Plus } from 'lucide-react';

const Cooperation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('demands');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const demands = [
    {
      id: 1,
      title: "智慧农场管理系统开发",
      company: "绿野农业科技有限公司",
      location: "山东省济南市",
      budget: "50-100万",
      deadline: "2024-06-30",
      category: "系统开发",
      description: "需要开发一套完整的智慧农场管理系统，包括物联网数据采集、智能分析、远程控制等功能。",
      requirements: ["物联网技术", "数据分析", "移动应用开发", "云平台部署"],
      status: "招标中"
    },
    {
      id: 2,
      title: "农产品溯源区块链平台",
      company: "优质农产品合作社",
      location: "江苏省南京市",
      budget: "30-50万",
      deadline: "2024-08-15",
      category: "区块链应用",
      description: "建设基于区块链技术的农产品全链条溯源平台，确保产品质量可追溯。",
      requirements: ["区块链技术", "溯源系统", "移动端应用", "数据安全"],
      status: "需求确认"
    },
    {
      id: 3,
      title: "精准农业数据分析服务",
      company: "现代农业示范园",
      location: "浙江省杭州市",
      budget: "20-30万",
      deadline: "2024-05-20",
      category: "数据分析",
      description: "需要专业团队提供农业大数据分析服务，优化种植决策和资源配置。",
      requirements: ["大数据分析", "机器学习", "农业专业知识", "可视化报告"],
      status: "招标中"
    },
    {
      id: 4,
      title: "智能温室控制系统升级",
      company: "绿色生态农业园",
      location: "广东省深圳市",
      budget: "40-60万",
      deadline: "2024-07-10",
      category: "智能控制",
      description: "对现有温室进行智能化升级改造，实现自动化环境控制和远程监管。",
      requirements: ["自动化控制", "传感器集成", "远程监控", "节能优化"],
      status: "方案征集"
    }
  ];

  const partners = [
    {
      name: "中科院农业信息技术研究所",
      type: "科研院所",
      expertise: ["农业物联网", "精准农业", "智能决策"],
      projects: 15,
      rating: 4.9,
      logo: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20agricultural%20research%20institute%20logo%20with%20green%20technology%20elements&image_size=square"
    },
    {
      name: "农业数字化解决方案公司",
      type: "技术企业",
      expertise: ["系统集成", "软件开发", "数据分析"],
      projects: 28,
      rating: 4.8,
      logo: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=technology%20company%20logo%20with%20digital%20agriculture%20theme%20green%20and%20blue&image_size=square"
    },
    {
      name: "智慧农业装备制造商",
      type: "制造企业",
      expertise: ["智能装备", "传感器", "自动化系统"],
      projects: 22,
      rating: 4.7,
      logo: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=agricultural%20equipment%20manufacturer%20logo%20with%20machinery%20and%20technology&image_size=square"
    },
    {
      name: "农业大数据服务平台",
      type: "数据服务",
      expertise: ["大数据分析", "云计算", "AI算法"],
      projects: 35,
      rating: 4.9,
      logo: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analytics%20company%20logo%20with%20charts%20and%20agricultural%20elements&image_size=square"
    }
  ];

  const categories = [
    { value: 'all', label: '全部' },
    { value: '系统开发', label: '系统开发' },
    { value: '区块链应用', label: '区块链应用' },
    { value: '数据分析', label: '数据分析' },
    { value: '智能控制', label: '智能控制' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '招标中': return 'bg-green-100 text-green-700';
      case '需求确认': return 'bg-blue-100 text-blue-700';
      case '方案征集': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredDemands = demands.filter(demand => {
    const matchesSearch = demand.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         demand.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || demand.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">产业对接</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            连接农业企业与技术服务商，促进产业合作与技术转化
          </p>
        </div>

        {/* 统计数据 */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
            <div className="text-gray-600">合作需求</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">80+</div>
            <div className="text-gray-600">服务商</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
            <div className="text-gray-600">成功对接</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">满意度</div>
          </div>
        </div>

        {/* 标签页导航 */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1">
            <button
              onClick={() => setActiveTab('demands')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'demands'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              需求发布
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'partners'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              合作伙伴
            </button>
          </div>
        </div>

        {activeTab === 'demands' && (
          <div>
            {/* 搜索和筛选 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="搜索需求或公司名称..."
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
                  <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <Plus className="w-4 h-4 mr-2" />
                    发布需求
                  </button>
                </div>
              </div>
            </div>

            {/* 需求列表 */}
            <div className="space-y-6">
              {filteredDemands.map((demand) => (
                <div key={demand.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-800">{demand.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(demand.status)}`}>
                          {demand.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Building2 className="w-4 h-4 mr-1" />
                          {demand.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {demand.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          截止：{demand.deadline}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{demand.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {demand.requirements.map((req, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:ml-6 lg:text-right">
                      <div className="text-lg font-bold text-green-600 mb-4">
                        预算：{demand.budget}
                      </div>
                      <button className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        查看详情
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'partners' && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{partner.name}</h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full mb-3">
                        {partner.type}
                      </span>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {partner.expertise.map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>项目经验：{partner.projects}个</span>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★</span>
                          {partner.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      联系合作
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 合作流程 */}
        <section className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">合作流程</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">需求发布</h3>
              <p className="text-sm text-gray-600">企业发布具体需求</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">智能匹配</h3>
              <p className="text-sm text-gray-600">系统推荐合适服务商</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">方案对接</h3>
              <p className="text-sm text-gray-600">双方沟通确定方案</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">合作签约</h3>
              <p className="text-sm text-gray-600">签署正式合作协议</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">5</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">项目实施</h3>
              <p className="text-sm text-gray-600">项目执行与跟踪</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cooperation;