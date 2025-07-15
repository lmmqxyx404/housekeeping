import { View, Text } from '@tarojs/components'
import { Cell, CellGroup } from '@nutui/nutui-react-taro'
import './index.scss'

export default function Profile() {
  return (
    <View className='profile'>
      <View className='title'>个人中心</View>
      <CellGroup>
        <Cell title='已抢到的订单' />
        <Cell title='需要返工的订单' />
        <Cell title='师傅调整自己的业务种类' />
        <Cell title='师傅调整自己的接单区域' />
        <Cell title='和公司介绍' />
        <Cell title='公众号客服' />
        <Cell title='推荐使用' />
      </CellGroup>
      <View className='note'>
        <Text>这是平台更新给师傅的提示，标价就是给师傅结算的价，统计在钱包中。</Text>
      </View>
    </View>
  )
}
