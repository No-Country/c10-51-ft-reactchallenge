import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import {
  ArrowSvg,
  CartSvg,
  DesingCart,
  VectorCheck,
} from "../../components/svgs/Svgs";
import AddComboButton from "../../components/buttons/AddComboButton";
import { BtnPrimaryCol } from "../../components/buttons/Buttons";
import CreditCard from "../../components/cards/CreditCard";
import CardDeliveryDetail from "../../components/cards/CardDeliveryDetail";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from '@react-navigation/native';

const Cart = () => {
  const [userData, setUserData] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [subtotal, setSubtotal] = React.useState(0);
  const [envio, setEnvio] = React.useState(0);
  const total = subtotal + envio;
  const [cards, setCards] = useState([]);
  const isFocused = useIsFocused();


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await axios.get(`https://c10-51-ft.up.railway.app/users/4`);
        setUserData(userProfile.data);
        setCards(userProfile.data.targets);

        const cart = await axios.get(`https://c10-51-ft.up.railway.app/cart/4`);
        setCart(cart.data);
        //Obtengo el precio de cada comida y lo sumo
        let subtotal = 0;

        for (let i = 0; i < cart.data[0].cartIn.length; i++) {
          subtotal += cart.data[0].cartIn[i].price;
        }
        setSubtotal(subtotal);

        //Obtengo costo envio
        let idRestaurant = cart.data[0].cartIn[0].restaurants[0].id;
        if (idRestaurant) {
          const response = await axios.get(`https://c10-51-ft.up.railway.app/rest/${idRestaurant}`);
          setEnvio(response.data.shipping)
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    return () => {
      if (!isFocused) {
        axios.delete(`https://c10-51-ft.up.railway.app/cart/restart/4`).catch((error) => {
          console.error(error);
        });
      }
    };
  }, [isFocused]);

  const [selectDomicilio, setSelectDomicilio] = React.useState(
    "Seleccionar domicilio"
  );
  const [isClicked, setIsClicked] = React.useState(false);

  //Steps
  const [step, setStep] = useState(1);

  const navigation = useNavigation();

  //Elegir metodo de pago (1Tarjeta, 2Efectivo)
  const [metodoPago, setMetodoPago] = useState(1);
  return (

    <View style={{ marginTop: 32, flex: 1, backgroundColor: "white" }}>

      {step !== 3 && (
        <View style={styles.header}>
          <Text
            onPress={() => {
              if (step === 1) return;
              setStep(step - 1);
            }}
          >
            <ArrowSvg width={21} height={21} fill="black" rotating={90} />
          </Text>
          <Text style={styles.title}>Finalizar compra</Text>
          <CartSvg width={"24"} height={"24"} />
        </View>
      )}

      <ScrollView style={styles.container}>
        {cart.length === 0 ? (
          <Text style={styles.emptyCart}>El carrito está vacío</Text>
        ) : (
          <>
            {step === 1 ? (
              <View style={{ padding: 16 }}>
                <View style={styles.dropdown}>
                  <TouchableOpacity
                    style={styles.dropdownSelector}
                    onPress={() => {
                      setIsClicked(!isClicked);
                    }}
                  >
                    <Text>{selectDomicilio}</Text>
                    {isClicked ? (
                      <ArrowSvg
                        width={21}
                        height={21}
                        rotating={0}
                        fill="#514E4E"
                      />
                    ) : (
                      <ArrowSvg
                        width={21}
                        height={21}
                        rotating={180}
                        fill="#514E4E"
                      />
                    )}
                  </TouchableOpacity>
                  {isClicked ? (
                    <View style={styles.dropdownArea}>
                      <TouchableOpacity
                        style={styles.domicilios}
                        onPress={() => {
                          setSelectDomicilio(userData.address);

                          setIsClicked(false);
                        }}
                      >
                        <Text>{userData.address}</Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
                <Text style={{ marginTop: 16 }}>Productos</Text>
                <View style={styles.buttonsContainer}>
                  {Object.values(
                    cart.reduce((uniqueFoods, cartItem) => {
                      cartItem.cartIn.forEach((food) => {
                        if (!uniqueFoods[food.id]) {
                          food.cant = 1;
                          uniqueFoods[food.id] = food;
                        } else {
                          uniqueFoods[food.id].cant++;
                        }
                      });
                      return uniqueFoods;
                    }, {})
                  ).map((food) => (
                    <AddComboButton
                      id={food.id}
                      title={food.name}
                      img={food.img}
                      price={food.price}
                      cant={food.cant}
                    />
                  ))}
                </View>


                <View style={styles.resumeContainer}>
                  <View style={styles.resumeLine}>
                    <Text>Subtotal</Text>
                    <Text>${subtotal}</Text>
                  </View>
                  <View style={styles.resumeLine}>
                    <Text>Envio</Text>
                    <Text>${envio}</Text>
                  </View>
                  <View style={styles.resumeLine}>
                    <Text>Total</Text>
                    <Text>${total}</Text>
                  </View>
                </View>
                <View style={styles.separator} />
              </View>
            ) : step === 2 ? (
              <View style={{ padding: 16 }}>
                <Text style={{ marginTop: 16, marginBottom: 16, fontWeight: 500 }}>
                  Elegir metodo de pago
                </Text>
                <View
                  style={{ flexDirection: "row", justifyContent: "space-evenly" }}
                >
                  <TouchableOpacity
                    style={[
                      styles.paymentButton,
                      metodoPago === 1 && styles.selectedPaymentButton,
                    ]}
                    onPress={() => setMetodoPago(1)}
                  >
                    <Text>Tarjeta</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.paymentButton,
                      metodoPago === 2 && styles.selectedPaymentButton,
                    ]}
                    onPress={() => setMetodoPago(2)}
                  >
                    <Text>Efectivo</Text>
                  </TouchableOpacity>
                </View>
                {
                  // Si el metodo de pago es 1, se muestra la tarjeta
                  metodoPago === 1 && (
                    <View style={{ flexDirection: "row" }}>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                      >
                        {cards?.map((card) => (
                          <CreditCard
                            key={card.number}
                            name={card.name}
                            expiryDate={card.exp}
                          />
                        ))}
                        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("Pay")}>
                          <View style={{ flexDirection: "column", gap: 10 }}>
                            <Text style={styles.addButtonText}>
                              Añadir nueva tarjeta
                            </Text>
                            <View style={styles.circle}>
                              <Text style={{ color: "white" }}>+</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </ScrollView>
                    </View>
                  )
                }
                <Text style={{ marginTop: 16, marginBottom: 16 }}>
                  Detalle de la entrega
                </Text>
                <CardDeliveryDetail domicilio="Calle 123, Ciudad" />
                <View style={styles.resumeContainer}>
                  <View style={styles.resumeLine}>
                    <Text>Productos</Text>
                    <Text>${subtotal}</Text>
                  </View>
                  <View style={styles.resumeLine}>
                    <Text>Envio</Text>
                    <Text>${envio}</Text>
                  </View>
                  <View style={styles.separator} />
                  <View style={styles.resumeLine}>
                    <Text>Total</Text>
                    <Text style={{ fontWeight: 500 }}>${total}</Text>
                  </View>
                </View>
              </View>
            ) : (
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: "120%",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 30,
                    color: "#34A853",
                    marginBottom: 16,
                  }}
                >
                  Pedido realizado
                </Text>
                <VectorCheck width={150} height={150} />
                <DesingCart />
              </View>
            )}
            {step !== 3 && (
              <View style={{ width: "50%", alignSelf: "center", marginBottom: 16 }}>
                <BtnPrimaryCol
                  text={step === 2 ? "Pagar" : "Siguiente"}
                  onPress={() => {
                    setStep(step + 1);

                  }}
                  style={step === 2 ? { width: "100%" } : null}
                />
              </View>
            )}
          </>
        )}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: "#fff",
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
  },

  container: {
    height: "100%",
    //padding: 16,
  },
  buttonsContainer: {
    gap: 2,
    marginTop: 16,
  },
  resumeContainer: {
    gap: 2,
    marginTop: 16,
  },
  resumeLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#CCCCCC",
    marginVertical: 10,
  },
  dropdownTitle: {
    alignSelf: "center",
  },
  dropdownSelector: {
    width: "90%",
    height: 40,
    borderWidth: 0.5,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
  },
  dropdownArea: {
    width: "90%",
    height: "auto",
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
    marginTop: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  domicilios: {
    width: "80%",
    height: 50,
    borderBottomWidth: 0.2,
    borderColor: "8E8E8E",
    alignSelf: "center",
    justifyContent: "center",
  },
  input: {
    height: 30,
    margin: 12,
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 20,
  },
  paymentButton: {
    padding: 10,
    marginBottom: 16,
  },
  selectedPaymentButton: {
    borderColor: "#006477",
    borderBottomWidth: 2,
  },
  addButton: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    padding: 10,
    width: 200,
    height: 131,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#006477",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    alignSelf: "center",
  },
  emptyCart: {
    marginTop: 100,
    alignSelf: "center",
    justifySelf: "center",
  },
});

export default Cart;
