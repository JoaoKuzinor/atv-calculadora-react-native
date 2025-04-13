import { ScrollView, View } from "react-native";
import CustomBotao from "../ui/Botao";
import CustomTexto from "../ui/Texto";
import CustomInput from "../ui/Input";
import { useState } from "react";
import CustomLayout from "../ui/Layout/LayoutGeral";
import CustomLayoutOperador from "../ui/Layout/LayoutOperadores";

export default function ScreenCalculadora() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState("");
  const [operador, setOperador] = useState("");

  function calcularResultado() {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado("Valores inválidos");
      return;
    }

    let res = 0;

    switch (operador) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          setResultado("Divisão por zero");
          return;
        }
        res = num1 / num2;
        break;
      default:
        setResultado("Escolha um operador");
        return;
    }

    setResultado(res.toString());
  }

  return (
    <CustomLayout>
      <ScrollView>
        <View>
          <CustomTexto type="titulo">CALCULADORA</CustomTexto>
        </View>

        <View>
          <CustomTexto>VALOR 1</CustomTexto>
          <CustomInput
            hint="Digite o primeiro valor"
            onChangeText={setValor1}
            value={valor1}
          />
        </View>

        <View>
          <CustomTexto>VALOR 2</CustomTexto>
          <CustomInput
            hint="Digite o segundo valor"
            onChangeText={setValor2}
            value={valor2}
          />
        </View>

        <CustomLayoutOperador>
          <CustomBotao onPress={() => setOperador("+")}>+</CustomBotao>
          <CustomBotao onPress={() => setOperador("-")}>-</CustomBotao>
          <CustomBotao onPress={() => setOperador("*")}>*</CustomBotao>
          <CustomBotao onPress={() => setOperador("/")}>/</CustomBotao>
        </CustomLayoutOperador>

        <View>
          <CustomInput hint="Resultado" value={resultado} />
          <CustomBotao onPress={calcularResultado}>Calcular</CustomBotao>
        </View>
      </ScrollView>
    </CustomLayout>
  );
}
