import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import { AppImages, Colors, Fonts } from '../res';

const initialLayout = { width: Dimensions.get('window').width };

// ✅ Sample data for each category
const liquidDevices = [
  { id: '1', name: 'Liquid 2000', price: 25.99, image: AppImages.vape1 },
  { id: '2', name: 'Liquid Pro', price: 35.5, image: AppImages.vape2 },
  { id: '3', name: 'Pod 1000', price: 45.0, image: AppImages.vape3 },
  { id: '4', name: 'Pod Max', price: 59.99, image: AppImages.vape1 },
  { id: '5', name: 'Pod Ultra', price: 65.0, image: AppImages.vape2 },
  { id: '6', name: 'Cigalike Mini', price: 15.0, image: AppImages.vape2 },
];

const podDevices = [
  { id: '3', name: 'Pod 1000', price: 45.0, image: AppImages.vape3 },
  { id: '4', name: 'Pod Max', price: 59.99, image: AppImages.vape1 },
  { id: '5', name: 'Pod Ultra', price: 65.0, image: AppImages.vape2 },
  { id: '6', name: 'Cigalike Mini', price: 15.0, image: AppImages.vape2 },
];

const cigalikeDevices = [
  { id: '6', name: 'Cigalike Mini', price: 15.0, image: AppImages.vape2 },
  { id: '7', name: 'Cigalike Pro', price: 22.0, image: AppImages.vape3 },
];

const penDevices = [
  { id: '8', name: 'Pen Starter', price: 18.0, image: AppImages.vape1 },
  { id: '9', name: 'Pen Ultra', price: 32.0, image: AppImages.vape2 },
];

export default function Home() {
  const navigation = useNavigation();

  // 🔹 FlatList Card Component
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardWrapper}
      onPress={() => navigation.navigate('Details', { item })}
    >
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  // 🔹 Scenes for each tab
  const LiquidRoute = () => (
    <FlatList
      data={liquidDevices}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
    />
  );

  const PodRoute = () => (
    <FlatList
      data={podDevices}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
    />
  );

  const CigalikeRoute = () => (
    <FlatList
      data={cigalikeDevices}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
    />
  );

  const PenRoute = () => (
    <FlatList
      data={penDevices}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
    />
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'liquid', title: 'Liquid' },
    { key: 'pod', title: 'Pod' },
    { key: 'cigalike', title: 'Cigalike' },
    { key: 'pen', title: 'Pen' },
  ]);

  const renderScene = SceneMap({
    liquid: LiquidRoute,
    pod: PodRoute,
    cigalike: CigalikeRoute,
    pen: PenRoute,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.Smoke}>Choose your</Text>
      <Text style={styles.Smoke1}>Perfect Smoke</Text>
      {/* <View style={{ marginTop: 0 }}> */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={props => (
          <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={{ backgroundColor: '#00e0ff', height: 3 }}
            style={{ backgroundColor: 'white', marginTop: 20 }}
            activeColor={Colors.APPBLACK}
            inactiveColor="grey"
            labelStyle={{ fontSize: 14, fontFamily: Fonts.medium }}
          />
        )}
      />
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.GREY },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  cardWrapper: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 30,
  },
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    overflow: 'hidden',
    width: '100%',
    aspectRatio: 1, // square cards
  },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
  title: {
    color: Colors.BLACK,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },
  price: {
    color: '#00e0ff',
    fontSize: 14,
    marginTop: 2,
    textAlign: 'center',
  },
  Smoke: {
    color: Colors.APPBLACK,
    fontSize: 28,
    fontFamily: Fonts.regular,
    marginTop: 15,
  },
  Smoke1: {
    color: Colors.APPBLACK,
    fontSize: 28,
    fontFamily: Fonts.medium,
  },
});
