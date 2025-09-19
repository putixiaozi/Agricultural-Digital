import React, { useState } from 'react';
import { Download, FileText, Video, Archive, Search, Filter, Eye, Calendar, User } from 'lucide-react';

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'all', label: '全部资源' },
    { value: 'whitepaper', label: '白皮书' },
    { value: 'standard', label: '技术标准' },
    { value: 'report', label: '研究报告' },
    { value: 'toolkit', label: '工具软件' },
    { value: 'video', label: '视频教程' }
  ];

  const resources = [
    {
      id: 1,
      title: "农业数字化转型白皮书2024",
      description: "全面解析农业数字化转型的现状、趋势和实施路径，为农业企业提供转型指导。",
      category: "whitepaper",
      fileType: "PDF",
      fileSize: "15.2 MB",
      downloadCount: 2580,
      publishDate: "2024-01-15",
      author: "农业数字化研究院",
      isPublic: true,
      isPremium: false,
      thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20whitepaper%20cover%20about%20digital%20agriculture%20transformation%20with%20charts&image_size=portrait_4_3"
    },
    {
      id: 2,
      title: "智慧农业技术标准规范V3.0",
      description: "最新版智慧农业技术标准，涵盖物联网、大数据、人工智能等技术规范。",
      category: "standard",
      fileType: "PDF",
      fileSize: "8.7 MB",
      downloadCount: 1890,
      publishDate: "2024-01-10",
      author: "标准化委员会",
      isPublic: true,
      isPremium: false,
      thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=technical%20standard%20document%20cover%20with%20official%20seal%20and%20version%20number&image_size=portrait_4_3"
    },
    {
      id: 3,
      title: "2024年中国智慧农业发展报告",
      description: "深度分析中国智慧农业发展现状、市场规模、技术趋势和投资机会。",
      category: "report",
      fileType: "PDF",
      fileSize: "22.5 MB",
      downloadCount: 1650,
      publishDate: "2024-01-08",
      author: "产业研究中心",
      isPublic: false,
      isPremium: true,
      thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=research%20report%20cover%20with%20charts%20and%20graphs%20about%20smart%20agriculture&image_size=portrait_4_3"
    },
    {
      id: 4,
      title: "农业物联网开发工具包",
      description: "包含传感器驱动、数据采集SDK、云平台接口等完整的开发工具和示例代码。",
      category: "toolkit",
      fileType: "ZIP",
      fileSize: "156.8 MB",
      downloadCount: 980,
      publishDate: "2024-01-05",
      author: "技术开发部",
      isPublic: false,
      isPremium: true,
      thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=software%20development%20toolkit%20with%20code%20and%20IoT%20sensors&image_size=portrait_4_3"
    },
    {
      id: 5,
      title: "精准农业实施指南",
      description: "详细介绍精准农业的概念、技术体系、实施步骤和案例分析。",
      category: "whitepaper",
      fileType: "PDF",
      fileSize: "12.3 MB",
      downloadCount: 1420,
      publishDate: "2024-01-03",
      author: "精准农业专家组",
      isPublic: true,
      isPremium: false,
      thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=precision%20agriculture%20guide%20book%20cover%20with%20GPS%20and%20field%20imagery&image_size=portrait_4_3"
    },
    {
      id: 6,
      title: "智慧农业系统架构设计视频教程",
      description: "系统讲解智慧农业平台的架构设计、技术选型和实现方案。",
      category: "video",
      fileType: "MP4",
      fileSize: "1.2 GB",
      downloadCount: 756,
      publishDate: "2024-01-01",
      author: "架构师团队",
      isPublic: false,
      isPremium: true,
      thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=video%20tutorial%20thumbnail%20about%20smart%20agriculture%20system%20architecture&image_size=portrait_4_3"
    },
    {
      id: 7,
      title: "农业大数据分析平台用户手册",
      description: "详细说明农业大数据分析平台的功能特性、操作流程和最佳实践。",
      category: "standard",
      fileType: "PDF",
      fileSize: "18.9 MB",
      downloadCount: 1180,
      publishDate: "2023-12-28",
      author: "产品团队",
      isPublic: true,
      isPremium: false,
      thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=user%20manual%20cover%20for%20agricultural%20big%20data%20platform&image_size=portrait_4_3"
    },
    {
      id: 8,
      title: "区块链农产品溯源解决方案",
      description: "基于区块链技术的农产品溯源系统设计方案和实施指导。",
      category: "report",
      fileType: "PDF",
      fileSize: "9.8 MB",
      downloadCount: 890,
      publishDate: "2023-12-25",
      author: "区块链研究组",
      isPublic: true,
      isPremium: false,
      thumbnail: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=blockchain%20solution%20document%20for%20agricultural%20product%20traceability&image_size=portrait_4_3"
    }
  ];

  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-6 h-6 text-red-500" />;
      case 'mp4':
        return <Video className="w-6 h-6 text-blue-500" />;
      case 'zip':
        return <Archive className="w-6 h-6 text-orange-500" />;
      default:
        return <FileText className="w-6 h-6 text-gray-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'whitepaper': return 'bg-blue-100 text-blue-700';
      case 'standard': return 'bg-green-100 text-green-700';
      case 'report': return 'bg-orange-100 text-orange-700';
      case 'toolkit': return 'bg-purple-100 text-purple-700';
      case 'video': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularResources = resources
    .sort((a, b) => b.downloadCount - a.downloadCount)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">资源下载</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            提供丰富的农业数字化技术资源，助力您的学习和实践
          </p>
        </div>

        {/* 统计数据 */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">技术文档</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
            <div className="text-gray-600">研究报告</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600">工具软件</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">100K+</div>
            <div className="text-gray-600">总下载量</div>
          </div>
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
                    placeholder="搜索资源标题或描述..."
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

            {/* 资源列表 */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredResources.map((resource) => {
                const categoryInfo = categories.find(cat => cat.value === resource.category);
                return (
                  <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={resource.thumbnail} 
                        alt={resource.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(resource.category)}`}>
                          {categoryInfo?.label}
                        </span>
                      </div>
                      {resource.isPremium && (
                        <div className="absolute top-4 right-4">
                          <span className="px-2 py-1 bg-yellow-500 text-white rounded-full text-xs font-medium">
                            会员专享
                          </span>
                        </div>
                      )}
                      {!resource.isPublic && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="text-2xl mb-2">🔒</div>
                            <div className="text-sm">需要登录</div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{resource.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resource.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            {getFileIcon(resource.fileType)}
                            <span className="ml-1">{resource.fileType}</span>
                          </div>
                          <div>{resource.fileSize}</div>
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {resource.downloadCount}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {resource.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {resource.publishDate}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                          <Download className="w-4 h-4 mr-2" />
                          下载
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
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
            {/* 热门下载 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Download className="w-5 h-5 mr-2 text-green-500" />
                热门下载
              </h3>
              <div className="space-y-4">
                {popularResources.map((resource, index) => (
                  <div key={resource.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2 hover:text-green-600 cursor-pointer">
                        {resource.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          {getFileIcon(resource.fileType)}
                          <span className="ml-1">{resource.fileType}</span>
                        </div>
                        <span>{resource.downloadCount}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 资源分类 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">资源分类</h3>
              <div className="space-y-2">
                {categories.filter(cat => cat.value !== 'all').map(category => {
                  const count = resources.filter(item => item.category === category.value).length;
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

            {/* 上传资源 */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">分享资源</h3>
              <p className="text-sm mb-4 opacity-90">
                有优质的农业数字化资源？与社区分享，帮助更多人学习成长。
              </p>
              <button className="w-full px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                上传资源
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;