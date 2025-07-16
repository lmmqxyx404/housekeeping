import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
// import banner from '../../product.jpg'
import banner from '../../../product.jpg'



interface Order {
  id: number
  title: string
  desc: string
  time: string
  address: string
  customer: string
  phone: string
  source: string
}

const orders: Order[] = [
  {
    id: 1,
    title: '3小时日常保洁',
    desc: '客厅卧室打扫',
    time: '7月16日（周三） 15:30',
    address: '北京市朝阳区示例路100号',
    customer: '张三',
    phone: '138****6789',
    source: '平台'
  },
  {
    id: 2,
    title: '90㎡出租房全房打扫',
    desc: '退租卫生清理',
    time: '7月17日（周四） 10:00',
    address: '上海市浦东新区示例路200号',
    customer: '李四',
    phone: '139****1234',
    source: '微信'
  },
  {
    id: 3,
    title: '新房开荒保洁260㎡四层别墅',
    desc: '地面窗户清洁',
    time: '7月18日（周五） 09:00',
    address: '广州市天河区示例路300号',
    customer: '王五',
    phone: '137****5678',
    source: '线下'
  }
]

export default function LocalOrders() {
  const [tab, setTab] = useState(0)
  const [current, setCurrent] = useState<Order | null>(null)

  const openDetail = (order: Order) => {
    setCurrent(order)
  }

  const closeDetail = () => {
    setCurrent(null)
  }

  return (
    <View className='local-orders'>
      <View className='title-bar'>
        <Text className='title'>雯师傅</Text>
        <View className='ops'>
          <Text className='op'>···</Text>
          <Text className='op'>📷</Text>
        </View>
      </View>
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
          <View key={order.id} className='order-card' onClick={() => openDetail(order)}>
            <Image className='order-image' src={banner} mode='aspectFill' />
            <View className='order-content'>
              <Text className='order-title'>{order.title}</Text>
              <Text className='order-address'>{order.address}</Text>
            </View>
            <View className='order-action'>
              <Text className='grab-btn'>抢单</Text>
              <View className='order-label'>{order.source}</View>
            </View>
          </View>
        ))}
      </View>

      {current && (
        <View className='popup-mask' onClick={closeDetail}>
          <View className='order-popup' onClick={(e) => e.stopPropagation()}>
            <View className='popup-title'>订单详情</View>
            <View className='popup-item'>
              <Image
                className='popup-icon'
                src={banner}
                mode='aspectFill'
                onClick={() => Taro.previewImage({ urls: [banner] })}
              />
              <View className='popup-text'>
                <Text className='popup-main'>{current.title}</Text>
                <Text className='popup-sub'>{current.desc}</Text>
              </View>
            </View>
            <View className='popup-item'>
              <Text className='popup-info'>{current.time}</Text>
            </View>
            <View className='popup-item addr'>
              <Text className='popup-info'>{current.address}</Text>
              <Text className='copy-btn' onClick={() => { Taro.setClipboardData({ data: current.address }) }}>复制</Text>
            </View>
            <View className='popup-item'>
              <Text className='popup-info'>{current.customer}</Text>
            </View>
            <View className='popup-item'>
              <Text className='popup-info'>{current.phone}</Text>
              <Text className='popup-tip'>抢单后可拨打电话</Text>
            </View>
            <View className='popup-action'>
              <Text className='grab-big'>抢 单</Text>
            </View>
            <Text className='popup-close' onClick={closeDetail}>退出</Text>
          </View>
        </View>
      )}

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
