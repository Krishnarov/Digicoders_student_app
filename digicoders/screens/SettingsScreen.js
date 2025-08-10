import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity, Alert, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MainLayout from "../components/MainLayout";

export default function SettingsScreen({ navigation }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [autoBackup, setAutoBackup] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
        Alert.alert("Theme Changed", `Dark Mode ${!isDarkMode ? "Enabled" : "Disabled"}`);
    };

    const settingsGroups = [
        {
            title: 'Account Settings',
            items: [
                { title: 'Change Password', icon: '🔒', action: () => Alert.alert("Change Password", "Password change screen coming soon!") },
                { title: 'Privacy Settings', icon: '🛡️', action: () => Alert.alert("Privacy", "Privacy settings coming soon!") },
                { title: 'Account Security', icon: '🔐', action: () => Alert.alert("Security", "Security settings coming soon!") },
            ]
        },
        {
            title: 'App Preferences',
            items: [
                { title: 'Language', icon: '🌐', value: 'English', action: () => Alert.alert("Language", "Language selection coming soon!") },
                { title: 'Data Usage', icon: '📊', action: () => Alert.alert("Data Usage", "Data usage settings coming soon!") },
            ]
        },
        {
            title: 'Support',
            items: [
                { title: 'Help Center', icon: '❓', action: () => Alert.alert("Help", "Help center coming soon!") },
                { title: 'Contact Support', icon: '📞', action: () => Alert.alert("Contact", "Call: +91 9198483820") },
                { title: 'Rate App', icon: '⭐', action: () => Alert.alert("Rating", "Thank you for your feedback!") },
            ]
        }
    ];

    return (
        <MainLayout navigation={navigation}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                
                {/* Settings Header */}
                <LinearGradient
                    colors={['#667eea', '#764ba2']}
                    style={styles.settingsHeader}
                >
                    <Text style={styles.headerTitle}>Settings</Text>
                    <Text style={styles.headerSubtitle}>Manage your preferences</Text>
                </LinearGradient>

                {/* Quick Toggle Settings */}
                <View style={styles.quickToggles}>
                    <View style={styles.toggleCard}>
                        <View style={styles.toggleInfo}>
                            <Text style={styles.toggleIcon}>🌙</Text>
                            <View>
                                <Text style={styles.toggleTitle}>Dark Mode</Text>
                                <Text style={styles.toggleSubtitle}>Enable dark theme</Text>
                            </View>
                        </View>
                        <Switch 
                            value={isDarkMode} 
                            onValueChange={toggleDarkMode}
                            trackColor={{ false: '#e1e5e9', true: '#667eea' }}
                            thumbColor={isDarkMode ? '#ffffff' : '#f4f3f4'}
                        />
                    </View>

                    <View style={styles.toggleCard}>
                        <View style={styles.toggleInfo}>
                            <Text style={styles.toggleIcon}>🔔</Text>
                            <View>
                                <Text style={styles.toggleTitle}>Notifications</Text>
                                <Text style={styles.toggleSubtitle}>Push notifications</Text>
                            </View>
                        </View>
                        <Switch 
                            value={notifications} 
                            onValueChange={setNotifications}
                            trackColor={{ false: '#e1e5e9', true: '#43e97b' }}
                            thumbColor={notifications ? '#ffffff' : '#f4f3f4'}
                        />
                    </View>

                    <View style={styles.toggleCard}>
                        <View style={styles.toggleInfo}>
                            <Text style={styles.toggleIcon}>☁️</Text>
                            <View>
                                <Text style={styles.toggleTitle}>Auto Backup</Text>
                                <Text style={styles.toggleSubtitle}>Backup to cloud</Text>
                            </View>
                        </View>
                        <Switch 
                            value={autoBackup} 
                            onValueChange={setAutoBackup}
                            trackColor={{ false: '#e1e5e9', true: '#f093fb' }}
                            thumbColor={autoBackup ? '#ffffff' : '#f4f3f4'}
                        />
                    </View>
                </View>

                {/* Settings Groups */}
                {settingsGroups.map((group, groupIndex) => (
                    <View key={groupIndex} style={styles.settingsGroup}>
                        <Text style={styles.groupTitle}>{group.title}</Text>
                        <View style={styles.groupContainer}>
                            {group.items.map((item, itemIndex) => (
                                <TouchableOpacity
                                    key={itemIndex}
                                    style={[
                                        styles.settingItem,
                                        itemIndex === group.items.length - 1 && styles.lastItem
                                    ]}
                                    onPress={item.action}
                                >
                                    <View style={styles.settingLeft}>
                                        <Text style={styles.settingIcon}>{item.icon}</Text>
                                        <Text style={styles.settingText}>{item.title}</Text>
                                    </View>
                                    <View style={styles.settingRight}>
                                        {item.value && (
                                            <Text style={styles.settingValue}>{item.value}</Text>
                                        )}
                                        <Text style={styles.settingArrow}>›</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                ))}

                {/* Logout Section */}
                <View style={styles.logoutSection}>
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={() => Alert.alert("Logout", "You have been logged out!")}
                    >
                        <LinearGradient
                            colors={['#ff6b6b', '#ee5a52']}
                            style={styles.logoutGradient}
                        >
                            <Text style={styles.logoutIcon}>⚡</Text>
                            <Text style={styles.logoutText}>Logout</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                {/* App Version */}
                <View style={styles.versionContainer}>
                    <Text style={styles.versionText}>DigiCoders App v1.0.0</Text>
                </View>

            </ScrollView>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#f5f7fa" 
    },

    // Header
    settingsHeader: {
        paddingTop: 20,
        paddingBottom: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 25,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 5,
    },
    headerSubtitle: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '300',
    },

    // Quick Toggles
    quickToggles: {
        paddingHorizontal: 15,
        marginBottom: 25,
    },
    toggleCard: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderRadius: 15,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 5,
    },
    toggleInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    toggleIcon: {
        fontSize: 20,
        marginRight: 15,
    },
    toggleTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 2,
    },
    toggleSubtitle: {
        fontSize: 13,
        color: '#666',
        fontWeight: '400',
    },

    // Settings Groups
    settingsGroup: {
        paddingHorizontal: 15,
        marginBottom: 25,
    },
    groupTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
        marginLeft: 5,
    },
    groupContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 5,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#f8f9fa',
    },
    lastItem: {
        borderBottomWidth: 0,
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    settingIcon: {
        fontSize: 18,
        marginRight: 15,
        width: 25,
        textAlign: 'center',
    },
    settingText: { 
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    settingRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingValue: {
        fontSize: 14,
        color: '#666',
        marginRight: 8,
    },
    settingArrow: {
        fontSize: 20,
        color: '#ccc',
        fontWeight: 'bold',
    },

    // Logout Section
    logoutSection: {
        paddingHorizontal: 15,
        marginBottom: 25,
    },
    logoutButton: {
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#ff6b6b',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    logoutGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
    },
    logoutIcon: {
        fontSize: 18,
        marginRight: 10,
        color: '#ffffff',
    },
    logoutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },

    // Version
    versionContainer: {
        alignItems: 'center',
        paddingBottom: 30,
    },
    versionText: {
        fontSize: 12,
        color: '#999',
        fontWeight: '400',
    },
});