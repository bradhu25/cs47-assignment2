import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, ColorPropType } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';
import { Profiles } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.background}>
      <View style={styles.flex}>
        <View style={styles.navBar}>
          <Image style={styles.navBarIcons} source={Icons.menu.light}/>
          <Text style={[styles.logo]}>ensom</Text>
          <Image style={styles.navBarIcons} source={Icons.sun}/>
        </View>

        <View style={styles.content}>
          <ImageBackground style={[styles.profile, Themes.light.shadows]} source={Profiles.mtl.image}>
            <Text style={{fontFamily: 'Sydney', color:'white', fontSize: '32'}}> {Profiles.mtl.name}</Text>
            <Text style={{fontFamily: 'Sydney', color:'white', fontSize: '18'}}> {Profiles.mtl.caption}</Text>
          </ImageBackground>
          <View style={[styles.hottestTake, Themes.light.shadows]}>
            <Text style={{fontFamily: 'Sydney', color:'black', fontSize: '28'}}> My hottest take</Text>
            <View style={styles.playBar}>
              <Image style={{resizeMode:'contain', height: '100%', width: '100%'}} source={Icons.player.light}/>
              <Image style={{resizeMode:'contain', height: '100%', width: '100%'}} source={Icons.audioWave.light}/>
            </View>
          </View>
        </View>

        <View style={styles.bottomBar}>
          <View style={styles.bottomBarIcons}>
            <Image style={{resizeMode: 'contain', height: '50%', width: '50%'}} source={Icons.discover.light}/>
            <Text style={{fontFamily: 'Sydney', color:'white', fontSize: '15'}}> Discover</Text>
          </View>
          <View style={styles.bottomBarIcons}>
            <Image style={{resizeMode: 'contain', height: '50%', width: '50%'}} source={Icons.heart.light}/>
            <Text style={{fontFamily: 'Sydney', color:'white', fontSize: '15'}}> Matches</Text>
          </View>
          <View style={styles.bottomBarIcons}>
            <Image style={{resizeMode: 'contain', height: '50%', width: '50%'}} source={Icons.messages.light}/>
            <Text style={{fontFamily: 'Sydney', color:'white', fontSize: '15'}}> DMs</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  flex: {
    display: 'flex',
    flex: 1,
    width: '100%',
  },

  navBar: {
    marginTop: 24,
    marginBottom: 15,
    marginHorizontal: 24,
    flex: 0.4,
    display: 'flex',
    flexDirection:'row',
    backgroundColor: 'transparent',
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },

  logo: {
    fontFamily: 'Sydney-Bold',
    fontSize: 32,
  },

  navBarIcons: {
    resizeMode: 'contain',
    height: '75%',
    width: '75%',
  },

  content: {
    margin: 24,
    flex: 5,
    backgroundColor: 'transparent',
    marginTop: 10,
    marginBottom: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
  },

  profile: {
    resizeMode: 'stretch',
    height: '100%',
    width: '100%',
    display: 'flex',
    flex: 0.65,
    justifyContent: 'space-between',
    borderRadius: 13,
    overflow: 'hidden',
    paddingVertical: 15,
    paddingHorizontal: 8,
  },

  hottestTake: {
    backgroundColor: 'white',
    flex: 0.3,
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    borderRadius: 30,
  },

  playBar: {
    flex: 0.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '70%',
  },

  bottomBar: {
    marginTop: 34,
    flex: 0.6,
    backgroundColor: Themes.light.navigation,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },

  bottomBarIcons: {
    flex: 0.15,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
