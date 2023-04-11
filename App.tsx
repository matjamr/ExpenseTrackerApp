import 'react-native-gesture-handler';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import EditExpenseScreen from "./screens/EditExpenseScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import AntDesign from "react-native-vector-icons/AntDesign"
import {FULL_DARK_BLUE, HALF_DARK_BLUE, WHITE, YELLOW} from "./assets/colors";
import {color} from "@rneui/themed/dist/config";
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

function ExpensesTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Recent Expenses Screen" component={RecentExpensesScreen} options={{
                headerRight: () => {
                    return <AntDesign
                        name='plus'
                        size={25}/>
                },
                headerStyle: {
                    backgroundColor: HALF_DARK_BLUE,
                },
                tabBarIcon: ({ focused: boolean, color: string, size: number }) => {
                    const focused = useIsFocused()
                    return <Ionicons name={'hourglass-outline'} size={number} color={focused ? YELLOW : WHITE} />
                },
                title: 'Recent Expenses',
                headerTitleStyle: {
                    color: WHITE
                },
                tabBarStyle: {
                    backgroundColor: FULL_DARK_BLUE
                },
                tabBarActiveTintColor: YELLOW,
            }}/>
            <Tab.Screen name="AllExpensesScreen"
                        component={AllExpensesScreen}
                        options={{
                            headerRight: () => {
                                return <AntDesign
                                    name='plus'
                                    size={25}
                                />
                            },
                            tabBarStyle: {
                                backgroundColor: FULL_DARK_BLUE
                            },
                            tabBarActiveTintColor: YELLOW,
                            tabBarIcon: ({ focused: boolean, color: string, size: number }) => {
                                const focused = useIsFocused()
                                return <Ionicons name={'calendar'} size={number} color={focused ? YELLOW : WHITE} />
                            },
                        }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ExpensesTab"
                    component={ExpensesTab}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="EditExpenseScreen"
                    component={EditExpenseScreen}
                    options={{
                        headerRight: () => {
                            return <AntDesign
                                name='plus'
                                size={25}/>
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export type StackParamList = {
    ExpensesTab: undefined;
    EditExpenseScreen: undefined;
};

export type TabsParamList = {
    RecentExpensesScreen: undefined;
    AllExpensesScreen: undefined;
};
