import { useState } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import banner from '../../../product.jpg'

interface OrderMsg {
  id: number
  title: string
  address: string
  icon: string
}

const initialOrders: OrderMsg[] = [
  { id: 1, title: '90m\u00b2\u51fa\u79df\u623f\u5168\u623f\u6253\u626b', address: ' \u5408\u80a5\u5e02\u8755\u5c71\u533a...', icon: banner },
  { id: 2, title: '3\u5c0f\u65f6\u65e5\u5e38\u4fdd\u6d01', address: ' \u5408\u80a5\u5e02\u8755\u5c71\u533a...', icon: banner }
]

interface PlatformMsg {
  id: number
  title: string
  summary: string
  cover: string
  date: string
}

const platformGroups: { date: string; items: PlatformMsg[] }[] = [
  {
    date: ' \u5468\u4e00 17:01',
    items: [
      {
        id: 1,
        title: ' \u5e73\u53f0\u6d3b\u52a8\u66f4\u65b0',
        summary: ' \u65b0\u7684\u4f18\u60e0\u6d3b\u52a8\u5df2\u4e0a\u7ebf',
        cover: banner,
        date: ' \u5468\u4e00 17:01'
      }
    ]
  },
  {
    date: ' \u5468\u65e5 10:00',
    items: [
      {
        id: 2,
        title: ' \u5e73\u53f0\u5347\u7ea7\u901a\u77e5',
        summary: ' \u7cfb\u7edf\u529f\u80fd\u53d1\u751f\u8fdb\u4e00\u6b65\u5347\u7ea7',
        cover: banner,
        date: ' \u5468\u65e5 10:00'
      }
    ]
  }
]

export default function Messages() {
  const [tab, setTab] = useState(0)
  const [orders, setOrders] = useState(initialOrders)

  const markRead = (id: number) => {
    setOrders((prev) => prev.filter((m) => m.id !== id))
  }

  return (
    <View className='messages'>
      <View className='title-bar'>
        <Text className='home' onClick={() => Taro.navigateTo({ url: '/pages/index/index' })}>\u2302</Text>
        <Text className='title'>\u6d88\u606f</Text>
        <View className='ops'>
          <Text className='op'>\u00b7\u00b7\u00b7</Text>
          <Text className='op'>\ud83d\udcbb</Text>
        </View>
      </View>
      <View className='tabs'>
        <View className={`tab-item ${tab === 0 ? 'active' : ''}`} onClick={() => setTab(0)}>
          \u8ba2\u5355\u6d88\u606f
          {orders.length > 0 && tab !== 0 && <View className='badge'>{orders.length}</View>}
        </View>
        <View className={`tab-item ${tab === 1 ? 'active' : ''}`} onClick={() => setTab(1)}>
          \u5e73\u53f0\u6d88\u606f
        </View>
      </View>

      {tab === 0 ? (
        <View className='orders'>
          {orders.length === 0 ? (
            <View className='empty'>\u6682\u65e0\u65b0\u7684\u8ba2\u5355\u6d88\u606f</View>
          ) : (
            orders.map((msg) => (
              <View key={msg.id} className='order-card'>
                <Image className='order-icon' src={msg.icon} mode='aspectFill' />
                <View className='order-content'>
                  <Text className='order-title'>{msg.title}</Text>
                  <Text className='order-address'>{msg.address}</Text>
                </View>
                <View className='detail-btn' onClick={() => markRead(msg.id)}>
                  \u67e5\u770b\u8be6\u60c5
                </View>
              </View>
            ))
          )}
        </View>
      ) : (
        <View className='platform'>
          {platformGroups.map((group) => (
            <View key={group.date} className='group'>
              <View className='group-header'>{group.date}</View>
              {group.items.map((item) => (
                <View key={item.id} className='platform-card'>
                  <Image className='cover' src={item.cover} mode='aspectFill' />
                  <Text className='card-title'>{item.title}</Text>
                  <Text className='card-summary'>{item.summary}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      )}

      <View className='bottom-bar'>
        <View className='bottom-item'>
          <Text>\u9996\u9875</Text>
        </View>
        <View className='bottom-item active'>
          <Text>\u6d88\u606f</Text>
        </View>
        <View className='bottom-item'>
          <Text>\u8d26\u6237</Text>
        </View>
      </View>
    </View>
  )
}
