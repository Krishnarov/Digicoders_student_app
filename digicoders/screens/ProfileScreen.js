import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MainLayout from '../components/MainLayout';

export default function ProfileScreen({ navigation }) {
    const profileStats = [
        { label: 'Courses Completed', value: '12', icon: '🎓' },
        { label: 'Certificates', value: '8', icon: '🏆' },
        { label: 'Study Hours', value: '240', icon: '⏱️' },
    ];

    const menuItems = [
        { title: 'Edit Profile', icon: '✏️', color: '#667eea' },
        { title: 'My Courses', icon: '📚', color: '#f093fb' },
        { title: 'Certificates', icon: '🎖️', color: '#43e97b' },
        { title: 'Achievements', icon: '🏅', color: '#ffa726' },
        { title: 'Help & Support', icon: '💬', color: '#4facfe' },
    ];

    return (
        <MainLayout navigation={navigation}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                
                {/* Profile Header */}
                <LinearGradient
                    colors={['#667eea', '#764ba2']}
                    style={styles.profileHeader}
                >
                    <View style={styles.profileImageContainer}>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                            style={styles.profileImage}
                        />
                        <View style={styles.onlineIndicator} />
                    </View>
                    
                    <Text style={styles.profileName}>Krishna Kumar</Text>
                    <Text style={styles.profileEmail}>krishna@digicoders.com</Text>
                    <Text style={styles.profileRole}>MERN Stack Developer</Text>
                    
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editButtonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </LinearGradient>

                {/* Stats Cards */}
                <View style={styles.statsSection}>
                    {profileStats.map((stat, index) => (
                        <View key={index} style={styles.statCard}>
                            <Text style={styles.statIcon}>{stat.icon}</Text>
                            <Text style={styles.statValue}>{stat.value}</Text>
                            <Text style={styles.statLabel}>{stat.label}</Text>
                        </View>
                    ))}
                </View>

                {/* Progress Section */}
                <View style={styles.progressSection}>
                    <Text style={styles.progressTitle}>Learning Progress</Text>
                    <View style={styles.progressCard}>
                        <View style={styles.progressHeader}>
                            <Text style={styles.progressCourse}>React Native Development</Text>
                            <Text style={styles.progressPercentage}>75%</Text>
                        </View>
                        <View style={styles.progressBarContainer}>
                            <View style={styles.progressBar} />
                            <LinearGradient
                                colors={['#43e97b', '#38f9d7']}
                                style={[styles.progressFill, { width: '75%' }]}
                            />
                        </View>
                    </View>
                </View>

                {/* Menu Items */}
                <View style={styles.menuSection}>
                    <Text style={styles.menuTitle}>Account</Text>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity 
                            key={index} 
                            style={styles.menuItem}
                            onPress={() => alert(`${item.title} pressed`)}
                        >
                            <View style={[styles.menuIconContainer, { backgroundColor: `${item.color}20` }]}>
                                <Text style={styles.menuIcon}>{item.icon}</Text>
                            </View>
                            <Text style={styles.menuItemText}>{item.title}</Text>
                            <Text style={styles.menuArrow}>›</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Company Info */}
                <View style={styles.companySection}>
                    <LinearGradient
                        colors={['#ffecd2', '#fcb69f']}
                        style={styles.companyCard}
                    >
                        <Text style={styles.companyTitle}>DigiCoders Technologies</Text>
                        <Text style={styles.companySubtitle}>Best Training Company in Lucknow</Text>
                        <Text style={styles.companyDescription}>
                            Empowering future developers with cutting-edge technology training
                        </Text>
                    </LinearGradient>
                </View>

            </ScrollView>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7fa',
    },
    
    // Profile Header
    profileHeader: {
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 40,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    profileImageContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#43e97b',
        borderWidth: 3,
        borderColor: '#ffffff',
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 5,
    },
    profileEmail: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        marginBottom: 5,
    },
    profileRole: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: 20,
        fontWeight: '300',
    },
    editButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    editButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
    },

    // Stats Section
    statsSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 25,
        marginBottom: 25,
    },
    statCard: {
        backgroundColor: '#ffffff',
        flex: 1,
        marginHorizontal: 5,
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 5,
    },
    statIcon: {
        fontSize: 24,
        marginBottom: 8,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        fontWeight: '500',
    },

    // Progress Section
    progressSection: {
        paddingHorizontal: 15,
        marginBottom: 25,
    },
    progressTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    progressCard: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 5,
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    progressCourse: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    progressPercentage: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43e97b',
    },
    progressBarContainer: {
        height: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
    },
    progressBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#f0f0f0',
        borderRadius: 4,
    },
    progressFill: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        borderRadius: 4,
    },

    // Menu Section
    menuSection: {
        paddingHorizontal: 15,
        marginBottom: 25,
    },
    menuTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 18,
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 3,
    },
    menuIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    menuIcon: {
        fontSize: 18,
    },
    menuItemText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    menuArrow: {
        fontSize: 20,
        color: '#ccc',
        fontWeight: 'bold',
    },

    // Company Section
    companySection: {
        paddingHorizontal: 15,
        marginBottom: 30,
    },
    companyCard: {
        padding: 25,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 8,
    },
    companyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    companySubtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
        fontWeight: '600',
    },
    companyDescription: {
        fontSize: 13,
        color: '#777',
        textAlign: 'center',
        lineHeight: 18,
        fontWeight: '400',
    },
});