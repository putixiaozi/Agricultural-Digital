import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: '中心介绍', href: '/about' },
    { name: '技术服务', href: '/services' },
    { name: '人才培养', href: '/training' },
    { name: '产业对接', href: '/cooperation' }
  ];

  const collegeLinks = [
    { name: '成都师范学院官网', href: 'https://www.cdnu.edu.cn' },
    { name: '学院新闻', href: 'https://www.cdnu.edu.cn/news' },
    { name: '学术研究', href: 'https://www.cdnu.edu.cn/research' },
    { name: '招生信息', href: 'https://www.cdnu.edu.cn/admission' }
  ];

  const resources = [
    { name: '新闻资讯', href: '/news' },
    { name: '资源下载', href: '/resources' },
    { name: '联系我们', href: '/contact' },
    { name: '在线咨询', href: '/contact#consultation' }
  ];

  const services = [
    { name: '智慧农业解决方案', href: '/services#solutions' },
    { name: '农业大数据平台', href: '/services#bigdata' },
    { name: '物联网系统集成', href: '/services#iot' },
    { name: '技术咨询服务', href: '/services#consulting' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">师</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">成都师范学院</h3>
                <p className="text-sm text-gray-400">农业数字化转型促进中心</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              依托成都师范学院雄厚的教育资源和科研实力，致力于推动传统农业向智慧农业转型升级，为农业现代化发展提供全方位的技术支持和服务。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">快速链接</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 学院链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">成都师范学院</h3>
            <ul className="space-y-3">
              {collegeLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">联系我们</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">四川省成都市温江区海科路东段99号</p>
                  <p className="text-gray-300">成都师范学院</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-300">028-66772000</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-300">agri-center@cdnu.edu.cn</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">周一至周五 9:00-17:30</p>
                  <p className="text-gray-300">周六 9:00-12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 成都师范学院农业数字化转型促进中心. 保留所有权利.</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-green-400 transition-colors duration-200">
                隐私政策
              </Link>
              <Link to="/terms" className="hover:text-green-400 transition-colors duration-200">
                服务条款
              </Link>
              <Link to="/sitemap" className="hover:text-green-400 transition-colors duration-200">
                网站地图
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 备案信息 */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="text-center text-xs text-gray-500">
            <p>蜀ICP备09042717号 | 川公网安备51011502000017号</p>
            <p className="mt-1">成都师范学院农业数字化转型促进中心 | 本网站支持IPv6访问</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;