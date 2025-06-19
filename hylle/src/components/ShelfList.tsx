import { View, Text} from "react-native";

const shelves = [
  { id: '1', title: 'Lobster', quantity: '78' },
  { id: '2', title: 'Crab', quantity: '42' },
  { id: '3', title: 'Shrimp', quantity: '12' },
]

export default function ShelflList(){
  
    return (
      <View className="flex-col items-start p-4">
        {shelves.map((shelf)=>(
        <View key={shelf.id} className="flex-row">
        <View className="rounded-2xl bg-slate-500 w-1/6 h-20 mr-4 mb-4" />
        <View className="flex-col gap-2 mt-4">
          <Text>{shelf.title}</Text>
          <Text>{shelf.quantity} Books</Text>
        </View>
      </View>

        ))}
      </View>
    );
}