import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BtnPrimaryColLarge } from "../../components/buttons/Buttons";
import { Ionicons } from "@expo/vector-icons";
import DesingRegister from "../../components/svgs/Desing2";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [text, onChangeText] = useState("");
  const [user, onChangeUser] = useState("");
  const [password, onChangePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
//react hook form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "",
      UserName: "",
      Password: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  const navigation = useNavigation();
  const toLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 231,
          paddingTop: 24,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <DesingRegister style={{ position: "absolute" }} />
        <Text style={styles.primaryText}>Nombre de la APP</Text>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            marginBottom: 16,
            marginTop: 45,
            fontSize: 12,
          }}
        >
          Crear Cuenta
        </Text>
      </View>

      {/* forms */}
      <View style={styles.containerInputs}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^\S+@\S+$/i,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Ejemplo@gmail.com"
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
            />
          )}
          name="Email"
        />
        {errors.Email?.type === "required" && (
          <Text style={styles.required}>Debe completar este campo.</Text>
        )}
        {errors.Email?.type === "pattern" && (
          <Text style={styles.required}>Debe ingresar un mail correcto.</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Usuario"
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
            />
          )}
          name="UserName"
        />
        {errors.UserName?.type === "required" && (
          <Text style={{ ...styles.required, top: 76 }}>Debe completar este campo.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 8,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ ...styles.input, marginBottom: 24 }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Contrase'a"
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={!showPassword}
            />
          )}
          name="Password"
        />
        {errors.Password?.type === "required" && (
          <Text style={{ ...styles.required, top: 140, right: 57 }}>
            Debe completar este campo.
          </Text>
        )}
        {errors.Password?.type === "minLength" && (
          <Text style={{ ...styles.required, top: 140, right: 57 }}>
            Minimo 8 caracteres.
          </Text>
        )}

        <TouchableOpacity
          onPress={toggleShowPassword}
          style={styles.toggleButton}
        >
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={24}
            color="#333"
          />
        </TouchableOpacity>

        <BtnPrimaryColLarge
          onPress={handleSubmit(onSubmit)}
          text="Registrarse"
        />
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            marginVertical: 24,
            fontSize: 12,
            lineHeight: 14,
          }}
        >
          Ya tengo cuenta.{" "}
          <Text
            style={{ fontFamily: "Poppins-SemiBold" }}
            onPress={() => toLogin()}
          >
            Ingresar aqui
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  containerInputs: {
    width: "100%",
    height: 545,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  primaryText: {
    fontFamily: "Poppins-Bold",
    color: "#00869F",
    fontSize: 30,
    lineHeight: 37,
    marginBottom: 15,
  },

  input: {
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "Poppins-Regular",
    width: "100%",
    marginBottom: 24,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
  toggleButton: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 135,
    right: 30,
  },
  required: {
    color: "red",
    fontSize: 12,
    position: "absolute",
    right: 23,
    top: 13,
  },
});

export default RegisterScreen;
