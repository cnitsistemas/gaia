import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'native-base'
import Colors from '../../constants/Colors'

export default function Terms() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.h1}>TERMO DE USO</Text>
                <Text style={styles.text}>
                    Está página é utilizada para informar os usuários do aplicativo CNIT APLICATIVO - sobre nossas políticas de coleta de informação de uso.
                </Text>
                <Text style={styles.text}>
                    Se você escolher usar nossos serviços estará concordando com os termos listados nesta política.
                </Text>
                <Text style={styles.h1}>O APLICATIVO</Text>
                <Text style={styles.text}>
                    O aplicativo CNIT é capaz de fornecer serviços via mobile, como realização de frequência de alunos, consulta de rotas, entre outros.
                </Text>
                <Text style={styles.text}>
                    Para acessar o aplicativo é necessário efetuar login com e-mail e senha.
                </Text>
                <Text style={styles.text}>
                    Será possível o acesso ao app após a instalação do mesmo em um aparelho celular ou tablete independente de seu sistema operacional.
                </Text>
                <Text style={styles.h1}>ALTERAÇÕES A ESTE TERMO</Text>
                <Text style={styles.text}>
                    Para se manter fiel à Lei 13.709/2018 – Lei Geral de Proteção de Dados (LGPD) – que versa sobre o tratamento de dados pessoais,
                    este documento poderá ser alterado a qualquer tempo, seja por motivo de alteração da norma ou por mudar a forma como a solução
                    coleta e trata seus dados pessoais. Sendo assim, recomendamos sua leitura periodicamente.
                </Text>
                <Text style={styles.h1}>PROTEÇÃO DE DADOS</Text>
                <Text style={styles.text}>
                    Os dados pessoais fornecidos se destinam estritamente ao processamento do requerimento a ser formulado. Para o tratamento dos dados pessoais, como coleta, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, adotamos medidas de segurança, técnicas e administrativas adequadas, voltadas à proteção dos dados pessoais, de acordo a Lei Geral de Proteção de Dados - Lei nº 13.709/2018.
                </Text>
                <Text style={styles.h1}>COMPARTILHAMENTO DE INFORMAÇÕES COM TERCEIROS</Text>
                <Text style={styles.text}>
                    Os dados compartilhados podem ser repassados a terceiros para fins de análise de dados.
                    Toda e qualquer informação de caráter pessoal só poderá ser repassada mediante consentimento do titular.
                </Text>
                <Text style={styles.h1}>POLÍTICA DE PRIVACIDADE</Text>
                <Text style={styles.text}>
                    O aplicativo CNIT tem todas as suas informações pessoais recolhidas e armazenadas nos servidores da CNIT e serão utilizadas para o(a) ajudar a
                    tornar a utilização do aplicativo mais eficaz, liberando todas as funcionalidades nele oferecidas.</Text>
                <Text style={styles.text}>
                    A garantia da confidencialidade dos dados pessoais dos utilizadores do aplicativo CNIT é muito importante para o CNIT.</Text>
                <Text style={styles.text}>
                    O uso do aplicativo CNIT pressupõe a aceitação deste Acordo de Privacidade.
                </Text>
                <Text style={styles.text}>
                    A CNIT reserva-se ao direito de alterar este acordo sem aviso prévio. Deste modo, recomendamos que consulte a nossa política de privacidade constantemente de forma a estar sempre atualizada.
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    text: {
        textAlign: 'justify',
        marginBottom: 10
    },
    h1: {
        fontSize: 15,
        color: Colors.darkGray,
        marginBottom: 10,
        fontWeight: 'bold',
    }
})