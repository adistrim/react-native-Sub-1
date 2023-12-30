import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import Swiper from "react-native-deck-swiper";

const ColoredCard = ({ backgroundColor }: { backgroundColor: string }) => {
  return <View style={[styles.card, { backgroundColor }]} />;
};

function App() {
  const [index, setIndex] = useState(0);

  const onSwiped = () => {
    setIndex(index + 1);
  }

  const cardColors = ["#94e5ff", "#94f7c1", "#f7e494", "#fcaf6f", "#fa7373"];

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Swiper
          cards={cardColors}
          cardIndex={index}
          renderCard={(backgroundColor, index) => <ColoredCard backgroundColor={backgroundColor} key={index} />}
          onSwiped={onSwiped}
          stackSize={3}
          stackScale={5}
          stackSeparation={25}
          disableTopSwipe
          disableBottomSwipe
          infinite={true}
          overlayLabels={{
            left: {
              element: (
                <Image
                  source={require("./assets/nope-image.png")}
                  style={styles.overlayImage}
                />
              ),
              style: {
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 55,
                  marginLeft: -10,
                },
              },
            },
            right: {
              element: (
                <Image
                  source={require("./assets/like-image.png")}
                  style={styles.overlayImage}
                />
              ),
              style: {
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 55,
                  marginLeft: 10,
                },
              },
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    marginTop: 45,
    flex: 0.8,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: "center",
    alignItems: "center",
  },
  overlayImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default App;
