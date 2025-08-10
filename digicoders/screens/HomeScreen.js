import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';
import MainLayout from '../components/MainLayout';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
    const trainingPrograms = [
        { id: 1, title: 'Vocational Training', icon: '🎓', color: '#667eea' },
        { id: 2, title: 'Summer Training', icon: '☀️', color: '#f093fb' },
        { id: 3, title: 'Winter Training', icon: '❄️', color: '#4facfe' },
        { id: 4, title: 'Industrial Training', icon: '🏭', color: '#43e97b' },
    ];

    const achievements = [
        { id: 1, number: '500+', label: 'Students Trained', icon: '👥' },
        { id: 2, number: '95%', label: 'Placement Rate', icon: '📈' },
        { id: 3, number: '50+', label: 'Companies', icon: '🏢' },
        { id: 4, number: '5+', label: 'Years Experience', icon: '⭐' },
    ];

    return (
        <MainLayout navigation={navigation}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                
                {/* Hero Banner Carousel */}
                <View style={styles.carouselContainer}>
                    <Swiper 
                        autoplay 
                        autoplayTimeout={4} 
                        showsPagination
                        paginationStyle={styles.pagination}
                        dotStyle={styles.dot}
                        activeDotStyle={styles.activeDot}
                    >
                        <LinearGradient
                            colors={['#667eea', '#764ba2']}
                            style={styles.carouselSlide}
                        >
                            <Text style={styles.carouselTitle}>Welcome to DigiCoders</Text>
                            <Text style={styles.carouselSubtitle}>Best Training Company in Lucknow</Text>
                        </LinearGradient>
                        
                        <LinearGradient
                            colors={['#f093fb', '#f5576c']}
                            style={styles.carouselSlide}
                        >
                            <Text style={styles.carouselTitle}>Expert Team</Text>
                            <Text style={styles.carouselSubtitle}>Learn from Industry Professionals</Text>
                        </LinearGradient>
                        
                        <LinearGradient
                            colors={['#4facfe', '#00f2fe']}
                            style={styles.carouselSlide}
                        >
                            <Text style={styles.carouselTitle}>100% Placement</Text>
                            <Text style={styles.carouselSubtitle}>Get Job Ready with Our Training</Text>
                        </LinearGradient>
                    </Swiper>
                </View>

                {/* Quick Stats */}
                <View style={styles.statsContainer}>
                    {achievements.map((stat) => (
                        <View key={stat.id} style={styles.statCard}>
                            <Text style={styles.statIcon}>{stat.icon}</Text>
                            <Text style={styles.statNumber}>{stat.number}</Text>
                            <Text style={styles.statLabel}>{stat.label}</Text>
                        </View>
                    ))}
                </View>

                {/* Training Programs Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Training Programs</Text>
                    <View style={styles.programsGrid}>
                        {trainingPrograms.map((program) => (
                            <TouchableOpacity key={program.id} style={styles.programCard}>
                                <LinearGradient
                                    colors={[program.color, `${program.color}99`]}
                                    style={styles.programGradient}
                                >
                                    <Text style={styles.programIcon}>{program.icon}</Text>
                                    <Text style={styles.programTitle}>{program.title}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Latest Updates Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Latest Updates</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.updateCard}>
                        <LinearGradient
                            colors={['#43e97b', '#38f9d7']}
                            style={styles.updateIndicator}
                        />
                        <View style={styles.updateContent}>
                            <Text style={styles.updateTitle}>New Batch Starting Soon</Text>
                            <Text style={styles.updateDescription}>Full Stack Development batch starting from 15th August</Text>
                            <Text style={styles.updateDate}>3 hours ago</Text>
                        </View>
                    </View>

                    <View style={styles.updateCard}>
                        <LinearGradient
                            colors={['#fa709a', '#fee140']}
                            style={styles.updateIndicator}
                        />
                        <View style={styles.updateContent}>
                            <Text style={styles.updateTitle}>Placement Drive Success</Text>
                            <Text style={styles.updateDescription}>15 students got placed in top companies this month</Text>
                            <Text style={styles.updateDate}>1 day ago</Text>
                        </View>
                    </View>
                </View>

                {/* Quick Actions */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quick Actions</Text>
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity style={styles.actionButton}>
                            <LinearGradient
                                colors={['#667eea', '#764ba2']}
                                style={styles.actionGradient}
                            >
                                <Text style={styles.actionIcon}>📞</Text>
                                <Text style={styles.actionText}>Contact Us</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionButton}>
                            <LinearGradient
                                colors={['#f093fb', '#f5576c']}
                                style={styles.actionGradient}
                            >
                                <Text style={styles.actionIcon}>📚</Text>
                                <Text style={styles.actionText}>Courses</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionButton}>
                            <LinearGradient
                                colors={['#4facfe', '#00f2fe']}
                                style={styles.actionGradient}
                            >
                                <Text style={styles.actionIcon}>💼</Text>
                                <Text style={styles.actionText}>Placements</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#f5f7fa' 
    },

    // Carousel Styles
    carouselContainer: { 
        height: 220, 
        marginBottom: 20,
        borderRadius: 20,
        overflow: 'hidden',
        marginHorizontal: 15,
        marginTop: 15,
    },
    carouselSlide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    carouselTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 8,
    },
    carouselSubtitle: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
        fontWeight: '300',
    },
    pagination: {
        bottom: 15,
    },
    dot: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
    },
    activeDot: {
        backgroundColor: '#ffffff',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
    },

    // Stats Section
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 25,
    },
    statCard: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    statIcon: {
        fontSize: 24,
        marginBottom: 8,
    },
    statNumber: {
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

    // Section Styles
    section: { 
        paddingHorizontal: 15,
        marginBottom: 25,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: { 
        fontSize: 22, 
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    viewAllText: {
        color: '#667eea',
        fontSize: 14,
        fontWeight: '600',
    },

    // Programs Grid
    programsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    programCard: {
        width: (width - 40) / 2,
        marginBottom: 15,
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 8,
    },
    programGradient: {
        padding: 20,
        alignItems: 'center',
        minHeight: 120,
        justifyContent: 'center',
    },
    programIcon: {
        fontSize: 32,
        marginBottom: 10,
    },
    programTitle: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    // Update Cards
    updateCard: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 5,
    },
    updateIndicator: {
        width: 5,
    },
    updateContent: {
        flex: 1,
        padding: 18,
    },
    updateTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 6,
    },
    updateDescription: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginBottom: 8,
    },
    updateDate: {
        fontSize: 12,
        color: '#999',
        fontWeight: '500',
    },

    // Actions Container
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
    },
    actionGradient: {
        padding: 20,
        alignItems: 'center',
        minHeight: 100,
        justifyContent: 'center',
    },
    actionIcon: {
        fontSize: 28,
        marginBottom: 8,
    },
    actionText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})