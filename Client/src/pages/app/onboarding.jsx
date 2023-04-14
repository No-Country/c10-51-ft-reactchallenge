import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { BtnPrimaryCol } from "../../components/buttons/Buttons";

const Onboarding = () => {
  const image1 = require("../../../assets/images/onboarding/bussinesMan.png");
  const image2 = require("../../../assets/images/onboarding/stuying.png");
  const image3 = require("../../../assets/images/onboarding/workTime.png");
  const image4 = require("../../../assets/images/onboarding/onlineWorld.png");
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step === 4) {
      return;
    }
    setStep(step + 1);
  };

  return (
    <View style={styles.container}>
      {step === 1 ? (
        <>
          <Image source={image1} />
          <Text style={{ fontSize: 30, fontWeight: 500, color: `#006477` }}>
            ¡Bienvenido!
          </Text>
          <Text style={styles.text}>
            Estamos emocionados de que hayas decidido registrar tu negocio en
            nuestra aplicación de delivery. Aquí te guiaré a través del proceso
            de registro para que puedas empezar a recibir pedidos de inmediato.
          </Text>
          <BtnPrimaryCol text="Siguiente" onPress={handleNextStep} />
        </>
      ) : step === 2 ? (
        <>
          <Image source={image2} />
          <Text style={styles.text}>
            Primero, asegúrate de tener a mano la información necesaria para
            registrar tu negocio. Necesitarás el nombre y la dirección de tu
            negocio, así como también tu información de contacto, como tu
            dirección de correo electrónico y tu número de teléfono.
          </Text>
          <BtnPrimaryCol text="Siguiente" onPress={handleNextStep} />
        </>
      ) : step === 3 ? (
        <>
          <Image source={image3} />
          <Text style={styles.text}>
            Asegúrate de completar todo el formulario con información precisa y
            detallada sobre tu negocio, ya que esto nos ayudará a asegurarnos de
            que los clientes puedan encontrar tu negocio fácilmente y se sientan
            cómodos haciendo un pedido.
          </Text>
          <BtnPrimaryCol text="Siguiente" onPress={handleNextStep} />
        </>
      ) : step === 4 ? (
        <>
          <Image source={image4} />
          <Text style={styles.text}>
            Asegúrate de completar todo el formulario con información precisa y
            detallada sobre tu negocio, ya que esto nos ayudará a asegurarnos de
            que los clientes puedan encontrar tu negocio fácilmente y se sientan
            cómodos haciendo un pedido.
          </Text>
          <Text style={{ fontSize: 30, fontWeight: 500, color: `#006477` }}>
            ¡Exitos!
          </Text>
          <BtnPrimaryCol text="Comenzar" onPress={handleNextStep} />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    color: `#1A1A1A`,
    textAlign: "center",
    marginVertical: 16,
  },
});

export default Onboarding;
