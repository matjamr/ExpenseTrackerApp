import 'react-native-gesture-handler';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import {FULL_DARK_BLUE, HALF_DARK_BLUE, WHITE, YELLOW} from "./assets/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import IconButton from "./components/IconButton";
import ManageExpense from "./screens/ManageExpense";
import {ExpensesContext, ExpensesProvider} from "./store/expenses-context.";

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

function ExpensesTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Recent Expenses Screen"
                        component={RecentExpensesScreen}
                        options={{
                            headerRight: () => <IconButton/>,
                            headerStyle: {
                                backgroundColor: HALF_DARK_BLUE,
                            },
                            tabBarIcon: ({focused: boolean, color: string, size: number}) => {
                                const focused = useIsFocused()
                                return <Ionicons name={'hourglass-outline'} size={number}
                                                 color={focused ? YELLOW : WHITE}/>
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
                            headerRight: () => <IconButton/>,
                            tabBarStyle: {
                                backgroundColor: FULL_DARK_BLUE
                            },
                            headerStyle: {
                                backgroundColor: HALF_DARK_BLUE,
                            },
                            headerTitleStyle: {
                                color: WHITE
                            },
                            tabBarActiveTintColor: YELLOW,
                            tabBarIcon: ({focused: boolean, color: string, size: number}) => {
                                const focused = useIsFocused()
                                return <Ionicons name={'calendar'}
                                                 size={number}
                                                 color={focused ? YELLOW : WHITE}
                                />
                            },
                        }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <ExpensesProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        // cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
                        // headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
                        headerStyle: {backgroundColor: HALF_DARK_BLUE},
                        headerTintColor: WHITE
                    }}
                >
                    <Stack.Screen
                        name="ExpensesTab"
                        component={ExpensesTab}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="ManageExpense"
                        component={ManageExpense}
                        options={{
                            presentation: 'modal',
                            // @ts-ignore
                            headerLeft: null
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ExpensesProvider>
    );
}

export type StackParamList = {
    ExpensesTab: undefined;
    EditExpenseScreen: undefined;
    MyModal: undefined;
    ManageExpense: undefined;
};

export type TabsParamList = {
    RecentExpensesScreen: undefined;
    AllExpensesScreen: undefined;
};
