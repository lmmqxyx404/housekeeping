import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import avatar from '../../../product.jpg'
import './index.scss'

export default function Profile() {
  const [showDot, setShowDot] = useState(true)

  return (
    <View className='profile'>
      <View className='title-bar'>
        <Text className='home' onClick={() => Taro.navigateTo({ url: '/pages/index/index' })}>⌂</Text>
        <Text className='title'>个人中心</Text>
        <View className='ops'>
          <Text className='op'>···</Text>
          <Text className='op'>📷</Text>
        </View>
      </View>

      <View className='info-card'>
        <Image className='avatar' src={avatar} mode='aspectFill' />
        <View className='info-text'>
          <Text className='name'>雯师傅</Text>
          <Text className='id'>ID: 123456</Text>
        </View>
        <View className='points'>
          <Text className='num'>2000</Text>
          <Text className='recharge'>充值</Text>
        </View>
        <View className='badge'>金牌</View>
      </View>

      <View className='order-status'>
        <View className='status-item'>
          <View className='icon-box'>
            <Text className='icon'>🕒</Text>
            {showDot && <View className='dot'></View>}
          </View>
          <Text className='label'>进行中</Text>
        </View>
        <View className='status-item'>
          <View className='icon-box'>
            <Text className='icon'>🔧</Text>
          </View>
          <Text className='label'>待返修</Text>
        </View>
        <View className='status-item'>
          <View className='icon-box'>
            <Text className='icon'>✅</Text>
          </View>
          <Text className='label'>已完成</Text>
        </View>
      </View>

      <View className='func-group'>
        <View className='func-item'>
          <Text className='func-icon'>🛠️</Text>
          <Text className='func-text'>服务项目</Text>
          <Text className='chevron'>›</Text>
        </View>
        <View className='func-item'>
          <Text className='func-icon'>📍</Text>
          <Text className='func-text'>服务距离</Text>
          <Text className='chevron'>›</Text>
        </View>
      </View>

      <View className='func-group'>
        <View className='func-item'>
          <Text className='func-icon'>⭐</Text>
          <Text className='func-text'>我的积分</Text>
          <Text className='chevron'>›</Text>
        </View>
        <View className='func-item'>
          <Text className='func-icon'>💰</Text>
          <View className='func-text-box'>
            <Text className='func-text'>我的钱包</Text>
            <Text className='sub-text'>可用余额 ¥100</Text>
          </View>
          <Text className='chevron'>›</Text>
        </View>
        <View className='func-item'>
          <Text className='func-icon'>✉️</Text>
          <Text className='func-text'>意见反馈</Text>
          <Text className='chevron'>›</Text>
        </View>
        <View className='func-item'>
          <Text className='func-icon'>🚀</Text>
          <Text className='func-text'>师傅入驻</Text>
          <Text className='chevron'>›</Text>
        </View>
      </View>

      <View className='contact-box'>
        <View className='contact-btn'>
          <Text className='contact-icon'>🎧</Text>
          <Text className='contact-text'>联系客服</Text>
        </View>
        <Text className='service-time'>服务时间：09:00-21:00</Text>
      </View>

      <View className='bottom-bar'>
        <View className='bottom-item' onClick={() => Taro.navigateTo({ url: '/pages/index/index' })}>
          <Text>首页</Text>
        </View>
        <View className='bottom-item' onClick={() => Taro.navigateTo({ url: '/pages/messages/index' })}>
          <Text>消息</Text>
        </View>
        <View className='bottom-item active'>
          <Text>账户</Text>
        </View>
      </View>
    </View>
  )
}
