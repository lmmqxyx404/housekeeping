import { useState } from 'react'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import banner from '../../product.jpg'

interface Order {
  id: number
  title: string
  address: string
  source: string
}

const orders: Order[] = [
  { id: 1, title: '3小时日常保洁', address: '北京市朝阳区示例路100号', source: '平台' },
  { id: 2, title: '90㎡出租房全房打扫', address: '上海市浦东新区示例路200号', source: '微信' },
  { id: 3, title: '新房开荒保洁260㎡四层别墅', address: '广州市天河区示例路300号', source: '线下' }
]

export default function LocalOrders() {
  const [tab, setTab] = useState(0)

  return (
    <View className='local-orders'>
      <Swiper
        className='carousel'
        circular
        autoplay
        interval={5000}
        indicatorDots
        indicatorColor='#CCCCCC'
        indicatorActiveColor='#1890FF'
      >
        <SwiperItem>
          <Image className='carousel-img' src={banner} mode='aspectFill' />
        </SwiperItem>
        <SwiperItem>
          <Image className='carousel-img' src={banner} mode='aspectFill' />
        </SwiperItem>
      </Swiper>

      <View className='tabs'>
        <View
          className={`tab-item ${tab === 0 ? 'active' : ''}`}
          onClick={() => setTab(0)}
        >
          本地订单
        </View>
        <View
          className={`tab-item ${tab === 1 ? 'active' : ''}`}
          onClick={() => setTab(1)}
        >
          全国订单
        </View>
      </View>

      <View className='list'>
        {orders.map((order) => (
          <View key={order.id} className='order-card'>
            <Image className='order-image' src={banner} mode='aspectFill' />
            <View className='order-content'>
              <Text className='order-title'>{order.title}</Text>
              <Text className='order-address'>{order.address}</Text>
            </View>
            <View className='order-action'>
              <Text>抢单</Text>
            </View>
            <Text className='order-label'>{order.source}</Text>
          </View>
        ))}
      </View>

      <View className='bottom-bar'>
        <View className='bottom-item active'>
          <Text>首页</Text>
        </View>
        <View className='bottom-item'>
          <Text>消息</Text>
        </View>
        <View className='bottom-item'>
          <Text>账户</Text>
        </View>
      </View>
    </View>
  )
}
