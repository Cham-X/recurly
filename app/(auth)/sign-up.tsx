import {View, Text} from 'react-native'
import React from 'react'
import {Link} from "expo-router";

const SignUp = () => {
    return (
        <View className={'flex-1 items-center justify-center'}>
            <Text>Signup</Text>
            <Link href={'/(auth)/sign-in'} className='bg-black p-4 rounded-full text-white mt-4 w-full text-center'>sign in</Link>
        </View>
    )
}
export default SignUp
