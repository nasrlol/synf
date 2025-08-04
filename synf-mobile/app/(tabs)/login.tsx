import React from "react";
import { TextInput } from "react-native";

export const login = () => {
	return (
		<>
			<TextInput style={styles.input} onChangeText={onChangeText} value={text} />
			<TextInput
				style={styles.input}
				onChangeText={onChangeNumber}
				value={number}
				placeholder="useless placeholder"
				keyboardType="numeric"
			/>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 100,
		paddingHorizontal: 24,
		backgroundColor: "#f2f2f2",
	},
	title: {
		fontSize: 30,
		fontWeight: "800",
		textAlign: "center",
		color: "#222",
	},
	subtitle: {
		fontSize: 18,
		textAlign: "center",
		color: "#555",
		marginVertical: 16,
	},
	buttonContainer: {
		marginTop: 40,
		gap: 16,
	},
	button: {
		backgroundColor: "#2d2d30ff",
    color: "#ffffff",
    textAlign: "center" ,
		paddingVertical: 14,
		paddingHorizontal: 24,
		borderRadius: 12,
		alignItems: "center",
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 6,
		elevation: 3,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "600",
	},
});

export default login;
