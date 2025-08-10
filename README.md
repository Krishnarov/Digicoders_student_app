# Digicoders_student_app


# 🚀 My Awesome App

This is a **React Native app built using Expo** in GitHub Codespaces.  
It has:
- Splash Screen (3 seconds)
- Login Screen
- Home Screen with carousel & sections
- Profile, Settings, and About pages
- Common Header & Bottom Navigation for all screens (except splash & login)

---

## 📂 Project Structure


├── assets/ # Images, icons, fonts
│ ├── logo.png # App logo (Splash screen)
│
├── components/ # Reusable components
│ ├── Header.js # Common Header
│ ├── BottomNav.js # Common Bottom Navigation
│
├── screens/ # App screens
│ ├── SplashScreen.js # Initial splash screen (3 seconds)
│ ├── LoginScreen.js # Login screen
│ ├── HomeScreen.js # Home page with carousel & sections
│ ├── ProfileScreen.js # User profile page
│ ├── SettingsScreen.js # App settings
│ ├── AboutScreen.js # About the app
│
├── App.js # Main entry point with navigation setup
├── package.json # Dependencies & scripts
└── README.md # Project documentation



---

## ⚙️ Installation & Setup

# 1. Project create (Expo managed workflow)
npx create-expo-app MyAwesomeApp
cd MyAwesomeApp

# 2. (Optional) pehli baar dependencies install (create-expo-app usually runs it)
npm install

# 3. React Navigation core
npm install @react-navigation/native
npm install @react-navigation/native-stack

# 4. Native dependencies (Expo recommended install so version match ho)
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

# 5. Carousel library (jo humne use kiya)
npm install react-native-swiper

# 6. (Optional helpers)
npm install react-native-get-random-values react-native-url-polyfill

# 7. Start dev server from Codespaces (use tunnel so phone se connect ho)
npx expo start --tunnel


3) Jo packages install kiye aur unka purpose (simple)
expo / create-expo-app — Expo project scaffold karta hai, build & dev tools deta hai.

@react-navigation/native — Screen-to-screen navigation ka core.

@react-navigation/native-stack — Stack-style navigation (push / replace screens) ka implementation.

react-native-screens — performance improvements for navigation.

react-native-safe-area-context — notch/phone safe-area handling.

react-native-gesture-handler — gestures (swipes, taps) ke liye required.

react-native-reanimated — animations ke liye (recommended with gesture-handler).

react-native-swiper — Home screen me image carousel (auto sliding).

react-native-get-random-values / react-native-url-polyfill — kuch libraries ya unique ids / deep-links zaroori padne par use hote hain (optional).

5) Har important file ka simple explanation + main code behaviour
App.js — Navigation entry point
NavigationContainer app ke navigation ko wrap karta hai.

createNativeStackNavigator() se stack banate hain.

initialRouteName="Splash" se app pehle Splash kholti hai.

screenOptions={{ headerShown: false }} se default top header hide hota (hum apna custom header use karenge).

Key lines

jsx
Copy
Edit
<Stack.Screen name="Splash" component={SplashScreen} />
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Home" component={HomeScreen} />
SplashScreen.js
Kaam: app start par 3 seconds ke liye logo + name dikhana, fir login page.

useEffect + setTimeout use karke 3000ms delay lagaya.

navigation.replace('Login') — replace use karne se back button se wapas Splash nahi jayega.

Important

jsx
Copy
Edit
useEffect(() => {
  const timer = setTimeout(() => navigation.replace('Login'), 3000);
  return () => clearTimeout(timer);
}, []);
LoginScreen.js
Inputs: TextInput for Email & Password.

Button / TouchableOpacity ka onPress pe navigation.replace('Home') call karke Home screen open karte hain.

replace use karte hain taki user back se Login par na ja paye.

Button example

jsx
Copy
Edit
<Button title="Login" onPress={() => navigation.replace('Home')} />
MainLayout.js (reusable wrapper)
Ye component common Header + content area + BottomNav provide karta hai.

