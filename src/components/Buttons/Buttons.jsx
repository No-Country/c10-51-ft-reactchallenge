import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";


export function BtnPrimaryPep(props) {
	const { text, onPress } = props;
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				...styles.btnsPrimaryLarge,
				backgroundColor: "#f1f1f1",
			}}
		>
			<Text style={styles.textBtn}>{text}</Text>
		</TouchableOpacity>
	);
}

export function BtnPrimaryLarge (props) {
    const {text, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.btnsPrimaryLarge, backgroundColor:'#f1f1f1',
    }}>
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity >
    );
};

export function BtnPrimaryColLarge (props) {
    const {text, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.btnsPrimaryLarge, backgroundColor:'#FE793D',
    }}>
            <Text style={{...styles.textBtn, color:'#f1f1f1'}}>{text}</Text>
        </TouchableOpacity >
    );
};

export function BtnPrimary (props) {
    const {text, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.btnsPrimary, backgroundColor:'#f1f1f1',
    }}>
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity >
    );
};

export function BtnPrimaryColo (props) {
    const {text, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.btnsPrimary, backgroundColor:'#FE793D',
    }}>
            <Text style={{...styles.textBtn, color:'#f1f1f1'}}>{text}</Text>
        </TouchableOpacity >
    );
};

export function BtnAddCart (props) {
    const {text, onPress} = props;
    return (
        <TouchableOpacity onPress={()=>alert('ejemplo')} style={styles.btnAddCart}>
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity >
    );
};

export function BtnFiltro (props) {
    const {text, onPress, color} = props;
    return (
        <TouchableOpacity onPress={()=>alert('ejemplo')} style={{...styles.btnAddCart,border:1, width:'auto', paddingHorizontal:12, paddingVertical:10}}>
            <Text style={styles.textBtn}>Filtro</Text>
        </TouchableOpacity >
    );
};


export function BtnPrimaryColLargee(props) {
	const { text, onPress } = props;
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				...styles.btnsPrimaryLarge,
				backgroundColor: "#7d7d7d",
			}}
		>
			<Text style={{ ...styles.textBtn, color: "#f1f1f1" }}>
				{text}
			</Text>
		</TouchableOpacity>
	);
}

export function BtnPrimaryy(props) {
	const { text, onPress } = props;
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{ ...styles.btnsPrimary, backgroundColor: "#f1f1f1" }}
		>
			<Text style={styles.textBtn}>{text}</Text>
		</TouchableOpacity>
	);
}

export function BtnPrimaryCol(props) {
	const { text, onPress } = props;
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{ ...styles.btnsPrimary, backgroundColor: "#a6a6a6" }}
		>
			<Text style={{ ...styles.textBtn, color: "#f1f1f1" }}>
				{text}
			</Text>
		</TouchableOpacity>
	);
}

export function BtnAddCartt(props) {
	const { text, onPress } = props;
	return (
		<TouchableOpacity
			onPress={() => alert("ejemplo")}
			style={styles.btnAddCart}
		>
			<Text style={styles.textBtn}>{text}</Text>
		</TouchableOpacity>
	);
}

export function BtnFiltroComp(props) {
	const { text, onPress } = props;
	return (
		<TouchableOpacity style={{...styles.btnAddCart , marginLeft:16}}>
			<Text style={styles.textBtn}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	btnsPrimaryLarge: {
		borderRadius: 100,
	},
	textBtn: {
		fontFamily: "Poppins-SemiBold",
	},
	btnsPrimary: {
		paddingHorizontal: 32,
		paddingVertical: 16,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 10,
	},
	btnAddCart: {
		height: 32,
		paddingHorizontal: 12,
		borderWidth: 0.5,
		borderRadius: 15,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
});