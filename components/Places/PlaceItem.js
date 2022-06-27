import { Pressable, Text, View } from "react-native";

function PlaceItem({places}) {

    return (
        <Pressable onPress={onSelect}>
            <View>
                <Image source={{uri:place.imageUri}}/>
                <View>
                    <Text>{place.title}</Text>
                    <Text>{place.address}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default PlaceItem;