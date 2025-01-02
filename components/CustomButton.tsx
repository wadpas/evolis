import { Pressable, Text } from 'react-native'

type Props = {
  label: string
  onPress: () => void
  isLoading?: boolean
}

const CustomButton = ({ label, onPress, isLoading }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className='items-center justify-center w-full bg-primary rounded-xl min-h-12'
      disabled={isLoading}>
      <Text className='text-lg font-semibold text-white'>{isLoading ? 'Loading...' : label}</Text>
    </Pressable>
  )
}

export default CustomButton
