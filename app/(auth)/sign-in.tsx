import {View, Text} from 'react-native'
import React from 'react'
import {Link} from "expo-router";

const SignIn = () => {
    return (
        <View className={'flex-1 items-center justify-center'}>
            <Text>SignIn</Text>
            <Link href={'/(auth)/sign-up'} className='bg-black p-4 rounded-full text-white mt-4'>Create an account</Link>
        </View>
    )
}
export default SignIn
