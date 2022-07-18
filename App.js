import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
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
  arr_pieces.push({ image: type ? require(`./assest/Images/rook_b.png`) : require(`./assest/Images/rook_w.png`), x: 0, y })
  arr_pieces.push({ image: type ? require(`./assest/Images/rook_b.png`) : require(`./assest/Images/rook_w.png`), x: 7, y })
  arr_pieces.push({ image: type ? require(`./assest/Images/knight_b.png`) : require(`./assest/Images/knight_w.png`), x: 1, y })
  arr_pieces.push({ image: type ? require(`./assest/Images/knight_b.png`) : require(`./assest/Images/knight_w.png`), x: 6, y })
  arr_pieces.push({ image: type ? require(`./assest/Images/bishop_b.png`) : require(`./assest/Images/bishop_w.png`), x: 2, y })
  arr_pieces.push({ image: type ? require(`./assest/Images/bishop_b.png`) : require(`./assest/Images/bishop_w.png`), x: 5, y })
  arr_pieces.push({ image: type ? require(`./assest/Images/queen_b.png`) : require(`./assest/Images/queen_w.png`), x: 3, y })
  arr_pieces.push({ image: type ? require(`./assest/Images/king_b.png`) : require(`./assest/Images/king_w.png`), x: 4, y })
}
for (let i = 0; i < 8; i++) {
  arr_pieces.push({ image: require('./assest/Images/pawn_b.png'), x: i, y: 6 })
}
for (let i = 0; i < 8; i++) {
  arr_pieces.push({ image: require('./assest/Images/pawn_w.png'), x: i, y: 1 })
}
function App() {
  let board = []
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
        <View style={{ width: windowWidth / 8, height: 50, backgroundColor: number % 2 === 0 ? 'green' : 'white', borderWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
          {/* <Text>[{ngang[i]}{doc[j]}]</Text> */}
          <Image source={image}></Image>
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }
    }>{
        <Text>{board}</Text>
      }
    </View >
  );
}
export default App;