import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MainLayout({ children, navigation }) {
  return (
    <View style={styles.container}>
      {/* 🔹 Premium Header with Gradient */}
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerText}>DigiCoders</Text>
        <Text style={styles.headerSubtext}>Technologies</Text>
      </LinearGradient>

      {/* 🔹 Screen Content */}
      <View style={styles.content}>
        {children}
      </View>

      {/* 🔹 Premium Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navBackground} />
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <View style={styles.navIconContainer}>
            <Text style={styles.navIcon}>🏠</Text>
          </View>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <View style={styles.navIconContainer}>
            <Text style={styles.navIcon}>👤</Text>
          </View>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>
          <View style={styles.navIconContainer}>
            <Text style={styles.navIcon}>⚙️</Text>
          </View>
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('About')}>
          <View style={styles.navIconContainer}>
            <Text style={styles.navIcon}>ℹ️</Text>
          </View>
          <Text style={styles.navText}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f7fa' 
  },

  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerText: { 
    color: '#fff', 
    fontSize: 24, 
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  headerSubtext: {
    color: '#e8eef7',
    fontSize: 12,
    fontWeight: '300',
    letterSpacing: 2,
    marginTop: 2,
  },

  content: { 
    flex: 1 
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    position: 'relative',
  },
  navBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  navItem: { 
    alignItems: 'center',
    minWidth: 60,
  },
  navIconContainer: {
    backgroundColor: '#f8f9fa',
    padding: 8,
    borderRadius: 12,
    marginBottom: 4,
  },
  navIcon: {
    fontSize: 20,
  },
  navText: {
    fontSize: 12,
    color: '#6c757d',
    fontWeight: '500',
  },
});