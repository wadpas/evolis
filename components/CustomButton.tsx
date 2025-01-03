import { Pressable, Text } from 'react-native'

type Props = {
  title: string
  handlePress: () => void
  isLoading?: boolean
}

const CustomButton = ({ title, handlePress, isLoading }: Props) => {
  return (
    <Pressable
      onPress={handlePress}
      className='items-center justify-center w-full bg-primary rounded-xl min-h-12'
      disabled={isLoading}>
      <Text className='text-lg font-semibold text-white'>{isLoading ? 'Loading...' : title}</Text>
    </Pressable>
  )
}

export default CustomButton
