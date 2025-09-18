import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: '首页', href: '/', current: location.pathname === '/' },
    { 
      name: '中心介绍', 
      href: '/about', 
      current: location.pathname === '/about',
      dropdown: [
        { name: '关于我们', href: '/about' },
        { name: '组织架构', href: '/about#organization' },
        { name: '专家团队', href: '/about#team' }
      ]
    },
    { 
      name: '技术服务', 
      href: '/services', 
      current: location.pathname === '/services',
      dropdown: [
        { name: '解决方案', href: '/services#solutions' },
        { name: '成功案例', href: '/services#cases' },
        { name: '服务流程', href: '/services#process' }
      ]
    },
    { 
      name: '人才培养', 
      href: '/training', 
      current: location.pathname === '/training',
      dropdown: [
        { name: '培训课程', href: '/training#courses' },
        { name: '认证体系', href: '/training#certification' },
        { name: '学习资源', href: '/training#resources' }
      ]
    },
    { 
      name: '产业对接', 
      href: '/cooperation', 
      current: location.pathname === '/cooperation',
      dropdown: [
        { name: '需求发布', href: '/cooperation#demands' },
        { name: '合作伙伴', href: '/cooperation#partners' },
        { name: '合作流程', href: '/cooperation#process' }
      ]
    },
    { name: '新闻资讯', href: '/news', current: location.pathname === '/news' },
    { name: '资源下载', href: '/resources', current: location.pathname === '/resources' },
    { name: '联系我们', href: '/contact', current: location.pathname === '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">农</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-gray-800">农业数字化转型促进中心</h1>
                <p className="text-xs text-gray-600">Agricultural Digital Transformation Center</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        item.current
                          ? 'text-green-600 bg-green-50'
                          : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    {/* Dropdown Menu */}
                    <div 
                      className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      item.current
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                          item.current
                            ? 'text-green-600 bg-green-50'
                            : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        item.current
                          ? 'text-green-600 bg-green-50'
                          : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;