import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Award } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    contactType: 'consultation'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交
    console.log('Form submitted:', formData);
    alert('感谢您的留言，我们会尽快与您联系！');
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: "地址",
      content: "四川省成都市温江区海科路东段99号",
      detail: "成都师范学院 邮编：611130"
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "电话",
      content: "028-66772000",
      detail: "工作日 9:00-17:30"
    },
    {
      icon: <Mail className="w-6 h-6 text-orange-600" />,
      title: "邮箱",
      content: "agri-center@cdnu.edu.cn",
      detail: "24小时内回复"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "工作时间",
      content: "周一至周五 9:00-17:30",
      detail: "周六 9:00-12:00"
    }
  ];

  const departments = [
    {
      name: "技术咨询部",
      phone: "028-66772000 转 1001",
      email: "tech@cdnu.edu.cn",
      description: "技术方案咨询、系统集成服务",
      color: "bg-green-100 text-green-700"
    },
    {
      name: "培训教育部",
      phone: "028-66772000 转 1002",
      email: "training@cdnu.edu.cn",
      description: "课程咨询、培训报名、认证服务",
      color: "bg-blue-100 text-blue-700"
    },
    {
      name: "合作发展部",
      phone: "028-66772000 转 1003",
      email: "partner@cdnu.edu.cn",
      description: "商务合作、项目对接、战略联盟",
      color: "bg-orange-100 text-orange-700"
    },
    {
      name: "学院办公室",
      phone: "028-66772000 转 1004",
      email: "office@cdnu.edu.cn",
      description: "综合事务、行政管理、信息咨询",
      color: "bg-purple-100 text-purple-700"
    }
  ];

  const faqItems = [
    {
      question: "如何申请成为合作伙伴？",
      answer: "您可以通过在线表单提交合作申请，或直接联系我们的合作发展部。我们会在3个工作日内与您联系，详细了解合作意向并安排后续洽谈。"
    },
    {
      question: "培训课程如何报名？",
      answer: "您可以在人才培养页面选择感兴趣的课程，点击报名按钮填写相关信息。我们提供线上和线下两种培训方式，可根据您的需求选择。"
    },
    {
      question: "技术咨询服务收费标准是什么？",
      answer: "我们提供免费的初步技术咨询服务。对于深度技术方案设计和定制化服务，会根据项目复杂度和工作量制定合理的收费标准。"
    },
    {
      question: "如何获取最新的行业资讯？",
      answer: "您可以关注我们的新闻资讯页面，或订阅我们的邮件通讯。我们会定期发布行业动态、政策解读和技术前沿信息。"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">联系我们</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            成都师范学院农业数字化转型促进中心随时为您提供专业的服务和支持
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 联系表单 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">在线咨询</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      电话
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="请输入您的电话号码"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      公司/组织
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="请输入您的公司或组织名称"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      咨询类型 *
                    </label>
                    <select
                      name="contactType"
                      value={formData.contactType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="consultation">技术咨询</option>
                      <option value="training">培训报名</option>
                      <option value="cooperation">商务合作</option>
                      <option value="support">技术支持</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      主题 *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="请简要描述咨询主题"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    详细描述 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="请详细描述您的需求或问题..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  <Send className="w-5 h-5 mr-2" />
                  提交咨询
                </button>
              </form>
            </div>

            {/* 地图区域 */}
            <div className="bg-white rounded-lg shadow-md p-8 mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">位置导航</h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>地图加载中...</p>
                  <p className="text-sm mt-2">四川省成都市温江区海科路东段99号 成都师范学院</p>
                </div>
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="lg:col-span-1">
            {/* 联系信息 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">联系信息</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                      <p className="text-sm text-gray-500">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 部门联系方式 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">部门联系</h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-800">{dept.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${dept.color}`}>
                        专业服务
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div className="flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {dept.phone}
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        {dept.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 服务承诺 */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-md p-6 text-white mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                服务承诺
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>24小时内响应咨询</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>专业团队一对一服务</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>100%客户满意保障</span>
                </div>
              </div>
            </div>

            {/* 在线客服 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">在线客服</h3>
              <p className="text-sm text-gray-600 mb-4">
                工作时间内可通过在线客服获得即时帮助
              </p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                开始对话
              </button>
            </div>
          </div>
        </div>

        {/* 常见问题 */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">常见问题</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;