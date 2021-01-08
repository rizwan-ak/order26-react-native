import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Dashboard from '../screens/dashboard';
import Category from '../screens/category';
import Employees from '../screens/employees';
import Orders from '../screens/orders';
import { connect } from 'react-redux';

import Loader from '../components/loader';

const Stack = createStackNavigator();

function Routes({ user, loading }) {
    return (
        <>
            {loading && <Loader />}
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName={user?.signature ? 'dashboard' : 'login'}
                >
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="dashboard" component={Dashboard} />
                    <Stack.Screen name="category" component={Category} />
                    <Stack.Screen name="employee" component={Employees} />
                    <Stack.Screen name="order" component={Orders} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
export default connect(state => state)(Routes);
