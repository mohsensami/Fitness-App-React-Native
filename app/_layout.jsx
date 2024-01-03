import { View, Text, LogBox } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function _layout() {
    LogBox.ignoreLogs(['Warning: Failed prop type']);
    return (
        <>
            <StatusBar style="dark" />
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </>
    );
}
