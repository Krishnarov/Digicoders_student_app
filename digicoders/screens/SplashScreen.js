import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.3)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;

    useEffect(() => {
        // Start animations
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                tension: 100,
                friction: 8,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 800,
                delay: 300,
                useNativeDriver: true,
            }),
        ]).start();

        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <LinearGradient
            colors={['#667eea', '#764ba2', '#667eea']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.background}
        >
            <View style={styles.container}>
                {/* Animated Logo */}
                <Animated.View
                    style={[
                        styles.logoContainer,
                        {
                            opacity: fadeAnim,
                            transform: [{ scale: scaleAnim }],
                        },
                    ]}
                >
                    <View style={styles.logoWrapper}>
                        <Image
                            source={require('../assets/logo.jpeg')}
                            style={styles.logo}
                            resizeMode="cover"
                        />
                        <View style={styles.logoOverlay} />
                    </View>
                </Animated.View>

                {/* Animated Title */}
                <Animated.View
                    style={[
                        styles.titleContainer,
                        {
                            opacity: fadeAnim,
                            transform: [{ translateY: slideAnim }],
                        },
                    ]}
                >
                    <Text style={styles.mainTitle}>DigiCoders</Text>
                    <Text style={styles.subtitle}>Technologies</Text>
                    <View style={styles.taglineContainer}>
                        <Text style={styles.tagline}>Empowering Future Developers</Text>
                    </View>
                </Animated.View>

                {/* Loading Animation */}
                <Animated.View
                    style={[
                        styles.loadingContainer,
                        { opacity: fadeAnim }
                    ]}
                >
                    <View style={styles.loadingDots}>
                        <View style={[styles.dot, styles.dot1]} />
                        <View style={[styles.dot, styles.dot2]} />
                        <View style={[styles.dot, styles.dot3]} />
                    </View>
                    <Text style={styles.loadingText}>Loading...</Text>
                </Animated.View>

                {/* Decorative Elements */}
                <View style={styles.decorativeCircle1} />
                <View style={styles.decorativeCircle2} />
                <View style={styles.decorativeCircle3} />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    logoContainer: {
        marginBottom: 40,
    },
    logoWrapper: {
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 20,
    },
    logo: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 4,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    logoOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 60,
    },
    mainTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#ffffff',
        letterSpacing: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    subtitle: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: '300',
        letterSpacing: 4,
        marginTop: 5,
    },
    taglineContainer: {
        marginTop: 15,
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    tagline: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: '400',
        letterSpacing: 1,
    },
    loadingContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 80,
    },
    loadingDots: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginHorizontal: 3,
    },
    dot1: {
        // Animation will be handled by React Native Animated API
    },
    dot2: {
        // Animation will be handled by React Native Animated API
    },
    dot3: {
        // Animation will be handled by React Native Animated API
    },
    loadingText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 14,
        fontWeight: '300',
        letterSpacing: 1,
    },
    decorativeCircle1: {
        position: 'absolute',
        top: 100,
        right: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    decorativeCircle2: {
        position: 'absolute',
        bottom: 200,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    decorativeCircle3: {
        position: 'absolute',
        top: 200,
        left: 50,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
});