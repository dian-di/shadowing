import { Home, UserRound } from 'lucide-react'
import { useState } from 'react'

interface Tab {
  label: string
  value: string
  icon?: React.ReactNode // 可选的图标属性
}

interface TabBarProps {
  onTabChange?: (value: string) => void // 新增的回调属性
}

const TabBar = ({ onTabChange }: TabBarProps) => {
  const [activeTab, setActiveTab] = useState<string>('template')

  const tabs: Tab[] = [
    { label: 'Home', value: 'home', icon: <Home /> },
    { label: '我的', value: 'mine', icon: <UserRound /> },
  ]

  const changeTab = (value:string) => {
    setActiveTab(value)
    if (onTabChange) {
      onTabChange(value)
    }
  }

  return (
    <div className='flex h-14 border-gray-50 border-t bg-gray-200 shadow-sm'>
      {tabs.map((tab) => (
        <div
          key={tab.value}
          className={`flex flex-1 flex-col items-center justify-center transition-all duration-200 ${
            activeTab === tab.value
              ? 'text-red-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => changeTab(tab.value)}
        >
          {tab.icon && <div className="mb-1">{tab.icon}</div>} 
         
          <span 
            className={`text-sm ${
              activeTab === tab.value ? 'font-semibold' : 'font-medium'
            }`}
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TabBar