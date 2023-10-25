import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
	{
		id: 1,
		label: 'Boleto conta de luz',
		value: '269,00',
		date: '12/10/2023',
		type: 0, // despesas
	},
	{
		id: 2,
		label: 'Pix cliente X',
		value: '690,00',
		date: '02/10/2023',
		type: 1, // receita - entrada
	},
	{
		id: 3,
		label: 'Salário',
		value: '5.500,00',
		date: '09/10/2023',
		type: 1, // despesas
	},
];
export default function Home() {
	return (
		<View style={styles.container}>
			<Header name="Rogério Assunção" />

			<Balance saldo="9.520,00" gastos="-527,00" />

			<Actions />

			<Text style={styles.title}>Ultimas movimentações</Text>

			<FlatList
				style={styles.list}
				data={list}
				keyExtractor={(item) => String(item.id)}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => <Moviments data={item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fafafa',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		margin: 14,
		// marginLeft: 14,
		// marginRight: 14,
		// marginTop: 14,
		// marginBottom: 14,
	},
	list: {
		marginStart: 14,
		marginEnd: 14,
	},
});
