import React from 'react';
import { Cpu, Database, Smartphone, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
  const solutions = [
    {
      icon: <Cpu className="w-12 h-12 text-green-600" />,
      title: "智能农业物联网",
      description: "通过传感器网络实时监测土壤、气候、作物生长状况，实现精准农业管理。",
      features: ["土壤监测", "气象监测", "作物生长监测", "智能灌溉"]
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "农业大数据平台",
      description: "整合多源农业数据，提供数据分析、预测和决策支持服务。",
      features: ["数据采集", "数据分析", "趋势预测", "决策支持"]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-600" />,
      title: "智慧农场管理系统",
      description: "移动端农场管理应用，实现远程监控和智能化操作。",
      features: ["远程监控", "任务管理", "设备控制", "数据可视化"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: "农产品溯源系统",
      description: "建立完整的农产品生产、加工、流通全链条追溯体系。",
      features: ["生产记录", "质量检测", "流通追踪", "消费者查询"]
    }
  ];

  const cases = [
    {
      title: "某大型农业合作社数字化转型",
      client: "XX农业合作社",
      scale: "10000亩",
      result: "提高产量15%，降低成本20%",
      description: "通过部署智能农业物联网系统，实现了精准农业管理，显著提升了农业生产效率。"
    },
    {
      title: "智慧果园管理系统建设",
      client: "XX果业公司",
      scale: "5000亩",
      result: "减少用水30%，提高品质等级",
      description: "建设智慧果园管理系统，实现了精准灌溉和病虫害预警，提升了果品质量。"
    },
    {
      title: "农产品质量安全追溯平台",
      client: "XX食品集团",
      scale: "覆盖200家供应商",
      result: "实现100%产品可追溯",
      description: "构建了完整的农产品质量安全追溯体系，保障了食品安全，提升了品牌价值。"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">技术服务</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            为农业企业提供全方位的数字化转型解决方案，助力传统农业向智慧农业升级
          </p>
        </div>

        {/* 解决方案 */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">数字化解决方案</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 成功案例 */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">成功案例</h2>
          <div className="space-y-6">
            {cases.map((caseItem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{caseItem.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>客户：{caseItem.client}</span>
                      <span>规模：{caseItem.scale}</span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {caseItem.result}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{caseItem.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 服务流程 */}
        <section className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">服务流程</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">需求调研</h3>
              <p className="text-sm text-gray-600">深入了解客户需求和现状</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">方案设计</h3>
              <p className="text-sm text-gray-600">制定个性化解决方案</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">项目实施</h3>
              <p className="text-sm text-gray-600">专业团队负责项目实施</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">运维支持</h3>
              <p className="text-sm text-gray-600">提供持续的技术支持</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;