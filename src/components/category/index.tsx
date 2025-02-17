import { Pressable, PressableProps, Text } from "react-native";
import { s } from "./styles";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/colors";

type Props = PressableProps & { //o props deixa renderizar o onpress() na FlatList
    name: string
    iconId: string
    isSelected?: boolean
}

export function Category({ name, iconId, isSelected = false, ...rest }: Props) { //todos as propriedades que nao pegamos, esta sem pega pelo rest operator e sendo passada para o component
    const Icon = categoriesIcons[iconId]
    return (
        <Pressable style={[s.container, isSelected && s.containerSelected]} {...rest} >
            <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
            <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
        </Pressable>
    )
}