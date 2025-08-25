import { ChevronRight, Heart, MessageSquare, Share2 } from 'lucide-react'

export default function Mine() {
  return (
    <div className="w-screen bg-white">
      {/* 用户信息 */}
      <div className="border-gray-100 border-b p-4">
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <span className="text-gray-500 text-sm">头像</span>
          </div>
          <div className="ml-3">
            <h3 className="font-medium">用户</h3>
            <p className="text-gray-500 text-sm">123</p>
          </div>
        </div>
      </div>

      <div className='p-4'>
        {/* 联系客服 */}
        <div className='flex items-center justify-between rounded border-gray-100 border-b py-3 hover:bg-gray-50'>
          <div className="mr-2 flex items-center">
            <MessageSquare className="h-5 w-5 text-gray-600" />
            <span className="ml-1 text-xs">联系客服</span>
          </div>
          <ChevronRight />
        </div>

        {/* 添加收藏 */}
        <div className='flex items-center justify-between rounded border-gray-100 border-b py-3 hover:bg-gray-50'>
          <div className="mr-2 flex items-center">
            <Heart className="h-5 w-5 text-gray-600" />
            <span className="ml-1 text-xs">添加收藏</span>
          </div>
          <div className='flex items-center'>
            <span className="text-gray-400 text-xs">下次打开更方便</span>
            <ChevronRight />
          </div>
        </div>

        {/* 分享转发 */}
        <div className='flex items-center justify-between rounded py-3 hover:bg-gray-50'>
          <div className="mr-2 flex items-center">
            <Share2 className="h-5 w-5 text-gray-600" />
            <span className="ml-1 text-xs">分享转发</span>
          </div>
          <div className='flex items-center'>
            <span className="text-gray-400 text-xs">好用记得分享哟</span>
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  )
}
