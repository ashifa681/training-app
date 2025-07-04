import React from "react";
import { StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const statusData = [
  {
    id: '0',
    dp:   'https://i.imgur.com/dtJwXWz.png', 
    backgroundImage: '',
    name: 'Add Status',
    isAddStatus: true,
  },
  {
    id: '1',
    dp:'https://i.imgur.com/dtJwXWz.png',
    backgroundImage: 'https://picsum.photos/200/300?random=1',
    name: 'Tonic Ginni',
  },
  {
    id: '2',
    dp: 'https://i.imgur.com/dtJwXWz.png',
    backgroundImage: 'https://picsum.photos/200/300?random=2',
    name: 'Aneela',
  },
  {
    id: '3',
    dp: 'https://i.imgur.com/z8eE0nO.png',
    backgroundImage: 'https://picsum.photos/200/300?random=3',
    name: 'Haseeba',
  },
  {
    id: '4',
    dp: 'https://i.imgur.com/OHPHRlc.png',
    backgroundImage: 'https://picsum.photos/200/300?random=4',
    name: 'Raheela',
  },
  {
    id: '5',
    dp: 'https://i.imgur.com/7z6nNNz.png',
    backgroundImage: 'https://picsum.photos/200/300?random=5',
    name: 'Saima',
  },
  {
    id: '6',
    dp: 'https://i.imgur.com/NzIhFHD.png',
    backgroundImage: 'https://picsum.photos/200/300?random=6',
    name: 'Kaseer',
  },
  {
    id: '7',
    dp: 'https://i.imgur.com/8EJY5q7.png',
    backgroundImage: 'https://picsum.photos/200/300?random=7',
    name: 'Mafia',
  },
  {
    id: '8',
    dp: 'https://i.imgur.com/HlADyaZ.png',
    backgroundImage: 'https://picsum.photos/200/300?random=8',
    name: 'Ramna',
  },
  {
    id: '9',
    dp: 'https://i.imgur.com/FI7yT9B.png',
    backgroundImage: 'https://picsum.photos/200/300?random=9',
    name: 'Zainab',
  },
];

export default function WhatsappStatus() {

  const _renderStatus = ({ item }) => {
    return (
      <ImageBackground
        source={{ uri: item.backgroundImage }}
        style={styles.StatusContainer}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.profileContainer}>
          <Image source={{ uri: item.dp }} style={styles.dpImage} />

          {item.isAddStatus && (
            <View style={styles.plusIconOverlay}>
              <AntDesign name="pluscircle" size={16} color="#25D366" />
            </View>
          )}
        </View>
        <Text style={styles.nameText}>{item.name}</Text>
      </ImageBackground>
    );
  };

  return (
    <View>
      <View style={styles.headerTopRow}>
        <Text style={styles.headerText}>Updates</Text>
        <View style={styles.headerIconsRight}>
          <View style={styles.headerIcon}>
            <Entypo name="camera" size={24} color="black" />
          </View>
          <View style={styles.headerIcon}>
            <Ionicons name="pencil" size={24} color="black" />
          </View>
          <View style={styles.headerIcon}>
            <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
          </View>
        </View>
      </View>

      <View style={styles.header}>
        <View style={styles.statusListing}>
          <View style={styles.statusListingHeading}>
            <Text style={styles.headerSubText}>Status</Text>
          </View>

          <FlatList
            data={statusData}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={_renderStatus}
            showsHorizontalScrollIndicator={false}
          />
            
          <View style={styles.channelsExploreContainer}>
            <View style={styles.channelsButton}>
              <Text style={styles.channelsExploreText}>Channels</Text>
            </View>
            <View style={styles.exploreButton}>
              <Text style={styles.channelsExploreText}>Explore</Text>
            </View>
          </View>

          {/* Existing channels */}
          <View style={styles.channelUpdateContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80' }}
              style={styles.channelDp}
            />
            <View style={styles.channelTextContainer}>
              <Text style={styles.channelTitle}>IT Consultant jobs</Text>
              <Text style={styles.channelSubtitle}>⭐ We're Hiring! - Senior IT Cons......</Text>
            </View>
            <View style={styles.channelMetaContainer}>
              <Text style={styles.updateTime}>2h ago</Text>
              <View style={styles.updateBadge}>
                <Text style={styles.updateBadgeText}>3</Text>
              </View>
            </View>
          </View>

          <View style={styles.channelUpdateContainer}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/women/68.jpg' }}
              style={styles.channelDp}
            />
            <View style={styles.channelTextContainer}>
              <Text style={styles.channelTitle}>Internship & cyber jobs</Text>
              <Text style={styles.channelSubtitle}>Cipher Nest Hiring juni.....</Text>
            </View>
            <View style={styles.channelMetaContainer}>
              <Text style={styles.updateTime}>Yesterday</Text>
              <View style={styles.updateBadge}>
                <Text style={styles.updateBadgeText}>4</Text>
              </View>
            </View>
          </View>

          {/* New: Find Channels to Follow */}
          <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
              Find Channels to Follow
            </Text>

            {/* Channel 1 */}
            <View style={styles.channelUpdateContainer}>
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                style={styles.channelDp}
              />
              <View style={styles.channelTextContainer}>
                <Text style={styles.channelTitle}>Database</Text>
                <Text style={styles.channelSubtitle}>12.4K followers</Text>
              </View>
              <View style={styles.followButton}>
                <Text style={styles.followButtonText}>Follow</Text>
              </View>
            </View>

            {/* Channel 2 */}
            <View style={styles.channelUpdateContainer}>
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/women/33.jpg' }}
                style={styles.channelDp}
              />
              <View style={styles.channelTextContainer}>
                <Text style={styles.channelTitle}>Computer Architecture</Text>
                <Text style={styles.channelSubtitle}>9.8K followers</Text>
              </View>
              <View style={styles.followButtonActive}>
                <Text style={styles.followButtonTextActive}>Following</Text>
              </View>
            </View>

            {/* Channel 3 */}
            <View style={styles.channelUpdateContainer}>
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/34.jpg' }}
                style={styles.channelDp}
              />
              <View style={styles.channelTextContainer}>
                <Text style={styles.channelTitle}>Cloud Computing</Text>
                <Text style={styles.channelSubtitle}>15.2K followers</Text>
              </View>
              <View style={styles.followButton}>
                <Text style={styles.followButtonText}>Follow</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 10,
  },
  headerIconsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  header: {
    paddingHorizontal: 10,
  },
  headerIcon: {
    backgroundColor: '#F6F5F4',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  statusListing: {},
  statusListingHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerSubIconContainer: {
    flexDirection: "row",
    gap: 10,
  },
  headerSubText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  StatusContainer: {
    backgroundColor: "#f0f0f0",
    height: 150,
    width: 100,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
  profileContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  dpImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#fff',
  },
  plusIconOverlay: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  nameText: {
    position: 'absolute',
    bottom: 5,
    textAlign: 'center',
    width: '100%',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 2,
    fontSize: 12,
  },
  channelsExploreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  channelsButton: {
    backgroundColor: '#F6F5F4',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  exploreButton: {
    backgroundColor: '#4DA6FF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  channelsExploreText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  channelUpdateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 15,
    justifyContent: 'space-between',
  },
  channelDp: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  channelTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  channelTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  channelSubtitle: {
    color: '#555',
    fontSize: 12,
  },
  channelMetaContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  updateTime: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  updateBadge: {
    backgroundColor: '#4DA6FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    minWidth: 20,
    alignItems: 'center',
  },
  updateBadgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  followButton: {
    backgroundColor: '#F6F5F4',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  followButtonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  followButtonActive: {
    backgroundColor: '#4DA6FF',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  followButtonTextActive: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
});
