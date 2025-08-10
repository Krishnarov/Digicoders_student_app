import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MainLayout from "../components/MainLayout";

export default function AboutScreen({ navigation }) {
    const branches = [
        {
            id: 1,
            city: 'Lucknow',
            address: '2nd Floor, B-36, Sector O, Near Ram Ram Bank Chauraha, Aliganj',
            phone: '+91 9198483820',
            color: ['#667eea', '#764ba2']
        },
        {
            id: 2,
            city: 'Kanpur',
            address: '128/3/98, Yashoda Nagar, Opp. Shivaji Park',
            phone: '+91 6394296293',
            color: ['#f093fb', '#f5576c']
        }
    ];

    const services = [
        { title: 'Software Development', icon: '💻', description: 'Custom software solutions' },
        { title: 'Website Development', icon: '🌐', description: 'Modern web applications' },
        { title: 'Mobile App Development', icon: '📱', description: 'iOS & Android apps' },
        { title: 'Digital Marketing', icon: '📈', description: 'Online marketing strategies' },
        { title: 'Training Programs', icon: '🎓', description: 'Professional skill development' },
    ];

    const handlePhoneCall = (phone) => {
        Linking.openURL(`tel:${phone}`);
    };

    const handleWebsite = () => {
        Linking.openURL('https://thedigicoders.com');
    };

    const handleEmail = () => {
        Linking.openURL('mailto:info@thedigicoders.com');
    };

    return (
        <MainLayout navigation={navigation}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                {/* Hero Section */}
                <LinearGradient
                    colors={['#667eea', '#764ba2']}
                    style={styles.heroSection}
                >
                    <View style={styles.logoContainer}>
                        <Image
                            source={{
                                uri: "https://thedigicoders.com/public/assets/images/background/team-2024.jpeg",
                            }}
                            style={styles.heroImage}
                        />
                        <View style={styles.logoOverlay}>
                            <Text style={styles.logoText}>DC</Text>
                        </View>
                    </View>

                    <Text style={styles.companyName}>DigiCoders Technologies</Text>
                    <Text style={styles.tagline}>Empowering Future Developers</Text>
                    <Text style={styles.location}>Lucknow, Uttar Pradesh</Text>
                </LinearGradient>

                {/* About Section */}
                <View style={styles.aboutSection}>
                    <Text style={styles.sectionTitle}>About Us</Text>
                    <View style={styles.aboutCard}>
                        <Text style={styles.aboutText}>
                            DigiCoders Technologies is the best software training company in Lucknow, 
                            led by young software engineers and entrepreneurs. We provide comprehensive 
                            training in latest technologies including software development, web development, 
                            mobile app development, and digital marketing.
                        </Text>
                    </View>
                </View>

                {/* Services Section */}
                <View style={styles.servicesSection}>
                    <Text style={styles.sectionTitle}>Our Services</Text>
                    {services.map((service, index) => (
                        <View key={index} style={styles.serviceCard}>
                            <View style={styles.serviceIcon}>
                                <Text style={styles.serviceIconText}>{service.icon}</Text>
                            </View>
                            <View style={styles.serviceContent}>
                                <Text style={styles.serviceTitle}>{service.title}</Text>
                                <Text style={styles.serviceDescription}>{service.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Branches Section */}
                <View style={styles.branchesSection}>
                    <Text style={styles.sectionTitle}>Our Branches</Text>
                    {branches.map((branch) => (
                        <View key={branch.id} style={styles.branchCard}>
                            <LinearGradient
                                colors={branch.color}
                                style={styles.branchHeader}
                            >
                                <Text style={styles.branchCity}>{branch.city} Branch</Text>
                            </LinearGradient>
                            
                            <View style={styles.branchContent}>
                                <View style={styles.branchInfo}>
                                    <Text style={styles.branchInfoIcon}>📍</Text>
                                    <Text style={styles.branchAddress}>{branch.address}</Text>
                                </View>
                                
                                <TouchableOpacity 
                                    style={styles.branchContact}
                                    onPress={() => handlePhoneCall(branch.phone)}
                                >
                                    <Text style={styles.branchContactIcon}>📞</Text>
                                    <Text style={styles.branchPhone}>{branch.phone}</Text>
                                </TouchableOpacity>
                                
                                <View style={styles.branchInfo}>
                                    <Text style={styles.branchInfoIcon}>⏰</Text>
                                    <Text style={styles.branchHours}>Mon-Sat: 10:00 AM - 7:00 PM</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Contact Section */}
                <View style={styles.contactSection}>
                    <Text style={styles.sectionTitle}>Get In Touch</Text>
                    <View style={styles.contactCard}>
                        <TouchableOpacity style={styles.contactItem} onPress={handleEmail}>
                            <LinearGradient
                                colors={['#43e97b', '#38f9d7']}
                                style={styles.contactIconContainer}
                            >
                                <Text style={styles.contactIcon}>📧</Text>
                            </LinearGradient>
                            <View style={styles.contactContent}>
                                <Text style={styles.contactTitle}>Email Us</Text>
                                <Text style={styles.contactText}>info@thedigicoders.com</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.contactItem} onPress={handleWebsite}>
                            <LinearGradient
                                colors={['#4facfe', '#00f2fe']}
                                style={styles.contactIconContainer}
                            >
                                <Text style={styles.contactIcon}>🌐</Text>
                            </LinearGradient>
                            <View style={styles.contactContent}>
                                <Text style={styles.contactTitle}>Visit Website</Text>
                                <Text style={styles.contactText}>www.thedigicoders.com</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Social Media */}
                <View style={styles.socialSection}>
                    <Text style={styles.sectionTitle}>Follow Us</Text>
                    <View style={styles.socialContainer}>
                        <TouchableOpacity style={styles.socialButton}>
                            <LinearGradient
                                colors={['#3b5998', '#8b9dc3']}
                                style={styles.socialGradient}
                            >
                                <Text style={styles.socialIcon}>📘</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.socialButton}>
                            <LinearGradient
                                colors={['#1da1f2', '#0084b4']}
                                style={styles.socialGradient}
                            >
                                <Text style={styles.socialIcon}>🐦</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.socialButton}>
                            <LinearGradient
                                colors={['#0077b5', '#00a0dc']}
                                style={styles.socialGradient}
                            >
                                <Text style={styles.socialIcon}>💼</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.socialButton}>
                            <LinearGradient
                                colors={['#e4405f', '#f56040']}
                                style={styles.socialGradient}
                            >
                                <Text style={styles.socialIcon}>📷</Text>
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
        backgroundColor: "#f5f7fa" 
    },

    // Hero Section
    heroSection: {
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 40,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 25,
    },
    logoContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    heroImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    logoOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    companyName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8,
        textAlign: 'center',
    },
    tagline: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: 5,
        fontWeight: '300',
    },
    location: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '400',
    },

    // About Section
    aboutSection: {
        paddingHorizontal: 15,
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        marginLeft: 5,
    },
    aboutCard: {
        backgroundColor: '#ffffff',
        padding: 25,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 5,
    },
    aboutText: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
        textAlign: 'justify',
    },

    // Services Section
    servicesSection: {
        paddingHorizontal: 15,
        marginBottom: 25,
    },
    serviceCard: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
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
    serviceIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    serviceIconText: {
        fontSize: 20,
    },
    serviceContent: {
        flex: 1,
    },
    serviceTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    serviceDescription: {
        fontSize: 14,
        color: '#666',
        fontWeight: '400',
    },

    // Branches Section
    branchesSection: {
        paddingHorizontal: 15,
        marginBottom: 25,
    },
    branchCard: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 8,
    },
    branchHeader: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    branchCity: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    branchContent: {
        padding: 20,
    },
    branchInfo: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
    },
    branchInfoIcon: {
        fontSize: 16,
        marginRight: 12,
        marginTop: 2,
        width: 20,
    },
    branchAddress: {
        fontSize: 14,
        color: '#555',
        flex: 1,
        lineHeight: 20,
    },
    branchContact: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#f8f9fa',
        padding: 12,
        borderRadius: 10,
    },
    branchContactIcon: {
        fontSize: 16,
        marginRight: 12,
        width: 20,
    },
    branchPhone: {
        fontSize: 16,
        color: '#667eea',
        fontWeight: '600',
    },
    branchHours: {
        fontSize: 14,
        color: '#555',
        flex: 1,
    },

    // Contact Section
    contactSection: {
        paddingHorizontal: 15,
        marginBottom: 25,
    },
    contactCard: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 5,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    contactIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    contactIcon: {
        fontSize: 20,
        color: '#ffffff',
    },
    contactContent: {
        flex: 1,
    },
    contactTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    contactText: {
        fontSize: 14,
        color: '#667eea',
        fontWeight: '500',
    },

    // Social Section
    socialSection: {
        paddingHorizontal: 15,
        marginBottom: 30,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 5,
    },
    socialButton: {
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
    },
    socialGradient: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialIcon: {
        fontSize: 20,
    },
});