import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colours } from "./constants/colours";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                  headerStyle: {backgroundColor: Colours.primary500},
                  headerTintColor: Colours.grey700,
                  contentStyle: {backgroundColor:Colours.grey700}
                }}>
                    <Stack.Screen
                        name="AllPlaces"
                        component={AllPlaces}
                        options={({navigation}) => ({
                          title:"Your Favourite Places",
                            headerRight: ({ tintColor }) => (
                                <IconButton
                                    icon="add"
                                    size={24}
                                    color={tintColor}
                                onPress={() => navigation.navigate("AddPlace")}/>
                            ),
                        })}
                    />
                    <Stack.Screen name="AddPlace" component={AddPlace} options={{
                      title:"Add New Place"
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
