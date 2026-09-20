import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
    return (
        <View className="flex-1  bg-background p-5">
            <Text className="text-5xl font-sans-extrabold text-success">
                Home
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

        </View>
    );
}