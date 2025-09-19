import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 mb-4">成都师范学院</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">农业数字化转型促进中心</h2>
          <p className="text-lg text-gray-600">依托高等教育资源，推动农业现代化发展</p>
        </div>
        
        {/* 中心概述 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">关于我们</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            成都师范学院农业数字化转型促进中心是依托成都师范学院雄厚的教育资源和科研实力建立的专业机构，
            致力于推动传统农业向智慧农业转型升级。作为四川省重要的师范类高等院校，成都师范学院在人才培养、
            科学研究和社会服务方面具有深厚底蕴。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            中心充分发挥学院在教育学、计算机科学、生物科学等学科的优势，整合校内外优质资源，
            通过数字化技术的应用和推广，为农业企业、科研院所、政府部门提供全方位的服务支持。
          </p>
          <p className="text-gray-600 leading-relaxed">
            中心秉承成都师范学院"爱、真、笃、为"的校训精神，坚持"科技兴农、数字赋能"的理念，
            致力于打造农业数字化转型的权威信息平台和服务枢纽，推动农业现代化发展，助力乡村振兴战略实施。
          </p>
        </section>

        {/* 组织架构 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">组织架构</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold text-lg">院</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">学院指导委员会</h3>
              <p className="text-sm text-gray-600">由成都师范学院领导组成，负责中心战略规划和重大决策</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-lg">技</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">技术研发部</h3>
              <p className="text-sm text-gray-600">负责技术创新和解决方案开发</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold text-lg">培</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">培训教育部</h3>
              <p className="text-sm text-gray-600">负责人才培养和教育培训</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold text-lg">服</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">服务推广部</h3>
              <p className="text-sm text-gray-600">负责技术推广和客户服务</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-600 font-bold text-lg">合</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">合作发展部</h3>
              <p className="text-sm text-gray-600">负责产业对接和合作伙伴关系</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-gray-600 font-bold text-lg">行</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">行政管理部</h3>
              <p className="text-sm text-gray-600">负责日常运营和行政管理</p>
            </div>
          </div>
        </section>

        {/* 专家团队 */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">师资团队</h2>
          <div className="mb-6">
            <p className="text-gray-600 leading-relaxed">
              中心依托成都师范学院强大的师资力量，汇聚了一批在农业信息化、计算机科学、教育技术等领域的专家学者。
              团队成员均具有丰富的教学科研经验和实践能力，为农业数字化转型提供强有力的智力支撑。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">张</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">张教授</h3>
              <p className="text-sm text-green-600 mb-2">中心主任 / 成都师范学院教授</p>
              <p className="text-xs text-gray-600">农业信息化专家，从事智慧农业研究20余年，主持多项省部级科研项目</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">李</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">李博士</h3>
              <p className="text-sm text-blue-600 mb-2">技术总监 / 成都师范学院副教授</p>
              <p className="text-xs text-gray-600">计算机科学博士，物联网技术专家，主导多项国家级科研项目</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">王</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">王博士</h3>
              <p className="text-sm text-orange-600 mb-2">首席架构师 / 成都师范学院讲师</p>
              <p className="text-xs text-gray-600">大数据分析专家，教育技术学博士，擅长农业数据挖掘与应用</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;