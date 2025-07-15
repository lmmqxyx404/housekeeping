import { View, Text } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button type='primary'>NutUI Button</Button>
    </View>
  )
}