Har screen jisme header+bottom nav chahiye, usme MainLayout ko wrap karenge:

jsx
Copy
Edit
<MainLayout navigation={navigation}>
  {/* screen specific content */}
</MainLayout>
children jo pass karte ho, woh content area me dikhega.

Header (ya header area inside MainLayout)
Top me ek colored bar jisme app name ya logo hota.

jsx
Copy
Edit
<View style={styles.header}>
  <Text style={styles.headerText}>My Awesome App</Text>
</View>
BottomNav (ya bottom nav inside MainLayout)
4 TouchableOpacity items: Home, Profile, Settings, About.

Har ek ka onPress={() => navigation.navigate('ScreenName')}.

Example:

jsx
Copy
Edit
<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
  <Text>👤</Text>
  <Text>Profile</Text>
</TouchableOpacity>
Note: TouchableOpacity is preferred for custom-styled buttons; Button is simple native-styled.

HomeScreen.js
Isme MainLayout wrap use hua.

Carousel: react-native-swiper se images auto slide.

Additional sections: cards inside ScrollView.

Example carousel snippet:

jsx
Copy
Edit
<Swiper autoplay autoplayTimeout={3} showsPagination>
  <Image source={{ uri: 'https://picsum.photos/400/200?1' }} style={styles.carouselImage} />
  ...
</Swiper>
ProfileScreen.js
Show user image (Image with uri or local file), name, email.

TouchableOpacity for Edit profile.

Image local vs remote

Local: source={require('../assets/logo.png')}

Remote: source={{ uri: 'https://...' }}

SettingsScreen.js
Switch for Dark Mode (managed by useState).

Buttons for Change Password / Logout (for now show alert).

AboutScreen.js
Logo, app description, contact info inside ScrollView.

6) React Native ke kuch basic concepts (easy Hindi)
Component: UI ka ek piece (function). Example: function HomeScreen() { return <View>...</View> }.

Props: Parent se child ko data dene ka tarika. Example MainLayout navigation={navigation}.

State (useState): Component ke andar change hone waley data ko store karne ke liye. Example:

jsx
Copy
Edit
const [isDarkMode, setIsDarkMode] = useState(false);
useEffect: Component load hote hi ya kisi variable change par koi side-effect run karne ke liye. Example: splash timer.

Navigation.navigate vs replace:

navigate('Home') = stack me new screen push karta hai (back se wapas aaya ja sakta).

replace('Home') = current screen ko replace karta — back se vapas nahi jaa sakte.

StyleSheet.create: React Native me styling ka JS object; CSS jaise.

TouchableOpacity: Custom clickable area (styling ke saath).

Button: Simple platform button (kam customize hota hai).

7) Important code-snippets & unka matlab (simple)
Image show karna (local)
jsx
Copy
Edit
<Image source={require('../assets/logo.png')} style={{ width:100, height:100 }} resizeMode="contain" />
require local assets load karta, resizeMode image ka fit control karta.

Button click -> navigation
jsx
Copy
Edit
<TouchableOpacity onPress={() => navigation.replace('Home')}>
  <Text>Login</Text>
</TouchableOpacity>
3-second splash
jsx
Copy
Edit
useEffect(() => {
  const timer = setTimeout(() => navigation.replace('Login'), 3000);
  return () => clearTimeout(timer);
}, []);
8) Run & test (Codespaces specific)
Codespace terminal me:

bash
Copy
Edit
npx expo start --tunnel
Expo DevTools open hoga (browser) + terminal me QR code.

Apne phone pe Expo Go app kholke scan karo — app chal jayega.

Agar tunnel slow ho, try expo login and sign in (improves connection stability).

9) Checklist — kya kya karna hai (confirm kar lo)
 assets/logo.png add kiya hua hai.

 screens/ and components/ files created as per structure.

 App.js me Stack screens properly added: Splash, Login, Home, Profile, Settings, About.

 MainLayout (ya Header + BottomNav) screens me wrap ho jisse reuse ho.

 npx expo start --tunnel se test karo.