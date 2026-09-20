import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-success text-center">
                Welcome to Nativewind!
            </Text>

            <Link
                href="/Onboarding"
                className="bg-black p-4 rounded-full text-white mt-4"
            >
                Go To Onboarding
            </Link>

            <Link
                href="/(auth)/sign-in"
                className="bg-black p-4 rounded-full text-white mt-4"
            >
                Sign In
            </Link>

            <Link
                href="/(auth)/sign-up"
                className="bg-black p-4 rounded-full text-white mt-4"
            >
                Sign Up
            </Link>

            <Link
                href="/subscriptions/sportify"
                className="bg-black p-4 rounded-full text-white mt-4"
            >
                Sportify Subscription
            </Link>

            <Link
                href={{
                    pathname: '/subscriptions/[id]',
                    params: { id: 'claude' },
                }}
                className="bg-black p-4 rounded-full text-white mt-4"
            >
                Claude Max Subscription
            </Link>
        </View>
    );
}