import {View, Text, Image, TextInput} from 'react-native'
import React from 'react'
import {icons} from "@/constants/icons";

interface Props {
    placeHolder: string;
    onPress?: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
}

const SearchBar = ({placeHolder, onPress, value, onChangeText}: Props) => {
    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#AB8BFF"/>
                <TextInput
                    onPress={onPress}
                    onChangeText={onChangeText}
                    placeholder={placeHolder}
                    value={value}
                    placeholderTextColor="#A8B5DB"
                    className="flex-1 ml-2 text-white"
                />
        </View>
    )
}
export default SearchBar
