import React from 'react';
import { BookOpen, Clock, Users, Award, Play, Download } from 'lucide-react';

const Training: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "农业物联网基础",
      description: "学习农业物联网的基本概念和应用场景",
      duration: 120,
      level: "初级",
      price: 0,
      students: 1250,
      rating: 4.8,
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20agricultural%20IoT%20sensors%20in%20green%20farm%20field%20with%20digital%20technology%20overlay&image_size=landscape_4_3"
    },
    {
      id: 2,
      title: "智慧农业数据分析",
      description: "掌握农业大数据分析方法和工具使用",
      duration: 180,
      level: "中级",
      price: 299,
      students: 856,
      rating: 4.9,
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=agricultural%20data%20analytics%20dashboard%20with%20charts%20and%20graphs%20on%20computer%20screen&image_size=landscape_4_3"
    },
    {
      id: 3,
      title: "农业AI应用开发",
      description: "深入学习人工智能在农业领域的应用开发",
      duration: 240,
      level: "高级",
      price: 599,
      students: 432,
      rating: 4.7,
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=artificial%20intelligence%20robot%20working%20in%20modern%20smart%20greenhouse%20with%20plants&image_size=landscape_4_3"
    },
    {
      id: 4,
      title: "精准农业技术应用",
      description: "学习GPS、GIS等技术在精准农业中的应用",
      duration: 150,
      level: "中级",
      price: 399,
      students: 678,
      rating: 4.6,
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=precision%20agriculture%20GPS%20guided%20tractor%20in%20vast%20green%20field%20with%20technology%20interface&image_size=landscape_4_3"
    },
    {
      id: 5,
      title: "农业区块链应用",
      description: "了解区块链技术在农产品溯源中的应用",
      duration: 90,
      level: "初级",
      price: 199,
      students: 324,
      rating: 4.5,
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=blockchain%20network%20visualization%20with%20agricultural%20products%20traceability%20concept&image_size=landscape_4_3"
    },
    {
      id: 6,
      title: "智能温室管理系统",
      description: "掌握智能温室的设计、建设和管理技术",
      duration: 200,
      level: "中级",
      price: 459,
      students: 567,
      rating: 4.8,
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20smart%20greenhouse%20with%20automated%20systems%20and%20lush%20green%20plants&image_size=landscape_4_3"
    }
  ];

  const certifications = [
    {
      name: "智慧农业技术专家",
      level: "高级认证",
      requirements: "完成3门高级课程",
      validity: "3年",
      color: "bg-gradient-to-r from-green-500 to-green-600"
    },
    {
      name: "农业数据分析师",
      level: "中级认证",
      requirements: "完成2门中级课程",
      validity: "2年",
      color: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      name: "农业物联网工程师",
      level: "专业认证",
      requirements: "完成相关专业课程",
      validity: "2年",
      color: "bg-gradient-to-r from-orange-500 to-orange-600"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case '初级': return 'bg-green-100 text-green-700';
      case '中级': return 'bg-blue-100 text-blue-700';
      case '高级': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">人才培养</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            提供系统化的农业数字化技术培训，培养新时代智慧农业人才
          </p>
        </div>

        {/* 培训统计 */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">专业课程</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10000+</div>
            <div className="text-gray-600">学员人数</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-gray-600">满意度</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
            <div className="text-gray-600">专家讲师</div>
          </div>
        </div>

        {/* 课程列表 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">热门课程</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  {course.price === 0 && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs font-medium">
                        免费
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}分钟
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      {course.rating}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-green-600">
                      {course.price === 0 ? '免费' : `¥${course.price}`}
                    </div>
                    <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      <Play className="w-4 h-4 mr-2" />
                      开始学习
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 认证体系 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">认证体系</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className={`${cert.color} p-6 text-white text-center`}>
                  <Award className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm opacity-90">{cert.level}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">获取要求：</span>
                      <span className="text-gray-800">{cert.requirements}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">有效期：</span>
                      <span className="text-gray-800">{cert.validity}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                    了解详情
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 学习资源 */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">学习资源</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">电子教材</h3>
              <p className="text-sm text-gray-600 mb-4">专业教材和参考资料</p>
              <button className="flex items-center justify-center w-full px-3 py-2 text-sm text-green-600 border border-green-600 rounded hover:bg-green-50">
                <Download className="w-4 h-4 mr-2" />
                下载
              </button>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <Play className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">视频教程</h3>
              <p className="text-sm text-gray-600 mb-4">高清视频课程内容</p>
              <button className="flex items-center justify-center w-full px-3 py-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                <Play className="w-4 h-4 mr-2" />
                观看
              </button>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">在线答疑</h3>
              <p className="text-sm text-gray-600 mb-4">专家在线答疑服务</p>
              <button className="flex items-center justify-center w-full px-3 py-2 text-sm text-orange-600 border border-orange-600 rounded hover:bg-orange-50">
                <Users className="w-4 h-4 mr-2" />
                咨询
              </button>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">实践项目</h3>
              <p className="text-sm text-gray-600 mb-4">真实项目实战训练</p>
              <button className="flex items-center justify-center w-full px-3 py-2 text-sm text-purple-600 border border-purple-600 rounded hover:bg-purple-50">
                <Award className="w-4 h-4 mr-2" />
                参与
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Training;