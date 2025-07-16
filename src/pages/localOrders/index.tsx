import { useState } from 'react'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import banner from '../../../product.jpg'

interface Order {
  id: number
  title: string
  address: string
  source: string
  desc: string
  time: string
  client: string
  phone: string
  images: string[]
}

const orders: Order[] = [
  {
    id: 1,
    title: '3小时日常保洁',
    address: '北京市朝阳区示例路100号',
    source: '平台',
    desc: '家庭日常保洁，时长约3小时',
    time: '2025-07-01 10:00',
    client: '张三',
    phone: '13800000001',
    images: [banner]
  },
  {
    id: 2,
    title: '90㎡出租房全房打扫',
    address: '上海市浦东新区示例路200号',
    source: '微信',
    desc: '出租前全面打扫，包含窗户与厨房',
    time: '2025-07-02 14:30',
    client: '李四',
    phone: '13800000002',
    images: [banner]
  },
  {
    id: 3,
    title: '新房开荒保洁260㎡四层别墅',
    address: '广州市天河区示例路300号',
    source: '线下',
    desc: '别墅开荒保洁，4层共260㎡',
    time: '2025-07-03 09:00',
    client: '王五',
    phone: '13800000003',
    images: [banner]
  }
]

export default function LocalOrders() {
  const [tab, setTab] = useState(0)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [grabbed, setGrabbed] = useState(false)

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
          <View
            key={order.id}
            className='order-card'
            onClick={() => {
              setSelectedOrder(order)
              setGrabbed(false)
            }}
          >
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

      {selectedOrder && (
        <View className='modal-mask' onClick={() => setSelectedOrder(null)}>
          <View
            className='order-modal'
            onClick={(e) => e.stopPropagation()}
          >
            <View className='close-btn' onClick={() => setSelectedOrder(null)}>
              ×
            </View>
            <View className='modal-title'>订单详情</View>
            <View className='modal-content'>
              <View className='service-info'>
                <Image className='service-icon' src={banner} mode='aspectFill' />
                <View className='service-text'>
                  <Text className='service-name'>{selectedOrder.title}</Text>
                  <Text className='service-desc'>{selectedOrder.desc}</Text>
                </View>
              </View>

              <View className='thumbnail'>
                <Image className='thumb-img' src={selectedOrder.images[0]} mode='aspectFill' />
                <Text className='thumb-arrow'>›</Text>
              </View>

              <View className='info-row'>
                <Text className='row-icon'>🕒</Text>
                <Text className='row-text'>{selectedOrder.time}</Text>
              </View>
              <View className='info-row'>
                <Text className='row-icon'>📍</Text>
                <Text className='row-text'>{selectedOrder.address}</Text>
                <Text className='row-link'>查看地图</Text>
              </View>
              <View className='info-row'>
                <Text className='row-icon'>👤</Text>
                <Text className='row-text'>{selectedOrder.client}</Text>
              </View>
              <View className='info-row'>
                <Text className='row-icon'>📞</Text>
                <Text className='row-text'>{selectedOrder.phone}</Text>
                <View className='row-call'>
                  <Text className='call-icon'>📞</Text>
                  <Text className='row-link'>可拨打电话</Text>
                </View>
              </View>
            </View>

            <View className='modal-action'>
              <View
                className={`action-btn ${grabbed ? 'disabled' : ''}`}
                onClick={() => {
                  if (grabbed) return
                  setGrabbed(true)
                  Taro.showToast({ title: '抢单成功', icon: 'success' })
                }}
              >
                {grabbed ? '已抢' : '抢单'}
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}
