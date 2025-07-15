import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <View className='banner'>点击中转，展示图片海报</View>
      <View className='service'>
        <Text className='name'>3小时日常保洁</Text>
      </View>
      <View className='service'>
        <Text className='name'>90㎡出租房全房打扫</Text>
      </View>
      <View className='service'>
        <Text className='name'>新房开荒保洁260㎡四层别墅</Text>
      </View>
    </View>
  )
}
