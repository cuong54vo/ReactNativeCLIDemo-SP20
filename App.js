import React, { useRef, useState, useMemo } from "react";
import { View, Text, TouchableOpacity, Dimensions, Image, PanResponder, Animated, StyleSheet } from 'react-native'
import { Piece } from './src/interface/Piece';
import { Images } from './assest';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const doc = ["1", "2", "3", "4", "5", "6", "7", "8"];
const ngang = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// const pieces: Piece
const arr_pieces = []

for (let p = 0; p < 2; p++) {
  const type = p === 0
  const y = p === 0 ? 7 : 0
  arr_pieces.push({ image: type ? Images.rook_b : Images.rook_w, x: 0, y })
  arr_pieces.push({ image: type ? Images.rook_b : Images.rook_w, x: 7, y })
  arr_pieces.push({ image: type ? Images.knight_b : Images.knight_w, x: 1, y })
  arr_pieces.push({ image: type ? Images.knight_b : Images.knight_w, x: 6, y })
  arr_pieces.push({ image: type ? Images.bishop_b : Images.bishop_w, x: 2, y })
  arr_pieces.push({ image: type ? Images.bishop_b : Images.bishop_w, x: 5, y })
  arr_pieces.push({ image: type ? Images.queen_b : Images.queen_w, x: 3, y })
  arr_pieces.push({ image: type ? Images.king_b : Images.king_w, x: 4, y })
}
for (let i = 0; i < 8; i++) {
  arr_pieces.push({ image: Images.pawn_b, x: i, y: 6 })
}
for (let i = 0; i < 8; i++) {
  arr_pieces.push({ image: Images.pawn_w, x: i, y: 1 })
}

function App() {
  let board = []
  const position = useRef(new Animated.ValueXY()).current;
  const panResponder = React.useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      position.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => { },
  }), []);
  const MoveChess = (e) => {
    styles.keoImage.push({ paddingTop: 10 })
  }
  for (let j = doc.length - 1; j >= 0; j--) {
    for (let i = 0; i < ngang.length; i++) {
      const number = j + i + 2;
      let image = undefined;

      arr_pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image
        }
      })
      board.push(
        <View key={`${j},${i}`} style={{ width: windowWidth / 8, height: 50, backgroundColor: number % 2 === 0 ? 'green' : 'white', borderWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
          {/* <Text>[{ngang[i]}{doc[j]}]</Text> */}
          <Animated.View
            {...panResponder.panHandlers}
            style={
              { transform: position.getTranslateTransform() }}>
            <Image source={image}></Image>
          </Animated.View>
        </View>
      )
    }
  }
  // _renderItemImage = () => {
  //   board.map(i =>
  //   (
  //     <View key={i} style={{ flex: 1, width: '100%', }}>
  //       {
  //         <Image source={i}></Image>
  //       }
  //     </View>
  //   )
  //   )
  // }
  console.log("board", arr_pieces)
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>{board}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  keoImage: {

  }
})
export default App;